// for(var i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

// console.log("hi")
// setTimeout(()=>console.log("there"),5000)
// console.log("you")
// setTimeout  is executed as asyncronous


function product(s){
    return function(y){
        return s*y
    }
}
console.log(product(5)(4))