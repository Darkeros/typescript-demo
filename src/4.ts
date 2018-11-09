function fn1(x: number, y: number): number {
  return x + y
}
fn1(1, 2)

// var fn2: () => void = function () {//void 无返回值函数
  
// }

// var fn3: (x: number, y: number) => number = function (x: number, y: number) {
//   return x + y
// }

// var fn3: (x: number, y: number) => number = function (x, y) {
//   return x + y
// }

// ? 参数可传可不传
function fn4(x: number, y?: number): number {
  return x + y
}

fn4(1)

// 函数重载

function fn5(x: number, y: number): number;
function fn5(x: string, y: string): string;
function fn5(x: any, y: any) :any {
  if (typeof x == 'number') {
    return x * y
  } else {
    return x + y
  }
}

fn5(1,2)