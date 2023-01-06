console.log('Module')

function average(arr){
    let sum = 0;
    arr.forEach(element =>{
        sum += element;
    });
    return sum/arr.length;
}
// module.exports.sam = "Hey";

module.exports = {
    avg: average,
    name: 'Harry',
    repo: 'GitHub'
}