const calculateLineCapacity = (lineDiameter, lineLength, newLineDiameter) => {
    lineDiameter = parseFloat(lineDiameter);
    lineLength = parseFloat(lineLength);
    newLineDiameter = parseFloat(newLineDiameter);
    return (Math.pow(lineDiameter, 2) * lineLength) / Math.pow(newLineDiameter, 2);
}

export default calculateLineCapacity;