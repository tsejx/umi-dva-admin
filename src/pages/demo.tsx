// import { number } from "prop-types";

// // 布尔值
// let isDone: boolean = false;
// // 数字
// let decLiteral: number = 0xf00d;
// // 字符串
// let names: string = 'hello';
// // 数组
// let list1: number[] = [1, 2];
// let list2: Array<number> = [1, 2, 3];
// // 元组
// let x: [string, number];
// x = ['hello', 10];
// // x = [10, 'hello']; // Error
// // x[6] = true;
// // 枚举
// enum Color {
//   Red = 1,
//   Green,
//   Blue,
// }
// let c: Color = Color.Green;
// // Any
// let notSure: any = 4;
// notSure = 'maybe a string instead';
// // Void
// function warnUser(): void {
//   console.log('123');
// }
// // Null&Null
// let u: undefined = undefined;
// let n: null = null;
// // Never
// function error(message: string): never {
//   throw new Error(message);
// }
// function fail() {
//   return error('Something failed');
// }
// // Object
// declare function create(o: object | null): void;

// create({ prop: 0 });
// create(null);

// // create(42); // Error
// // create('string'); // Error
// // create(false); // Error
// // create(undefined); // Error

// // 类型断言
// let someValue1: any = 'this is a string';
// // let strLength1: number = (<string>someValue).length

// let someValue2: any = 'this is a string';
// let strLength2: number = (someValue2 as string).length;

// //
// function f() {
//   const message = 'Hello world!';
//   return message;
// }

// // 接口
// function print(labelObj: { label: string }) {
//   console.log(labelObj.label);
// }

// interface LabelledValue {
//   label: string;
// }

// function p(labelObj: LabelledValue) {
//   console.log(labelObj.label);
// }

// // 可选属性

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: 'white', area: 100 };
//   return newSquare;
// }

// // 只读属性
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// // p1.x = 5; // error
// console.log(p1);

// // ReadonlyArray<T>
// let a: number[] = [1,2,3,4];
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!
// a = ro as number[];

// // 额外的属性检查
// interface S {
//     color?: string;
//     width?: number;
// }

// function create(config: S) : { color: string; width: number} {
//     let newSquare = { color: 'white', width: 100 };
//     return newSquare;
// }

// create({colour: 'red', width: 100 })

// let mySquare = create({ width: 100, opacity: 0.5 } as S );

// interface SquareConf {
//     color?: string;
//     widt?: number;
//     [propName: string]: any;
// }

// // 函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let res = source.search(subString);
//     return res > -1;
// }

// // 可索引的类型
// // 支持两种索引签名：字符串和数字
// interface StringArray {
//     [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ['Bob', 'Fred']

// let myStr: string = myArray[0];

// // 类类型
// // interface ClockInterface {
// //     currentTime: Date;
// // }

// // class Clock implements ClockInterface {
// //     constructor(h: number, m: number)
// //     currentTime: Date;
// // }

// // interface ClockInter {
// //     currentTime: Date;
// //     setTime(d: Date);
// // }

// // class Clockk implements ClockInter {
// //     currentTime: Date;
// //     setTime(d: Date) {
// //         this.currentTime = d;
// //     }
// //     constructor(h: number, m: number)
// // }

// // 继承接口
// // interface Shape {
// //     color: string;
// // }

// // interface Square extends Shape {
// //     sideLength: number;
// // }

// // let square = <Square>{};
// // square.color = 'blue';
// // square.sideLength = 10;

// class Animal {
//     move(distanceInMeters: number = 0){
//         console.log(`Animal moverd ${distanceInMeters}.`);
//     }
// }

// class Dog extends Animal {
//     bark(){
//         console.log('Woof! Woof!');
//     }
// }

// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// // 公共、私有与受保护的修饰符
// // 公共public
// class Animal1 {
//     public name: string;
//     public constructor(theName: string) { this.name = theName; }
//     public move(distanceInMeters: number) {
//         console.log('111')
//     }
// }

// // 私有 private
// class Animal2 {
//     private name: string;
//     constructor(theName: string) { this.name = theName }
// }

// // new Animal2('Cat').name; // error

// // 受保护protected
// class Person {
//     protected name: string;
//     constructor(name: string) { this.name = name }
// }

// // 可以访问name但是不能使用name
// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string){
//         super(name);
//         this.department = department
//     }

//     public getElevatorPitch(){
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`
//     }
// }

// let howard = new Employee('Howard', 'Sales');
// let john = new Person('John');

// // readonly 修饰符
// class Octopus1 {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }

// let dad = new Octopus1('Man with the 8 strong legs');
// // dad.name = 'Man with the 3-piece suit'; // error

// class Octopus2 {
//     readonly numberOfLegs: number = 8;
//     constructor(readonly name: string) {}
// }

// // 书写完整函数类型
// // 包括参数类型和返回值类型
// let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y }

// let myPlus: (baseValue: number, increment: number) => number = function(x: number, y: number): number { return x + y }

// // 推断类型
// let myAdd2 = function(x: number, y: number): number { return x + y }

// let myAdd3: (baseValue: number, increment: number) => number = function (x, y){ return x + y }

// // 可选参数
// function buildName1(first: string, last: string) {
//     return first + ' ' + last
// }

// function buildName2(first: string, last?: string){
//     if (last){
//         return first + ' ' + last
//     } else {
//         return first
//     }
// }

// // 默认参数
// function buildName3(first: string, last?: string){
//     return first + ' ' + last
// }

// let res1 = buildName3('Bob');
// let res2 = buildName3('Bob', undefined);
// let res3 = buildName3('Bob', 'Adams', 'Sr.')

// // 剩余参数
// function buildName4(first: string, ...restOfName: string[]) {
//     return firstName + ' ' + restOfName.join(' ');
// }

// let employeeName = buildName4('Joseph', 'Sameuel', 'Lucas', 'MacKinzie');

// // 泛型
// function identity<T>(arg: T): T {
//     return arg;
// }

// // 传入所有参数，包含类型参数
// let output1 = identity<string>('myString');

// let output2 = identity('myString');

// // 使用泛型变量
// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }

