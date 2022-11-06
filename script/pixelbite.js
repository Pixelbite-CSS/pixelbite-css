const class_library = [
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
    ['w', 'width'],
    ['h', 'height'],
    ['bg', 'background'],
    ['flex', 'flex'],
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

window.onload = () => {
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
            a += array[i] + " "
        }
        return a.trim()
    }
    else return ""
}