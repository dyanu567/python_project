
// function data(){
//     var a=10
//     function add(){
      
//     }
//     console.log("from data"+a)

// }
//    console.log("from data"+a)
//   data()

      // function data (){
      //   var a=10
      //   function add(){
      //     console.log("form data"+a)
      //   }

      //   console.log( "form data "+a)
      //   data()
      // }







  //var arry //
// var a =10;
// console.log(a);


// var a=20
// console.log(a);


// var a =50
//  console.log(a)

//  var b=30
//  console.log(b)

//  let//



// function data(){
// let a=10

// console.log(a);

// }
// add();


//  function data(){
//     let a =30
//     console.log(a)
//   }
//      add();




//const //

// const data=33;
// console.log(data);


//  const data=55
//  console.log(data)





//arrey mhteds// //push//

// const arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);


  // const arr =[1,2,3,4,];
  // arr.push(8);
  // console.log(arr);





 //pop//

// const arr = [1, 2, 3, 4, 5];
// arr.pop(0);
// console.log(arr);


  // const arr =[6,7,8,9,10];
  // arr .pop(0);
  // console.log(arr)

// //shift//

// var arr = [1, 2, 3, 4, 5] ;
// arr.shift(0);
// console.log(arr);


  // var arr =[6,7,8,9]
  // arr .shift(89)
  // console.log(arr)



 //unshift//
// var arr = [1, 2, 3, 4, 5];
// arr.unshift(38,78);
// console.log(arr);

 


// // splice//
// var arr = [1, 2, 3, 4, 5];
// arr.splice(3, 4,);
// console.log(arr);




 // slice//
// var arr = [1, 2, 3, 4, 5];
// var newArr = arr.slice(2, 4,383);
// console.log(newArr);




//indexof//  //
// var arr =[ "dnyanu,rohit,dnyanu,sachin"]

// var index=arr.lastindexOf(dnyanu);
// console.log(index)
// var arr = [10,39,56,78,45,67,89,45,23,80]
//  var index =arr.indexOf(45)
//  console.log(index)


//include//
// var arr =[ "dnyanu,"];

// console.log(arr.includes("rohit"))




//objects//

//  var person {

//     name:"dnyanu",
//     age:25
// }


//map mthde//

// var arr = [1,2,3,4,5,6,7]

// var data =arr.map((currentval)=>currentval*10)

// console.log(data)
// console.log(arr)


//////

//mpe mthde//

// var mobile =[


//   {

//     name:"vivo",
//     price:33000
//   },


//   {

//     name:"mi",
//     price:35000
//   },

//   {

//     name:"iphone",
//     price:93000
//   },

//   {

//     name:"oppo",
//     price:43000
//   },

 
// ]
//  var data = mobile.map((value)=>{

//   return{

//     mobileName:value.name,
//     newPrice:value.price-200
//   }
//  }
// )
// console.log(data)
// console.log(mobile)


// var mobile =[

//   {
//       name:"mi",
//        price:10
      
//   },

//   {
//     name:"vivo",
//     price:15
//   },
  
//   {
//       name :"oppo",
//       price:20

//   },
// ]

// var data =mobile .map ((value)=>{

// return{
//    mobileName:value.name,
//     mobilePrice:value.price+500
  
// }
// }
// )
// console.log(data)
// console.log(mobile)


// var mobile =[

//   {
//     name:"mi",
//     price:100
//   }
// ]
// var data = mobile.map ((value)=>{

//   return{
//     mobileName:value.name,
//      mobilePrice:value.price+500
//   }

// })

// console.log(data)
// console.log(mobile)




//forEach//

// var mobile =[


//   {

//     name:"vivo",
//     price:33000
//   },


//   {

//     name:"mi",
//     price:35000
//   },

//   {

//     name:"iphone",
//     price:93000
//   },

//   {

//     name:"oppo",
//     price:43000
//   }
// ]


// mobile.forEach((currVal)=>{

//   console.log(currVal)
// })




//faiter data//

// var mobile =[


//   {

//     name:"vivo",
//     price:33
//   },


//   {

//     name:"mi",
//     price:33
//   },

//   {

//     name:"iphone",
//     price:93
//   },

//   {

//     name:"oppo",
//     price:43
//   }
// ]

// var filterdData = mobile.filter((currElem)=>currElem.price ==33)
// console.log(filterdData)

// var data = filterdData.map((value)=>{
//   return{
//     price:value.price+100
//   }
// })
// console.log(data)




// var mobile = [
//   { name: "vivo", price: 5 },
//   { name: "mi", price: 35 },
//   { name: "iphone", price: 93 },
//   { name: "oppo", price: 43 },
//   { name: "iQOO", price: 40 },
//   { name: "iphone", price: 50 },
  
//   { name: "Samsung", price: 10 },
//   { name: "OnePlus", price: 10 },
//   { name: "Realme", price: 30 },
//   { name: "Nokia", price: 60 },
// ]
// var filterdData = mobile.filter((currElem)=>currElem.price ==10)
// console.log(filterdData)

// var data = mobile.map((value)=>{
//   return{

//     price:value.price+100
//   }
// })
// console.log(data)

// mobile.forEach((currVal)=>{
//   console.log(currVal)
// })



//reduce are mhted//

// var arr=[20,45,56,47,89,77,67,99]
// var result =arr.reduce((total,curr)=>total+curr)
// console .log(result)


// var arr=[20,45,56,47,89,77,67,99]
// var result =arr.reduce((max,curr)=>{

//   if(curr > max){
//     max =curr
//   }
//   return max
// })
// console.log(result ) 


// var arr =[20,45,56,89]
// var result =arr .reduce((max,curr) =>{

//    if(curr>max){
//     max =curr
//    }
//    return max
// })
// console.log(result)

// var mobile =[
//   {
//      name:"mi",
//      price:10

//   },
//   {    
//       name:"iphone",
//       price: 10
//   },
//   {
//     name:"viov",
//     price:10
//   },

//   {
//     name : "iqoo",
//     price:10

//   },
  
// ]
//   var filterdData = mobile.filter((currElem)=>currElem.price ===10)
//   console.log(filterdData)
  
// var data = filterdData.map((value)=>{
//   return{
//     price:value.price+100
//   }
//  } )
 


// console.log(data)







// // onclick funcican//

//  var button = document.getElementById("btu");


//     button.addEventListener('click', (e) => {
//       console.log("Button element:", button);
//       console.log("Event object:", e);
//     });



// const button = document.getElementById("input");

//     // Arrow function to add two numbers
//     const add = (a, b) => {
//       console.log("Result:", a + b);
//       alert("Sum: " + (a + b));
//     };

//     // Attach click event listener to button
//     button.addEventListener('click', () => {
//       const n1 = parseFloat(document.getElementById("num1").value);
//       const n2 = parseFloat(document.getElementById("num2").value);
//       add(n1, n2);
//     });

  








//  function changeColor(elem) {
//     elem.style.background = "green";
    
    
//  }


//     document.getElementById("myBtn").onclick = function() {
//     alert("Clicked using ");
//   };



// var box = document.querySelector(".box");

// const colors = ["red", "green", "blue", "orange"];
// let colorIndex = 0;

// box.addEventListener('click', () => {
//   box.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
// });



// document.addEventListener("keypress", (e) => {
//   console.log(e); 
//   if (e.key === "y" || e.key === "Y") 
//     { 
//     alert("login");
//   }
// });


const Body = document.querySelector("body")


Body.addEventListener("mousemove",(e)=>{

  const card =document.querySelector(".card");
  card.style.top= e.clientY +"px";
   card.style.left= e.clientX +"px";


});



 



  document.addEventListener("mousemove", (e) => {
    const dot = document.createElement("div");
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.background = "brown";
    dot.style.position = "absolute";
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
    dot.style.pointerEvents = "none";
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 500);
  });
  21