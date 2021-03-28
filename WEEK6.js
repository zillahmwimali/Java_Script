var kiosk={
    Fruit:"Apple",
    get getFruit(){
        return this.Fruit;
    },
set  setFuit(newFruit){
    this.Fruit=new Fruit;
}

};
console.log(kiosk.Fruit);
kiosk.newFruit="Peach"
console.log(kiosk.newFruit);