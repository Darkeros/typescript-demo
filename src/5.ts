// es6
// class Person {
//   constructor (name) {
//     this.name = name
//   }
// }
// protected 受保护的 只有在person的内部或子类访问， 
// public 公共的，
// private 私有的，只有在自己的类中访问
// readonly 只读，不可修改
class Person {
  public name: string;
  protected age: number;
  private hobby: string;
  readonly gender: string;

  constructor (name: string, age: number, hobby: string, gender: string) {
    this.name = name;
    this.age = age
    this.hobby = hobby
    this.gender = gender
  }
  // void
  public say(): string {
    return 'hello ' + this.name + ' I this year ' + this.age + ', I like ' + this.hobby + ' sex: '+ this.gender
    console.log('hello', this.name + ' I this year ' + this.age + ', I like ' + this.hobby +  ' sex: '+ this.gender)
  }
}

// let p1: Person = new Person('abby', 18)
// p1.say()
// console.log(p1.age)

// 继承
class Student extends Person {
  constructor (name: string, age: number, hobby: string, gender: string) {
    super(name, age, hobby, gender)//父类继承子类数据
  }

  getAge (): number {
    return this.age
  }
}

var s1: Student = new Student('leo', 40, 'football', 'man')
// console.log(s1.say())
// s1.gender = 'woman' //只读 不可修改
// console.log(s1.hobby)//私有属性
// console.log(s1.gender)



// 存取器

class Man {
  private _age: number;
  constructor (age: number) {
    this._age = age
  }
  
  get age () {
    return this._age
  }

  set age (newAge: number) {//接收一个新的年龄
    if (newAge < 200) {
      this._age = newAge
    }
  }
}

// let m1: Man = new Man(10)
// m1.age = 100
// console.log(m1.age)

// 静态资源

class Teacher {

  public age: number;

  static flag: string = '光荣的人民教师'; //static 静态资源

  constructor (age: number) {
    this.age = age
  }
}

let t1: Teacher = new Teacher(10)
console.log(Teacher.flag) //静态资源 可以直接通过类访问

// 泛型 ：传入的值跟返回的值是一样的
function fn1<T>(x: T, y: T): any {
  return x
}
fn1<number>(1, 2)