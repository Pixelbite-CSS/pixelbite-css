const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['pos', 'position'],
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
    ['ff', 'font-family'],
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
    ['ws', 'word-spacing'],
    ['ls', 'letter-spacing'],
    ['lh', 'line-height'],
    ['zIndex', 'z-index'],
]

const pb_getRootVariable = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue).toString()
}

const pb_putCustomFontIntoCSS = (name, url) => {
    let newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode("@font-face {font-family: " + name + "; src: " + url + ";}"));
    document.head.appendChild(newStyle);
}

var pixelbite = {
    classes: class_library,
    theme: {
        variables: {
            primary: pb_getRootVariable('--primary-color').toString(),
            secondary: pb_getRootVariable('--secondary-color').toString(),
            danger: pb_getRootVariable('--danger-color').toString(),
            info: pb_getRootVariable('--info-color').toString(),
            warning: pb_getRootVariable('--warning-color').toString(),
            success: pb_getRootVariable('--success-color').toString(),
            fontPrimary: pb_getRootVariable('--font-family').toString(),
            fontMonospace: pb_getRootVariable('--font-mono-family').toString(),
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
        "Nam quis nulla.",
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
        "Nullam rhoncus aliquam metus.",
        "Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.",
        "Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",
        "In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.",
        "Mauris suscipit.",
        "Etiam sapien elit, consequat eget.",
        "Etiam neque.",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        "Integer in sapien.",
        "Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo.",
        "Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam.",
        "Duis condimentum augue id magna semper rutrum.",
        "Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.",
        "Jsi cool člověk.",
        "Fusce aliquam vestibulum ipsum.",
        "Aliquam erat volutpat.",
        "Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien.",
    ],
    update: 500,
    version: '1.5.2'
}

const pb_getObjectValues = (object) => {
    return Object.entries(object)
}

const pb_setCustomComponents = () => {
    let elements = document.getElementsByTagName('*')
    pb_customComponentsCheck(elements)
}

const pb_customComponentsCheck = (array, relativePath) => {
    if (!relativePath) relativePath = ''
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.tagName.toUpperCase().includes('COMPONENT')) {
            let element_attributes = element.getAttributeNames()
            let path = element.getAttribute('path')
            if (path.startsWith('http://') || path.startsWith('https://')) {
                path = element.getAttribute('path')
            } else {
                path = relativePath + element.getAttribute('path')
            }
            pb_includeHtmlToAnElement(element, path, element_attributes)
        }
    }
}

function pb_replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

const pb_customGithubMakrdown = (text) => {
    const replacements = [
        // { pattern: /</g, replacement: "&lt;" },
        // { pattern: />/g, replacement: "&gt;" },
        {pattern: /^#{6}\s+(.*)$/gm, replacement: "<h6>$1</h6>"},
        {pattern: /^#{5}\s+(.*)$/gm, replacement: "<h5>$1</h5>"},
        {pattern: /^#{4}\s+(.*)$/gm, replacement: "<h4 class='mt-32px'>$1</h4>"},
        {pattern: /^#{3}\s+(.*)$/gm, replacement: "<h3>$1</h3>"},
        {pattern: /^#{2}\s+(.*)$/gm, replacement: "<h2>$1</h2>"},
        {pattern: /^#{1}\s+(.*)$/gm, replacement: "<h1>$1</h1>"},
        {
            pattern: /```([\s\S]*?)```/g, replacement: function (match, p1) {
                p1 = p1.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return "```" + p1 + "```";
            }
        },
        {pattern: /^!~(.*?)$/gm, replacement: "<span class='highlight'>$1</span>"},
        {pattern: /^~~(.*?)$/gm, replacement: "<span>$1</span>"},
        {pattern: /~(.*?)~/g, replacement: "<code class=\"c-info\">$1</code>"},
        {pattern: /^- \[(x| )\]\s+(.*)$/gm, replacement: "<li><input type=\"checkbox\" $1> $2</li><ul>"},
        {pattern: /\*\*(.*)\*\*/gm, replacement: "<strong>$1</strong>"},
        {pattern: /__(.*)__/gm, replacement: "<strong>$1</strong>"},
        {pattern: /\*(.*)\*/gm, replacement: "<em>$1</em>"},
        {pattern: /_(.*)_/gm, replacement: "<em>$1</em>"},
        {pattern: /~~(.*)~~/gm, replacement: "<del>$1</del>"},
        {pattern: /^>\s+(.*)$/gm, replacement: "<blockquote>$1</blockquote>"},
        { pattern: /^- (.*)$/gm, replacement: "<li>$1</li>" },
        { pattern: /<\/li>\n<li>/g, replacement: "</li><li>" },
        { pattern: /<li>(.*)<\/li>/gm, replacement: "<ul><li>$1</li></ul>" },
        {pattern: /!\[(.*?)\]\((.*?)\)/gm, replacement: '<img src="$2" alt="$1">'},
        {pattern: /\[(.*?)\]\((.*?)\)/gm, replacement: '<a href="$2">$1</a>'},
        {
            pattern: /```([\w-]+)?\n([\s\S]*?)\n```/gm,
            replacement: '<pre class=\"numberedLines maxw-100% b-1px-solid-primary br-6px p-12px-16px\" $1><code>$2</code></pre>'
        },
        {pattern: /`([^`]+)`/gm, replacement: '<code class="bg-rgba(128,128,128,.15) c-white50 fw-600 fs-12px p-2px-4px br-4px">$1</code>'},
        {pattern: /\n---\n/gm, replacement: "<hr>"},
        // {pattern: /\n/gm, replacement: "<br>"},
    ];
    let html = text;
    replacements.forEach(({pattern, replacement}) => {
        html = html.replace(pattern, replacement);
    });
    return html;
}

const pb_includeHtmlToAnElement = async (element, path, attributes) => {
    if (!path) path = 'null'
    let relativePathSplit = path.split('/')
    let relativePath = ''
    for (let i = 0; i < relativePathSplit.length - 1; i++) {
        relativePath += relativePathSplit[i] + '/'
    }
    let componentRequest = new XMLHttpRequest();
    componentRequest.onreadystatechange = async function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let response = this.responseText + ''
                for (let i = 0; i < attributes.length; i++) {
                    let attribute = attributes[i]
                    if (attribute.includes('[object]')) {
                        let object = ''
                        let objectName = attribute.replace('[object]', '')
                        let objectPath = element.getAttribute(attribute)
                        let objectRequest = new XMLHttpRequest();
                        objectRequest.onreadystatechange = function () {
                            if (this.readyState === 4 && this.status === 200) {
                                try {
                                    object = JSON.parse(this.responseText);
                                } catch (error) {
                                    console.error('PixelBite: Your "' + objectName + '[object]" has syntax error.')
                                }
                            }
                        };
                        objectRequest.open("GET", objectPath, true);
                        objectRequest.send();
                        while (!object) {
                            await pb_sleep(10)
                        }
                        const regex = /\$\{for\(([\s\S]*?)\)\}/g;
                        const objectFors = response.match(regex);
                        if (objectFors) {
                            for (let j = 0; j < objectFors.length; j++) {
                                if (objectFors[j].includes('${for(')) {
                                    let objectForSplit = objectFors[j].substring(6, objectFors[j].length - 2).split('::')
                                    let string = ''
                                    for (let k = 0; k < eval(objectForSplit[0]); k++) {
                                        string += pb_replaceAll(objectForSplit[1], '[i]', '[' + k + ']')
                                    }
                                    response = pb_replaceAll(response, objectFors[j], string)
                                }
                            }
                        }
                        let objectStrings = response.match(/\${(.*?)}/g);
                        if (objectStrings) {
                            for (let j = 0; j < objectStrings.length; j++) {
                                if (objectStrings[j].includes(objectName)) {
                                    let objectString = objectStrings[j].replace('${', '').replace('}', '')
                                    try {
                                        let value = eval(objectString)
                                        response = pb_replaceAll(response, objectStrings[j], value)
                                    } catch (error) {
                                        response = pb_replaceAll(response, objectStrings[j], '')
                                        console.error('PixelBite: Cannot read property from "' + objectName + '[object]" (reading "' + objectStrings[j] + '"), please check if value in the object exists.')
                                    }
                                }
                            }
                        }
                    }
                    let attribute_syntax = '${' + attributes[i] + '}'
                    if (response.includes(attribute_syntax)) {
                        // response = response.replace(attribute_syntax, element.getAttribute(attribute))
                        response = pb_replaceAll(response, attribute_syntax, element.getAttribute(attribute))
                        element.removeAttribute(attribute)
                    }
                }
                if (element.getAttribute('markdown') === 'github') {
                    response = pb_customGithubMakrdown(response)
                }
                element.innerHTML = response
                if (element.getElementsByTagName('COMPONENT')) {
                    pb_customComponentsCheck(element.getElementsByTagName('COMPONENT'), relativePath)
                }
            }
            if (this.status === 404) {
                let toggleClass = 'toggle-' + pb_randomString(32)
                let toggleClassMore = 'toggle-' + pb_randomString(32)
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
    componentRequest.open("GET", path, true);
    componentRequest.send();
}

let darkmode = false

window.addEventListener("load", async () => {
    await pb_checkLoremIpsum()
    darkmode = pb_getCookie('darkmode')
    pb_checkChange(0)
    pb_setCustomComponents()
    pb_slideshowGenerator()
})

const changeThemeMode = async () => {
    if (darkmode === '0') {
        darkmode = '1'
        pb_setCookie('darkmode', '1', 365)
    } else {
        darkmode = '0'
        pb_setCookie('darkmode', '0', 365)
    }
}

const pb_checkLoaders = async () => {
    let loaders = document.getElementsByClassName('loader')
    if (loaders.length > 0) {
        for (let i = 0; i < loaders.length; i++) {
            loaders[i].style.opacity = '0';
            await pb_sleep(400);
            loaders[i].style.display = 'none';
            loaders[i].remove()
        }
    }
}

const pb_checkLoremIpsum = () => {
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.forEach((element_class) => {
            let element_class_split = element_class.split('-');
            if (element_class_split[0] === "loremIpsum") {
                for (let k = 0; k < element_class_split[1]; k++) {
                    elements[i].innerHTML += pb_randomFromArray(pb_getObjectValues(pixelbite.loremIpsum))[1] + " "
                }
                elements[i].classList.remove(element_class)
            }
        })
    }
}


const pb_checkChange = async (instances) => {
    await pb_sleep(pixelbite.update)
    await pb_classGenerator()
    if (instances <= 0) pb_checkLoaders()
    await pb_checkChange(instances + 1)
}

const pb_sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function pb_randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += pb_randomFromArray(characters);
        counter += 1;
    }
    return result;
}

const pb_randomFromArray = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

window.onload = () => {
    console.log(
        "%cThank you for using PixelbiteCSS :) (version " + pixelbite.version + ")",
        "font-size:18px;font-weight:bold"
    )
    console.log(
        "%cMore information can be found on our website or GitHub\nhttps://pixelbite-css.github.io, https://github.com/Pixelbite-CSS",
        "font-weight:bold"
    )
    pb_addSignature()
    pb_classGenerator()
}

const pb_changeRootVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

const pb_classGenerator = () => {
    pb_checkLoremIpsum()
    if (pixelbite.theme.variables.primary !== document.documentElement.style.getPropertyValue('--primary-color')) {
        pb_changeRootVariable('--primary-color', pixelbite.theme.variables.primary)
    }
    if (pixelbite.theme.variables.secondary !== document.documentElement.style.getPropertyValue('--secondary-color')) {
        pb_changeRootVariable('--secondary-color', pixelbite.theme.variables.secondary)
    }
    if (pixelbite.theme.variables.success !== document.documentElement.style.getPropertyValue('--success-color')) {
        pb_changeRootVariable('--success-color', pixelbite.theme.variables.success)
    }
    if (pixelbite.theme.variables.info !== document.documentElement.style.getPropertyValue('--info-color')) {
        pb_changeRootVariable('--info-color', pixelbite.theme.variables.info)
    }
    if (pixelbite.theme.variables.danger !== document.documentElement.style.getPropertyValue('--danger-color')) {
        pb_changeRootVariable('--danger-color', pixelbite.theme.variables.danger)
    }
    if (pixelbite.theme.variables.warning !== document.documentElement.style.getPropertyValue('--warning-color')) {
        pb_changeRootVariable('--warning-color', pixelbite.theme.variables.warning)
    }
    if (pixelbite.theme.variables.fontPrimary !== document.documentElement.style.getPropertyValue('--font-family')) {
        pb_changeRootVariable('--font-family', pixelbite.theme.variables.fontPrimary)
    }
    if (pixelbite.theme.variables.fontMonospace !== document.documentElement.style.getPropertyValue('--font-mono-family')) {
        pb_changeRootVariable('--font-mono-family', pixelbite.theme.variables.fontMonospace)
    }
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        pb_aliasClassReplace(element)
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
                            elementsOfElement[k].style.cssText += class_library[j][1] + ':' + pb_classSplitToString(element_class_split, 1) + ';'
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
                    element.style.cssText += class_library[j][1] + ':' + pb_classSplitToString(element_class_split, 1) + ';'
                }
            }
        })
        pb_updateSearchbars()
        pb_generateFloatInput(element)
    }
}

const pb_generateFloatInput = (element) => {
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

const pb_aliasClassReplace = (element) => {
    let x = element.classList
    for (let i = 0; i < x.length; i++) {
        let aliasClasses = pb_getObjectValues(pixelbite.aliases)
        for (let j = 0; j < aliasClasses.length; j++) {
            if (aliasClasses[j][0] === x[i]) {
                let classSplit = aliasClasses[j][1].split(' ')
                for (let k = 0; k < classSplit.length; k++) {
                    element.classList.add(classSplit[k])
                }
            }
        }
    }
}

const pb_classSplitToString = (array, startPosition) => {
    if (array) {
        let variables = pb_getObjectValues(pixelbite.theme.variables)
        let color_library_hsl = pb_getObjectValues(pixelbite.theme.colors)
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < variables.length; j++) {
                if (variables[j][1].includes('url(')) {
                    let fontName = 'font-' + pb_randomString(32)
                    let varia = pixelbite.theme.variables
                    pb_putCustomFontIntoCSS(fontName, variables[j][1])
                    varia[variables[j][0]] = fontName
                }
                if (array[i] === variables[j][0]) {
                    array[i] = variables[j][1]
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

const pb_addSignature = () => {
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

const pb_changeVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

let pb_beforeSlideshows = []

const pb_slideshowGenerator = async () => {
    let slideshows = document.getElementsByClassName('slideshow')
    if (slideshows !== pb_beforeSlideshows) {
        if (slideshows.length > 0) {
            for (let i = 0; i < slideshows.length; i++) {
                if (!pb_beforeSlideshows.includes(slideshows[i])) {
                    let slideshow = slideshows[i]
                    let slides = slideshow.getElementsByClassName('slide')
                    pb_slideshowSlide(0, slideshow, slides)
                }
            }
            pb_beforeSlideshows = slideshows
        }
    }
    await pb_sleep(1000)
    await pb_slideshowGenerator()
}

const pb_slideshowSlide = async (index, slideshow, slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.left = ((-i + index) * 100) + "%"
    }
    if (index >= slides.length - 1) index = -1
    await pb_sleep(5000)
    await pb_slideshowSlide(index + 1, slideshow, slides)
}

const pb_setCookie = (name, value, days_to_expiration) => {
    const d = new Date()
    d.setTime(d.getTime() + (days_to_expiration * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

const pb_getCookie = (name) => {
    let n = name + "="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(n) === 0) return c.substring(n.length, c.length)
    }
    return ""
}

let pb_searchbarsBefore = []

const pb_updateSearchbars = () => {
    if (pb_searchbarsBefore.length !== document.getElementsByClassName('searchbar').length) {
        let searchbars = document.getElementsByClassName('searchbar')
        for (let i = 0; i < searchbars.length; i++) {
            let search = searchbars[i].getElementsByClassName('search')[0]
            let searchValues = searchbars[i].getElementsByClassName('search-values')[0].getElementsByTagName('div')
            for (let j = 0; j < searchValues.length; j++) {
                searchValues[j].style.display = 'none'

            }
            search.oninput = () => {
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
        pb_searchbarsBefore = searchbars
    }
}