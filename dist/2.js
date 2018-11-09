var a = true;
var c = null;
// 特殊类型
// 数组：一组具有相同类型特征的数据的有序集合
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 枚举
var result = 1;
var obj = {
    init: 0,
    success: 1,
    error: 2
};
if (result === obj.success) { }
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color["Greer"] = "blue";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log('1', Color['Greer']);
// Any 任意类型
// void 无返回值类型
// Never 永远没有返回值
