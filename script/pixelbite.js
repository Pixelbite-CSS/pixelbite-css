const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['o', 'opacity'],
    ['pt', 'padding-top'],
    ['pd', 'padding-down'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mt', 'margin-top'],
    ['md', 'margin-down'],
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
    ['bc', 'border-color'],
    ['br', 'border-radius'],
    ['bg', 'background'],
    ['ta', 'text-align'],
    ['fs', 'font-size'],
    ['fw', 'font-weight'],
    ['td', 'text-decoration'],
    ['fill', 'fill'],
    ['of', 'overflow'],
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
]

const styleColor = (propertyValue) => {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue)
}

const color_library = [
    ['primary', styleColor('--primary-color')],
    ['secondary', styleColor('--secondary-color')],
    ['success', styleColor('--success-color')],
    ['danger', styleColor('--danger-color')],
    ['warning', styleColor('--warning-color')],
    ['info', styleColor('--info-color')],
]

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

window.addEventListener("load", async () => {
    await checkLoremIpsum()
    checkChange(0)
    slideshowGenerator()
})

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

const checkChange = async (instances) => {
    await sleep(500)
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
        element.classList.forEach((element_class) => {
            for (let j = 0; j < class_library.length; j++) {
                let element_class_split = element_class.split('-');
                let splitToString = element_class_split[1] + ''
                if (splitToString.includes('_')) {
                    element_class_split[1] = splitToString.replace('_', '-')
                }
                if (element_class_split[0] === class_library[j][0]) {
                    element.style.cssText += class_library[j][1] + ':' + classSplitToString(element_class_split, 1) + ';'
                }
            }
        })
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
}

const classSplitToString = (array, startPosition) => {
    if (array) {
        let a = ""
        for (let i = startPosition; i < array.length; i++) {
            for (let j = 0; j < color_library.length; j++) {
                if (array[i] === color_library[j][0]) {
                    array[i] = color_library[j][1]
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