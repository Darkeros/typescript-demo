// 定义接口
// interface Husband {
//   sex:  string
//   interest: string
//   maiBaoBao?: Boolean
// }

// let myhusband: Husband = {sex: '男', interest: '足球，看书', maiBaoBao: true}

// console.log(myhusband)

// 定义函数接口

// 接口规范
interface SearchMan {
  (source: string, subString: string): boolean
}

let mySearch: SearchMan

mySearch = function (source: string, subscribe: string): boolean{
  let flag = source.search(subscribe)
  return (flag != -1)
}

console.log(mySearch('高', '胖'))