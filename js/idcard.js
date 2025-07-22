var body = document.querySelector("body")

// var card =document.createElement("div")
//  card .className ="card"
//  body.appendChild(card)

// var id = document.createElement("h1")
// id.textContent = "Student Id Card"
// card.appendChild(id)

//  var img = document.createElement("img")
//  img.src = "path/to/image.jpg"
 
//  card.appendChild(img)


//  var NAME= document.createElement("h1")
//  NAME.textContent = "dnyaneshwar chitale "
//  card.appendChild(NAME)

//  var ditel = document.createElement("h1")
//  ditel.textContent = "BCA"
//  card.appendChild(ditel)

//  var age = document.createElement("h2")
//  age.textContent = "age :20"
//  card.appendChild(age)

//    var dob = document.createElement("h3")
//   dob.textContent = "DOB: 01/01/2003"
//   card.appendChild(dob)



// const students = [
//   { name: "Dnyaneshwar Chitale", std: "10th", div: "A", class: "Science", rollNo: 1, address: "Pune" },
//   { name: "Sneha Patil", std: "10th", div: "B", class: "Commerce", rollNo: 2, address: "Mumbai" },
//   { name: "Rahul Deshmukh", std: "10th", div: "A", class: "Arts", rollNo: 3, address: "Nashik" },
//   { name: "Aarti Khedekar", std: "10th", div: "C", class: "Science", rollNo: 4, address: "Nagpur" },
//   { name: "Sagar Shinde", std: "10th", div: "B", class: "Commerce", rollNo: 5, address: "Kolhapur" },
//   { name: "Komal Pawar", std: "10th", div: "A", class: "Arts", rollNo: 6, address: "Solapur" },
//   { name: "Omkar Jadhav", std: "10th", div: "C", class: "Science", rollNo: 7, address: "Satara" },
//   { name: "Pooja Rane", std: "10th", div: "B", class: "Commerce", rollNo: 8, address: "Sangli" },
//   { name: "Ajay Thorat", std: "10th", div: "A", class: "Arts", rollNo: 9, address: "Latur" },
//   { name: "Rutuja More", std: "10th", div: "C", class: "Science", rollNo: 10, address: "Aurangabad" }
// ];




// students.forEach((students)=>{



//   var card = document.createElement("div")
//   card.className = "card"
//   body.appendChild(card)

 
//  var h1 = document.createElement("h1")
//  h1.textContent =`Name: ${students.name}`
//    card.appendChild(h1)

//    var std = document.createElement("h1")
//    std.textContent =`Std: ${students.std}`
//    card.appendChild(std)


//   var div = document.createElement("h1")
//   div.textContent =`Div: ${students.div}`
//   card.appendChild(div)

//   var className = document.createElement("h1")
//   className.textContent =`Class: ${students.class}`
//   card.appendChild(className)

//   var rollNo = document.createElement("h1")
//   rollNo.textContent =`Roll No: ${students.rollNo}`
//   card.appendChild(rollNo)

//   var address = document.createElement("h1")
//   address.textContent =`Address: ${students.address}`
//   card.appendChild(address)

  

   
  
// })





var box = document.querySelector(".box");

const colors = ["red", "green", "blue", "orange"];
let colorIndex = 0;

box.addEventListener('click', () => {
  box.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});


