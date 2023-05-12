class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`This${this.make}${this.model}`)
        },1000)
    })
  }
}
const car=new Car("Toyota","Corolla")
async function main(){
    const message=await car.start()
    console.log(message);
}
main()