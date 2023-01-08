const class_library = [
    ['c', 'color'],
    ['p', 'padding'],
    ['pt','padding-top'],
    ['pd', 'padding-down'],
    ['pl', 'padding-left'],
    ['pr', 'padding-right'],
    ['m', 'margin'],
    ['mt','margin-top'],
    ['md', 'margin-down'],
    ['ml', 'margin-left'],
    ['mr', 'margin-right'],
    ['g', 'gap'],
    ['d', 'display'],
    ['w', 'width'],
    ['h', 'height'],
    ['border', 'border'],
    ['bc', 'border-color'],
    ['br', 'border-radius'],
    ['bg', 'background'],
    ['ta', 'text-align'],
    ['fs', 'font-size'],
    ['fw', 'font-weight'],
    ['of', 'overflow'],
    ['flex', 'flex'],
    ['flexDirection', 'flex-direction'],
    ['flexWrap', 'flex-wrap'],
    ['flexItems', 'flex-align-items'],
    ['flexContent', 'flex-align-content'],
    ['gridColumns', 'grid-template-columns'],
    ['gridRows', 'grid-template-rows'],
    ['shadow', 'box-shadow'],
]

const styleColor = (propertyValue) => {return getComputedStyle(document.documentElement).getPropertyValue(propertyValue)}

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

window.addEventListener("load", async () => {
    let loaders = document.getElementsByClassName('loader')
    if (loaders.length > 0) {
        for (let i = 0; i < loaders.length; i++) {
            loaders[i].style.opacity = '0';
            await sleep(100);
            loaders[i].style.display = 'none';
        }
    }
})

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = () => {
    console.log(
        "%cThank you for using PixelbiteCSS :)",
        "font-size:18px;font-weight:bold"
    );
    console.log(
        "%cMore information or documentation can be found on our GitHub\nhttps://github.com/Pixelbite-CSS",
        "font-weight:bold"
    );
    addSignature()
    const elements = document.getElementsByTagName('*')
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        element.classList.forEach((element_class) => {
            for (let j = 0; j < class_library.length; j++) {
                let element_class_split = element_class.split('-');
                if (element_class_split[0] === class_library[j][0]) {
                    element.style.cssText += class_library[j][1] + ':' + classSplitToString(element_class_split, 1) + ';'
                }
            }
        })
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
    }
    else return ""
}

const addSignature = () => {
    const comment = document.createComment("This site is created via PixelbiteCSS (https://github.com/Pixelbite-CSS)");
    document.body.appendChild(comment);
}