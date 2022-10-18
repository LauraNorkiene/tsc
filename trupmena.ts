class Trupmena{

    constructor(private _sveikojiDalis: number, private _skaitiklis: number, private _daliklis: number) {
    }


    public prastinti(){
        let bdd=1;
        for (let i=1; i<=this.daliklis; i++){
            if (this.skaitiklis % i==0 && this.daliklis % i==0){
                bdd=i;
            }
        }
        this.skaitiklis/=bdd;
        this.daliklis/=bdd;
        if (this.skaitiklis>=this.daliklis){
            this.sveikojiDalis+=Number((this.skaitiklis + "/" + this.daliklis));
            this.skaitiklis%=this.daliklis;
        }
    }

    get sveikojiDalis(){
        return this._sveikojiDalis;

    }

    get skaitiklis() {
        return this._skaitiklis;

    }

    get daliklis(){
        return this._daliklis;

    }

    set sveikojiDalis(sveikojidakis: number) {
        this._sveikojiDalis = sveikojidakis;
        // @ts-ignore
        this.prastinti();
    }

    set skaitiklis(skaitiklis: number) {
        this._skaitiklis = skaitiklis;
        // @ts-ignore
        this.prastinti();
    }

    set daliklis(daliklis: number) {
        this._daliklis = daliklis;
        // @ts-ignore
        this.prastinti();
    }

    public toString()
    {
        return this._sveikojiDalis +' ' +this._skaitiklis+"/"+this._daliklis;
    }

    public pridetiInt( i: number){
    this.sveikojiDalis+=i;
        this.prastinti();
}


    public prideti(sveikojiDalis:number, skaitiklis:number, daliklis:number){
        this._sveikojiDalis+=sveikojiDalis;
        this._skaitiklis=this._skaitiklis * daliklis + this._daliklis * skaitiklis;
        this._daliklis=this._daliklis * daliklis;
        this.prastinti();
    }

    public pridetiTrupmena(x:Trupmena){
    this.prideti(x._sveikojiDalis, x._skaitiklis, x._daliklis);
        this.prastinti();
}


public toDouble(){
    return this._sveikojiDalis + this._skaitiklis+"/"+this._daliklis;
}
}

const trupmena=new Trupmena(4, 5, 6);
console.log(trupmena.pridetiInt(5));
// console.log(trupmena.toString());



