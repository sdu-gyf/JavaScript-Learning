// let s1 = Symbol('foo');
// let s2 = Symbol('bar');
// let o = {
//     [s1]: 'foo val'
// };
// Object.defineProperty(o, s2, {value: 'bar val'});
// console.log(o);
// { [Symbol(foo)]: 'foo val' }
// let o = {
    // [Symbol('foo')]: 'foo val',
    // [Symbol('bar')]: 'bar val'
// }
// console.log(o);
// let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) => symbol.toString().match(/bar/));
// console.log(barSymbol);
// function Foo() {}
// let f = new Foo();
// console.log(Foo[Symbol.hasInstance](f));
// class Bar {}
// class Baz extends Bar {
//     static [Symbol.hasInstance] () {
//         return false;
//     }
// }

// let b = new Baz();
// console.log(Baz[Symbol.hasInstance](b));
// console.log(Bar[Symbol.hasInstance](b));
// let initial = ['foo']
// let array = ['bar']
// console.log(array[Symbol.isConcatSpreadable]);
// console.log(initial.concat(array));
// array[Symbol.isConcatSpreadable] = false;
// console.log(initial.concat(array));
// let arrayLikeObject = { length: 1, 0: 'baz' };
// console.log(arrayLikeObject[Symbol.isConcatSpreadable]);
// console.log(initial.concat(arrayLikeObject));
// arrayLikeObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(arrayLikeObject));

// let otherObject = new Set().add('qux');
// console.log(otherObject[Symbol.isConcatSpreadable]);
// console.log(initial.concat(otherObject));
// otherObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(otherObject));
class Emitter {
    constructor(max) {
        this.max = max;
        this.idx = 0;
    }
    *[Symbol.iterator]() {
        while(this.idx < this.max) {
            yield this.idx++;
        }
    }
}

function count() {
    let emitter = new Emitter(5);

    for (const x of emitter) {
        console.log(x);
    }
}
count();