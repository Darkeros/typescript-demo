// 类型断言
function getData() {
    if (Math.random() < 0.5) {
        return 'adsf';
    }
    else {
        return ['a', 'b', 'c'];
    }
}
var resul = getData();
if (resul.push) {
    resul.push();
}
else {
    resul.substring(0);
}
console.log(resul);
