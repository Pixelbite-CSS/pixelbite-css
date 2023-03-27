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

let aliasClasses = []

const addAliasClass = (alias, string_of_classes) => {
    let classes_array = string_of_classes.split(' ')
    aliasClasses.push([alias, classes_array])
}

const styleColor = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue)
}

const color_library = () => {
    return [
        ['primary', styleColor('--primary-color')],
        ['secondary', styleColor('--secondary-color')],
        ['success', styleColor('--success-color')],
        ['danger', styleColor('--danger-color')],
        ['warning', styleColor('--warning-color')],
        ['info', styleColor('--info-color')],
    ]
}

let color_library_hsl = [
    ['white', 0, '0%'],
    ['black', 0, '0%'],
    ['red', 0, '100%'],
    ['orange', 36, '100%'],
    ['yellow', 59, '100%'],
    ['greenyellow', 74, '100%'],
    ['green', 108, '100%'],
    ['teal', 154, '100%'],
    ['cyan', 182, '100%'],
    ['blue', 235, '100%'],
    ['purple', 275, '100%'],
    ['pink', 300, '100%'],
]

const addColorHsl = (name, hue, saturation) => {
    if (saturation.toString().includes('%')) {
        color_library_hsl.push([name, hue, saturation])
    } else {
        color_library_hsl.push([name, hue, saturation + '%'])
    }
}

let loremIpsum = [
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
]

let darkmode = false

window.addEventListener("load", async () => {
    await checkLoremIpsum()
    darkmode = getCookie('darkmode')
    checkChange(0)
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
                    elements[i].innerHTML += randomFromArray(loremIpsum) + " "
                }
            }
        })
    }
}

let changeDelay = 500
const changeClassUpdateDelay = (ms) => {
    changeDelay = ms
}

const checkChange = async (instances) => {
    await sleep(changeDelay)
    await classGenerator()
    if (instances <= 0) checkLoaders()
    await checkChange(instances + 1)
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
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

const classGenerator = () => {
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
                } if (element_class_split[0] === class_library[j][0]) {
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
        let colors = color_library()
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < colors.length; j++) {
                if (array[i] === colors[j][0]) {
                    array[i] = colors[j][1]
                }
            }
            for (let j = 0; j < color_library_hsl.length; j++) {
                if (array[i].includes(color_library_hsl[j][0])) {
                    array[i] = array[i].replace(color_library_hsl[j][0], "hsl(" + color_library_hsl[j][1] + "," + color_library_hsl[j][2] + ",")
                    array[i] += "%)"
                }
            }
            a += array[i] + " "
        }
        return a.trim()
    } else return ""
}

const addSignature = () => {
    const comment = document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");
    document.body.appendChild(comment);
}

const href = (location) => {
    window.location.href = location
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

const slideshowGenerator = () => {
    let slideshows = document.getElementsByClassName('slideshow')
    if (slideshows.length > 0) {
        for (let i = 0; i < slideshows.length; i++) {
            let slideshow = slideshows[i]
            let slides = slideshow.getElementsByClassName('slide')
            slideshowSlide(0, slideshow, slides)
        }
    }
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
