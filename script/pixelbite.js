const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['o', 'opacity'],
    ['pt', 'padding-top'],
    ['pb', 'padding-bottom'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mt', 'margin-top'],
    ['mb', 'margin-bottom'],
    ['ml', 'margin-left'],
    ['mr', 'margin-right'],
    ['g', 'gap'],
    ['ar', 'aspect-ratio'],
    ['d', 'display'],
    ['w', 'width'],
    ['h', 'height'],
    ['maxW', 'max-width'],
    ['maxH', 'max-height'],
    ['minW', 'min-width'],
    ['minH', 'min-height'],
    ['border', 'border'],
    ['b', 'border'],
    ['bleft', 'border-left'],
    ['bright', 'border-right'],
    ['btop', 'border-top'],
    ['bbottom', 'border-bottom'],
    ['br', 'border-radius'],
    ['bg', 'background'],
    ['ta', 'text-align'],
    ['fs', 'font-size'],
    ['fw', 'font-weight'],
    ['td', 'text-decoration'],
    ['fill', 'fill'],
    ['of', 'overflow'],
    ['ofx', 'overflow-x'],
    ['ofy', 'overflow-y'],
    ['flex', 'flex'],
    ['flexDirection', 'flex-direction'],
    ['flexWrap', 'flex-wrap'],
    ['flexItems', 'align-items'],
    ['flexContent', 'align-content'],
    ['flexJustifyContent', 'justify-content'],
    ['flexAlignItems', 'align-items'],
    ['gridColumns', 'grid-template-columns'],
    ['gridRows', 'grid-template-rows'],
    ['shadow', 'box-shadow'],
    ['top', 'top'],
    ['bottom', 'bottom'],
    ['left', 'left'],
    ['right', 'right'],
    ['zIndex', 'z-index'],
]

const styleColor = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue).toString()
}

var pixelbite = {
    classes: class_library,
    theme: {
        variables: {
            primary: styleColor('--primary-color').toString(),
            secondary: styleColor('--secondary-color').toString(),
            danger: styleColor('--danger-color').toString(),
            info: styleColor('--info-color').toString(),
            warning: styleColor('--warning-color').toString(),
            success: styleColor('--success-color').toString(),
        },
        colors: {
            white: [0, '0%'],
            gray: [0, '0%'],
            black: [0, '0%'],
            red: [0, '100%'],
            orange: [36, '100%'],
            yellow: [59, '100%'],
            green: [108, '100%'],
            teal: [154, '100%'],
            cyan: [182, '100%'],
            blue: [235, '100%'],
            purple: [275, '100%'],
            pink: [300, '100%'],
        }
    },
    aliases: {},
    loremIpsum: [
        "Hercle, species primus!",
        "Indexs volare, tanquam emeritis nix.",
        "Festus bulla vix locuss barcas est.",
        "Domuss sunt equisos de flavum cedrium.",
        "A falsis, diatria emeritis clabulare.",
        "Medicinas sunt menss de pius nuclear vexatum iacere.",
        "Verpas sunt plasmators de brevis pes.",
        "Placidus, alter nuclear vexatum iaceres patienter talem de nobilis, noster cursus.",
        "Ubi est azureus castor?",
        "Cum abnoba resistere, omnes hilotaees examinare pius, emeritis poetaes.",
        "Ubi est bi-color lanista?",
        "Stellas prarere in ostravia!",
        "Ausus peregrinationess, tanquam talis mensa.",
        "Est teres deus, cesaris.",
        "Est dexter animalis, cesaris.",
        "Finis albus eleates est.",
        "Bassus consilium interdum captiss accentor est.",
        "Fuga noceres, tanquam castus racana.",
        "Contencio, byssus, et tata.",
        "Sunt guttuses gratia ferox, velox decores.",
        "Elogium mirabilis abactor est.",
        "Nunquam magicae mensa.",
        "Pol, a bene historia.",
        "Ubi est raptus acipenser?",
        "Mensa, ratione, et vortex.",
        "Rumors cantare!",
        "Decors volare!",
        "Fluctuss peregrinationes!",
        "Cum agripeta credere, omnes silvaes transferre domesticus, clemens sectames.",
        "Lapsus de domesticus era, manifestum lanista!",
        "Cur clabulare ridetis?",
        "Deuss observare, tanquam albus domus.",
        "A falsis, planeta rusticus visus.",
        "Primus seculas ducunt ad orgia.",
        "Pol, a bene guttus, magnum glos!",
        "Ortum satis ducunt ad fortis candidatus.",
        "Neuter, alter fraticinidas unus attrahendam de teres, fortis rumor.",
        "Devatios ortum!",
        "Cadunt saepe ducunt ad primus imber.",
        "Ubi est camerarius species?",
        "Vae.",
        "Genetrixs sunt adiurators de nobilis exemplar.",
    ],
    update: 500

}

const getObjectValues = (object) => {
    return Object.entries(object)
}

const setCustomComponents = () => {
    let elements = document.getElementsByTagName('*')
    customComponentsCheck(elements)
}

const customComponentsCheck = (array, relativePath) => {
    if (!relativePath) relativePath = ''
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.tagName.toUpperCase().includes('COMPONENT')) {
            let element_attributes = element.getAttributeNames()
            includeHtmlToAnElement(element, relativePath + element.getAttribute('path'), element_attributes)
        }
    }
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

const includeHtmlToAnElement = (element, path, attributes) => {
    if (!path) path = 'null'
    let relativePathSplit = path.split('/')
    let relativePath = ''
    for (let i = 0; i < relativePathSplit.length - 1; i++) {
        relativePath += relativePathSplit[i] + '/'
    }
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = this.responseText + ''
                for (let i = 0; i < attributes.length; i++) {
                    let attribute = attributes[i]
                    let attribute_syntax = '${' + attributes[i] + '}'
                    if (response.includes(attribute_syntax)) {
                        // response = response.replace(attribute_syntax, element.getAttribute(attribute))
                        response = replaceAll(response, attribute_syntax, element.getAttribute(attribute))
                        element.removeAttribute(attribute)
                    }
                }
                element.innerHTML = response
                if (element.getElementsByTagName('COMPONENT')) {
                    customComponentsCheck(element.getElementsByTagName('COMPONENT'), relativePath)
                }
            }
            if (this.status === 404) {
                let toggleClass = 'toggle-' + randomString(32)
                let toggleClassMore = 'toggle-' + randomString(32)
                let detailsString = '';
                for (let i = 0; i < attributes.length; i++) {
                    detailsString += '[' + attributes[i] + '="' + element.getAttribute(attributes[i]).replaceAll('<', '&lt;') + '"], <br>'
                }
                element.innerHTML =
                '<div class="' + toggleClass + ' fw-500 p-14px-20px bg-warning br-4px m-4px pr-48px">' +
                    '<code>Component not found [path=' + path + ']<br></code>' +
                    '<code class="' + toggleClassMore + '" onclick="toggleElement(\'' + toggleClassMore + '\')"> - see more details</code>' +
                    '<code class="' + toggleClassMore + ' hidden"><code onclick="toggleElement(\'' + toggleClassMore + '\')">- see less details</code><br>' + detailsString + '</code>' +
                    '<button class="close-x" onclick="toggleElement(\'' + toggleClass + '\')"></button>' +
                '</div>'
            }
        }
    }
    xhttp.open("GET", path, true);
    xhttp.send();
}

let darkmode = false

window.addEventListener("load", async () => {
    await checkLoremIpsum()
    darkmode = getCookie('darkmode')
    checkChange(0)
    setCustomComponents()
    slideshowGenerator()
})

const changeThemeMode = async () => {
    if (darkmode === '0') {
        darkmode = '1'
        setCookie('darkmode', '1', 365)
    } else {
        darkmode = '0'
        setCookie('darkmode', '0', 365)
    }
}

const checkLoaders = async () => {
    let loaders = document.getElementsByClassName('loader')
    if (loaders.length > 0) {
        for (let i = 0; i < loaders.length; i++) {
            loaders[i].style.opacity = '0';
            await sleep(400);
            loaders[i].style.display = 'none';
            loaders[i].remove()
        }
    }
}

const checkLoremIpsum = () => {
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.forEach((element_class) => {
            let element_class_split = element_class.split('-');
            if (element_class_split[0] === "loremIpsum") {
                for (let k = 0; k < element_class_split[1]; k++) {
                    elements[i].innerHTML += randomFromArray(getObjectValues(pixelbite.loremIpsum)) + " "
                }
            }
        })
    }
}


const checkChange = async (instances) => {
    await sleep(pixelbite.update)
    await classGenerator()
    if (instances <= 0) checkLoaders()
    await checkChange(instances + 1)
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += randomFromArray(characters);
        counter += 1;
    }
    return result;
}

const randomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

window.onload = () => {
    console.log(
        "%cThank you for using PixelbiteCSS :)",
        "font-size:18px;font-weight:bold"
    )
    console.log(
        "%cMore information or documentation can be found on our GitHub\nhttps://github.com/Pixelbite-CSS",
        "font-weight:bold"
    )
    addSignature()
    classGenerator()
}

const changeRootVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

const classGenerator = () => {
    if (pixelbite.theme.variables.primary !== document.documentElement.style.getPropertyValue('--primary-color')) {changeRootVariable('--primary-color', pixelbite.theme.variables.primary)}
    if (pixelbite.theme.variables.secondary !== document.documentElement.style.getPropertyValue('--secondary-color')) {changeRootVariable('--secondary-color', pixelbite.theme.variables.primary)}
    if (pixelbite.theme.variables.success !== document.documentElement.style.getPropertyValue('--success-color')) {changeRootVariable('--success-color', pixelbite.theme.variables.primary)}
    if (pixelbite.theme.variables.info !== document.documentElement.style.getPropertyValue('--info-color')) {changeRootVariable('--info-color', pixelbite.theme.variables.primary)}
    if (pixelbite.theme.variables.danger !== document.documentElement.style.getPropertyValue('--danger-color')) {changeRootVariable('--danger-color', pixelbite.theme.variables.primary)}
    if (pixelbite.theme.variables.warning !== document.documentElement.style.getPropertyValue('--warning-color')) {changeRootVariable('--warning-color', pixelbite.theme.variables.primary)}
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        aliasClassReplace(element)
        element.classList.forEach((element_class) => {
            for (let j = 0; j < class_library.length; j++) {
                let element_class_split = element_class.split('-');
                let splitToString = element_class_split[1] + ''
                if (splitToString.includes('_')) {
                    element_class_split[1] = splitToString.replace('_', '-')
                }
                if (darkmode === '1') {
                    if (element_class_split[0].includes('dark:')) {
                        element_class_split[0] = element_class_split[0].replace('dark:', '')
                    }
                }
                if (element_class_split[0].includes('foreach:')) {
                    element_class_split[0] = element_class_split[0].replace('foreach:', '')
                    let elementsOfElement = element.getElementsByTagName('*')
                    if (element_class_split[0] === class_library[j][0]) {
                        for (let k = 0; k < elementsOfElement.length; k++) {
                            elementsOfElement[k].style.cssText += class_library[j][1] + ':' + classSplitToString(element_class_split, 1) + ';'
                        }
                    } else {
                        for (let k = 0; k < elementsOfElement.length; k++) {
                            elementsOfElement[k].classList.add(element_class)
                        }
                    }
                }
                if (element_class_split[0].includes('max') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('max', '').replace(':', '').replace('px', '')
                    if (size <= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }
                if (element_class_split[0].includes('min') && element_class_split[0].includes(':')) {
                    let size = element_class_split[0].split(':')[0].replace('min', '').replace(':', '').replace('px', '')
                    if (size >= window.innerWidth) {
                        element_class_split[0] = element_class_split[0].split(':')[1]
                    }
                }
                if (element_class_split[0] === class_library[j][0]) {
                    element.style.cssText += class_library[j][1] + ':' + classSplitToString(element_class_split, 1) + ';'
                }
            }
        })
        updateSearchbars()
        generateFloatInput(element)
    }
}

const generateFloatInput = (element) => {
    if (element.classList.contains("floatInput")) {
        if (element.getElementsByClassName('input') && element.getElementsByClassName('label')) {
            if (element.getElementsByClassName('input') && element.getElementsByTagName('label')) {
                let inputs = element.getElementsByTagName('input')
                let input = inputs[0]
                let labels = element.getElementsByTagName('label')
                let label = labels[0]
                if (input.value) label.classList.add('inputhastext')
                else if (label.classList.contains('inputhastext')) label.classList.remove('inputhastext')
            }
        }
    }
}

const aliasClassReplace = (element) => {
    let x = element.classList
    for (let i = 0; i < x.length; i++) {
        let aliasClasses = getObjectValues(pixelbite.aliases)
        for (let j = 0; j < aliasClasses.length; j++) {
            if (aliasClasses[j][0] === x[i]) {
                for (let k = 0; k < aliasClasses[j][1].length; k++) {
                    element.classList.add(aliasClasses[j][1][k])
                }
            }
        }
    }
}

const classSplitToString = (array, startPosition) => {
    if (array) {
        let colors = getObjectValues(pixelbite.theme.variables)
        let color_library_hsl = getObjectValues(pixelbite.theme.colors)
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (array[i] === colors[j][0]) {
                    array[i] = colors[j][1]
                }
            }
            for (let j = 0; j < color_library_hsl.length; j++) {
                if (array[i].includes(color_library_hsl[j][0])) {
                    array[i] = array[i].replace(color_library_hsl[j][0], "hsl(" + color_library_hsl[j][1][0] + "," + color_library_hsl[j][1][1] + ",")
                    array[i] += "%)"
                }
            }
            a += array[i] + " "
        }
        return a
    } else return ""
}

const addSignature = () => {
    const comment = document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");
    document.body.appendChild(comment);
}

const debugmode = (boolean) => {
    if (boolean) {
        let elements = document.getElementsByTagName('*')
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('contenteditable', 'true')
        }
    }
}

const href = (location, newWindow) => {
    if (newWindow) newWindow = '_blank'
    else newWindow = '_self'
    window.open(location, newWindow)
}

const toggleElement = (element_class) => {
    const elements = document.getElementsByClassName(element_class)
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('hidden')) {
            elements[i].style.position = 'absolute'
            elements[i].classList.remove('hidden')
        }
        if (elements[i].style.position !== 'absolute') {
            elements[i].style.position = 'absolute'
            elements[i].style.top = '-999999999px'
        } else {
            elements[i].style.position = 'relative'
            elements[i].style.top = '0px'
        }
    }
}

const changeVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

let beforeSlideshows = []

const slideshowGenerator = async () => {
    let slideshows = document.getElementsByClassName('slideshow')
    if (slideshows !== beforeSlideshows) {
        if (slideshows.length > 0) {
            for (let i = 0; i < slideshows.length; i++) {
                if(!beforeSlideshows.includes(slideshows[i])) {
                    let slideshow = slideshows[i]
                    let slides = slideshow.getElementsByClassName('slide')
                    slideshowSlide(0, slideshow, slides)
                }
            }
            beforeSlideshows = slideshows
        }
    }
    await sleep(1000)
    await slideshowGenerator()
}

const slideshowSlide = async (index, slideshow, slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = ((-i + index) * 100) + "%"
    }
    if (index >= slides.length - 1) index = -1
    await sleep(5000)
    await slideshowSlide(index + 1, slideshow, slides)
}

const setCookie = (name, value, days_to_expiration) => {
    const d = new Date()
    d.setTime(d.getTime() + (days_to_expiration * 24 * 60 * 60 * 1000))
    let expires = "expires="+ d.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

const getCookie = (name) => {
    let n = name + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') { c = c.substring(1) }
        if (c.indexOf(n) === 0) return c.substring(n.length, c.length)
    }
    return ""
}

const updateSearchbars = () => {
    let searchbars = document.getElementsByClassName('searchbar')
    for (let i = 0; i < searchbars.length; i++) {
        let search = searchbars[i].getElementsByClassName('search')[0]
        let searchValue = search.value.toLowerCase();
        let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
        for (let j = 0; j < searchValues.length; j++) {
            if (searchValues[j].innerText.toLowerCase().includes(searchValue) && searchValue) {
                searchValues[j].style.display = 'flex'
            } else {
                searchValues[j].style.display = 'none'
            }
        }
    }
}
