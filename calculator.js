function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValuText = baseField.value;
    const base = parseFloat(baseValuText);
    

    const heightField = document.getElementById('triangle-height');
    const heightValuText = heightField.value;
    const height = parseFloat(heightValuText);
    

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area)
}
function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    

    const area = width * length;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Rectangle', area)
}
function calculateParallelogramArea() {
    const majorbase = getInputValue('parallelogram-base');
    const minorheight = getInputValue('parallelogram-height');
    const area = majorbase * minorheight;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area)

}
function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTowDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', area);
    
    addToCalculationEntry('Ellipse', areaTowDecimal);
}

// reuseable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reusable set span, p, div, etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// add to calculation entry
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success>Convert</button>`;
    calculationEntry = appendChild(p);
}