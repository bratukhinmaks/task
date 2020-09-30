// zadanko2 Duplicate array

Array.prototype.duplicate = function () {
    return [...this, ...this];
}
console.log([1,2,3,4].duplicate())

//zadanko3 Filtrowanie Arraju

newArray = [1,2,3,4,5,6,7,8,9]
filteredArr = newArray.filter(el=> el%2!==0)
console.log(filteredArr)
//zadanko 4 Jakis fetch dziala na click buttona w index html

const fetcher = function (url) {
    fetch(url)
        .then(data => data.json())
        .then(data => console.log(data))
}

//zadanko 5 zakomentowalem zeby nie bylo bledu w console bo to node.js uzyc w console node i ponizszy kod

// var fs =  require('fs')
//
// var originName = 'example.json'
// var destinationName = 'sample.json'
//
// fs.rename(originName, destinationName, () => {
//     console.log('Nazwa zmieniona na ', destinationName);
// });

//zadanko 6 zrobiłem przy użyciu canvas

let canva = document.getElementById('canva');
let context = canva.getContext('2d')
let speed = 10;
let expand = {
    x:2,
    y:2
}

let startSize = {
    width: 50,
    height:50,
}
let endSize = {
    width: 100,
    height:100,
}
let startPosition ={
    x:50,
    y:10
}

 setInterval(()=>{
     startPosition.x+=speed
     startSize.width+= expand.x
     startSize.height+=expand.y

     if(startPosition.x > canva.width-100 || startPosition.x<50){
         speed *=-1;
     }
     if(startSize.width > endSize.width || startSize.width<50 ){
         expand.x *=-1;
     }
     if(startSize.height > endSize.height || startSize.height<50){
         expand.y *=-1;
     }

     let color = Math.round(Math.random()*100000);
     context.clearRect(0,0,canva.width, canva.height)
     context.fillStyle = `#${color}`
     context.fillRect(startPosition.x,startPosition.y,startSize.width, startSize.height)

 },100)
