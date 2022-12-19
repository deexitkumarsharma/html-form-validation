// getting the inputs from document
let nameInput = document.getElementById("name-id");
let mail = document.getElementById("email-id");
let love = document.getElementById("love-id");
let color = document.getElementById("color-id");
let rating = document.getElementById("range-id");

let form = document.getElementById("form");
let radio = document.getElementById("genre-div-id");
let radioValue = "";

let terms = document.querySelector("#check-box");

radio.addEventListener("click", (event) => {
  radioValue = event.target.value;
});

let array = [nameInput, mail];
// adding elements to the modal

let finalDiv = document.getElementById("modal");
finalDiv.classList.add("form-results");
let div = document.createElement("div");
div.className = "forms-results";
let closeDiv = document.createElement("div");

let close = document.createElement("div");
close.className = "close";
close.textContent = "close";
closeDiv.appendChild(close);

let nameP = document.createElement("div");
let mailP = document.createElement("div");
let loveP = document.createElement("div");
let colorP = document.createElement("div");
let ratingP = document.createElement("div");
let genreP = document.createElement("div");
let termsP = document.createElement("div");
termsP.className = "terms";

div.appendChild(nameP);
nameP.classList.add("classnameP");
div.appendChild(mailP);
div.appendChild(loveP);
div.appendChild(colorP);
div.appendChild(ratingP);
div.appendChild(genreP);
div.appendChild(termsP);

finalDiv.appendChild(closeDiv);
finalDiv.appendChild(div);
finalDiv.style.display = "none";

//adding event listener to form

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //for preventing from submitting empty data

  for (let item of array) {
    if (item.value === "") {
      alert(`All details are mandotory`);
      return false;
    }
  }

  form.style.display = "none"; //Important concept for popup
  nameP.textContent = `Hello ${nameInput.value}`;
  mailP.textContentP = `Email : ${mail.value}`;
  loveP.textContent = `You Love : ${love.value}`;
  colorP.textContent = `Color : ${color.value}`;
  ratingP.textContent = `Rating : ${rating.value / 10}`;
  genreP.textContent = `Book Genre : ${radioValue}`;
  termsP.textContent = "👉 I Agreed to terms and conditions";

  finalDiv.style.display = "flex";

  close.addEventListener("click", () => {
    console.log("gone");
    finalDiv.style.display = "none";
    form.style.display = "flex";
  });
  form.reset();
});
