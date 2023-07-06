let x="hello";
    window.confirm(x);
    {
     
        console.log(x);
    }
    
    document.getElementById("java").innerHTML="web";
    document.querySelector("#script").innerHTML="document";
// java cases


const fristName="vara";
document.getElementById("class").innerHTML= fristName;
const MiddleName ="lakshmi";
document.getElementById("pink").innerHTML= MiddleName;


// js operator
    // Arithmetic operators
    var y=40;
    var z=20;
    var a=y+z;
    console.log(a);


    // assignment operators


var a=5;
var b=5;
var c=a+=5;
    console.log(c);

    //  Comparison operators
     var a=40;
     var b=50;
    //  console.log(a>b);
    //  console.log(a<b);
    console.log(a==b);
    console.log(a<=b);

    // Logical operators
     var a=90;
     var b=40;
     console.log(a>b&&b<a);
     console.log(a>b||a<b);
     console.log(!(a>b&&b>a));


    // string operators
     var a="2";
     var b=3;
     var c=4;
     console.log(a+b+c);
     console.log(a-b+c); 


//  type operators

var a=10;
console.log(typeof(a));

// Bit operators

var a=40;
var b=50;
console.log(a&b);
console.log(a|b);
console.log(~a);

// JS data types

var a=
console.log(typeof(a));
var lahari;
console.log(typeof(lahari));
var person={ name:"lahari",coures:"B.sc", no:"201477102040"} 
var people={ name:"dharani", class:"B.sc", no:"201477102050"} 
console.log(person.name,people.class);

var car=["audi", "saab","BMW" ];
console.log(car[0]);

// JS function

function myjava(s,t){
    var s=40;
    var t=50;
    return  console.log(s+t);
};
myjava();

//button image hidden

// const click=document.querySelector(".button");
// const tag=document.querySelector(".head");

// click.addEventListener("click",function myfunction(){
//     return tag.classList.toggle("head22");
// });
// myfunction();
const tag = document.querySelector(".head");
function myFunction(){
    return tag.classList.toggle("head22");
};

const image = document.querySelector(".img-1");
function myImage(){
    return image.classList.toggle("image_1")
};
// array starts

// tostring
const array = ["Digital","web","development"];
const array5=["java","c","c++"];

// const array1=array.toString();
// console.log(array1);

// push
// array.push("php");
// const array1=array.toString();
// console.log(array1);


// pop
// array.pop();
// const array1=array.toString();
//  console.log(array1);
 

// length
// const array1= array.length;
// console.log(array1);


// unshift
// array.unshift("java script");
// const array1=array.toString();
// console.log(array1);

// shift

// array.shift();
// const array1=array.toString();
// console.log(array1);


// concat
// const arr=array.concat(array5);
// const marg=arr.toString();
// console.log(marg);

//  splice
array.splice(2,0,"python","graphic");
const array1=array.toString();
console.log(array1);

// slice
person="jghkfholulosai";
const arr = person.slice(3,10);
// const array1=arr.toString();
console.log(arr);
// array ends

const website=[
   { id:0, image:"ima5.jfif",title:"German Silver Earrings",prize:65 ,rateing:"4.5"},
    {id:1,image: "img6.jfif",title:"Bella Jewellery Earrings",prize:95,rateing:"5"},
   { id:2,image:"img3.jfif",title:"Glorious Naya Casting Earring",prize:110,rateing:"4.8"},
   { id:3,image:"img4.jfif",title:"Traditional Enchanting Gold Earrings",prize:130,rateing:"3.5"},
    {id:4,image:"img7.jfif",title:"Temple Jewellery Earrings",prize:50,rateing:"4.3"},
    {id:5,image:"img8.jfif",title:"Temple Jewellery Earrings",prize:80,rateing:"4.5"},
   { id:6,image:"img15.jfif",title:"diamond earrings",prize:210,rateing:"3.8"},
   { id:7,image:"img10.jfif",title:" Gold Plated Jhumka Earrings ",prize:45,rateing:"2.9"},
   { id:8,image:"img11.jfif",title:"Alloy Jhumka Earrings",prize:105,rateing:"5"}
];
 let data = "";
 website.map(function datas(items){
    data += `
    <div class="col-lg-4" data-id=${items.id}>
    <div class="cardsdata">
    <img src=${items.image} alt="">
    <h2>${items.title}</h2>
    <h6>${items.prize}</h6>
    <p>${items.rateing}</p>
    <button onclick="deletebutton(${item.id})">Delete</button>
</div>  
</div>
    `

    document.querySelector(".cards").innerHTML = data;
 });

 





 