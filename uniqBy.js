// TO DO

const uniqBy = (key, arr) => {
    const acc = []
    arr.map(x => {
        function checkKey(accValue) {
            return accValue[key] === x[key]
        }
        const existsInAcc = acc.filter(checkKey).length > 0
        if(existsInAcc === false) {
            acc.push(x)
        } else {
            const idxdbl = acc.findIndex(checkKey)
            acc[idxdbl] = x
        }
    })
    return acc
}

console.log(uniqBy('id', [
    { id: 1, name: 'Anakin', age: 10 },
    { id: 1, name: 'Darth Vader', side: 'dark' },
    { id: 2, name: 'Anakin' },
]))