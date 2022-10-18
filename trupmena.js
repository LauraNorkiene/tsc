"use strict";
class Trupmena {
    constructor(_sveikojiDalis, _skaitiklis, _daliklis) {
        this._sveikojiDalis = _sveikojiDalis;
        this._skaitiklis = _skaitiklis;
        this._daliklis = _daliklis;
    }
    get sveikojiDalis() {
        return this._sveikojiDalis;
    }
    get skaitiklis() {
        return this._skaitiklis;
    }
    get daliklis() {
        return this._daliklis;
    }
    set sveikojiDalis(value) {
        this._sveikojiDalis = value;
    }
    set skaitiklis(value) {
        this._skaitiklis = value;
    }
    set daliklis(value) {
        this._daliklis = value;
    }
    toString() {
        return this._sveikojiDalis + ' ' + this._skaitiklis + "/" + this._daliklis;
    }
    pridetiInt(i) {
        this.sveikojiDalis += i;
    }
    prastinti(number) {
        let bdd = 1;
        for (let i = 1; i <= this.daliklis; i++) {
            if (this.skaitiklis % i == 0 && this.daliklis % i == 0) {
                bdd = i;
            }
        }
        this.skaitiklis /= bdd;
        this.daliklis /= bdd;
        if (this.skaitiklis >= this.daliklis) {
            this.sveikojiDalis += Number((this.skaitiklis + "/" + this.daliklis));
            this.skaitiklis %= this.daliklis;
            this.toString();
        }
    }
}
const trupmena = new Trupmena(4, 5, 6);
console.log(trupmena.pridetiInt(5));
console.log(trupmena.toString());
