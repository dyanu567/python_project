var body = document.querySelector("body");


var mainBox = document.createElement("div");
mainBox.className = "mainBox";
body.appendChild(mainBox);





var simg = document.createElement("div");
simg.className = "simg";
mainBox.appendChild(simg);

var bigimg = document.createElement("div");
bigimg.className = "bigimg";

var bigImage = document.createElement("img");
bigImage.src = "https://m.media-amazon.com/images/I/71MXSFRW87L._SY450_.jpg";
bigImage.alt = "";
bigimg.appendChild(bigImage);
simg.appendChild(bigimg);


var m = document.createElement("div");
m.className = "m";

var smallImages = [
  { class: "i", src: "https://m.media-amazon.com/images/I/71MXSFRW87L._SY450_.jpg" },
  { class: "d", src: "https://m.media-amazon.com/images/I/31ZplpSxBGL._SS100_.jpg" },
  { class: "e", src: "https://m.media-amazon.com/images/I/51SJq5crvKL._SS100_.jpg" },
  { class: "f", src: "https://m.media-amazon.com/images/I/51Gqaurlg4L._SS100_.jpg" }
];



smallImages.forEach(img => 
  {
  var div = document.createElement("div");
  div.className = img.class;

  var  imgElement = document.createElement("img");
  imgElement.src = img.src;
  imgElement.alt = "";
  div.appendChild(imgElement);
  m.appendChild(div);
});

simg.appendChild(m);

var prudct = document.createElement("div");
prudct.className = "prudct";
mainBox.appendChild(prudct);

var prudct1 = document.createElement("div");
prudct1.className = "prudct1";
prudct.appendChild(prudct1);

var water = document.createElement("div");
water.className = "water";
water.innerHTML = `
  <h4>Aquaminder Smart Water Bottle Glows & Beeps to Remind You to Drink More 770 ml Chug Cap Bottle For Adults and Kids Perfect for Gift, Travel, Gym, Yoga</h4>
  <br>
  <p>Visit the Aquaminder Store</p>
  <span>4.5</span>
  <div class="ster">
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-s-fill"></i>
    <i class="ri-star-half-line"></i>
  </div>
  <span>ratings</span>
  <p>300+ bought in past month</p>
`;
prudct1.appendChild(water);

var water1 = document.createElement("div");
water1.className = "water1";
water1.innerHTML = `
  <div class="time"><h4>Limited time deal</h4></div><br>
  <span class="parstent">-35%</span>
  <span class="parstent1"> ₹1,295</span>
  <p>M.R.P.: ₹1,999</p><br>
  <p>Inclusive of all taxes</p>
  <p>EMI starts at ₹118 per month. EMI options</p>
  <hr>
`;
prudct1.appendChild(water1);

var Offers = document.createElement("div");
Offers.className = "Offers";
Offers.innerHTML = `
      <h3>  Offers</h3>
             <div class="offers1">
        <div class="offers2">
           <h3>Cashback</h3>
        <p>
             Upto ₹7.65 cashback as Amazon Pay Balance
              when you pay with Amazon Pay ICICI Bank Credit
          CardsUpto ₹7.65 cashback as Amazon Pay Balance when you</p><br>
               
  <h3> Bank Offer</h3>
            <p> Upto ₹750.00 discount on SBI Credit CardsUpto
              ₹750.00 discount on SBI Credit Cards</p><br>
                

               <div class=""> <h3>Partner Offers</h3>
                  <p>  Get GST invoice and save up to 28% on business
                     purchases. Sign up for freeGet GST invoice and save up to 28% on business purchases.</p>
                  
                        1 offer
                  </hr>
`;
prudct1.appendChild(Offers);
