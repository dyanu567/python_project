// let heading = document.querySelector(".heading")
// heading.innerHTML ="<h2> Name _dnyaneshwar chitale  </h2>"


// let heading2 = document.querySelector(".heading2")
// heading2.innerHTML ="<h3>  NO _+91 ********** </h3>"



// let heading3 = document.querySelector(".heading3")
// heading3.innerHTML ="<h3>  BCA</h3>"
   
// let heading4 = document .querySelector(" .heading4")
// heading4 .innerHTML = "<h4> JS </h4>"




// var h1 =document.createElement("h1")
//  h1.textContent="Name = dnyaneshwar chitale"
 
//  var heading= document.createElement("h1")
//  heading.textContent = " roll no = 1"


//  var heading1 = document.createElement("h1")
//  heading1.textContent ="NO = +91 **********"

// var heading2 = document .createElement("h1" )
// heading2 = textContent = "...."


// var body = document.querySelector("body")


// body.appendChild(h1)
// body.appendChild(heading)
// body.append(heading1)
// body.append(heading2)




// var h1 = document.createElement("h1")
// h1.className = "headding"

//  h1.textContent=" dnyaneshwar "

// var body = document.querySelector("body")

 
// body.appendChild(h1)



var body = document.querySelector("body")

 var card =document.createElement("div")
  card .className ="card"
  body.appendChild(card)

  var sname = document.createElement("h2")
  sname.textContent = "Name: Dnyaneshwar Chitale"
  card.appendChild(sname)

  var sclass = document.createElement("h3")
  sclass.textContent = "Class: BCA"
  card.appendChild(sclass)

  var lab_no = document.createElement("h3")
  lab_no.textContent = "Lab No: 1"
  card.appendChild(lab_no)

  var dob = document.createElement("h3")
  dob.textContent = "DOB: 01/01/2003"
  card.appendChild(dob)

  var mobile = document.createElement("p")
  mobile.textContent = "Mobile No: +91 **********"
  card.appendChild(mobile)

  var address = document.createElement("p")
  address.textContent = "Address: loni bk"
  card.appendChild(address)
