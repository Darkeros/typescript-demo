// 类型断言

function getData(): string | string[] {
  if (Math.random() < 0.5) {
    return 'adsf'
  }else{
    return ['a', 'b', 'c']
  }
}

var resul: string | string[] = getData()

if ((<string[]>resul).push) {
  (<string[]>resul).push()
}else{
  (<string>resul).substring(0)
}
console.log(resul)