var numbers = [3, 2, 0, 6];
function map(arr, cb) {
    return arr.reduce(function (acc, value, index) {
        var res = cb(value, index, arr);
        acc.push(res);
        return acc;
    }, []);
}
var res = map(numbers, function (value, index, arr) {
    return value * 2;
});
console.log(res);
function filter(arr, cb) {
    return arr.reduce(function (acc, value, index) {
        var res = cb(value, index, arr);
        if (res) {
            acc.push(value);
        }
        return acc;
    }, []);
}
function testGeneric(value) {
    console.log(value);
    return value;
}
console.log(filter(numbers, function (value, index, numbers) { return value > 3; }));
// filter<number>(numbers, (value, ) => {})
testGeneric('hello');
