function acceptedValues(colName, valuesList) {
    return `${colName} NOT IN ( ${valuesList} )`;
}

module.exports = { acceptedValues };