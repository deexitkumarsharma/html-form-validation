// getting the inputs from document
let nameInput = document.getElementById("name-id");
let mail = document.getElementById("email-id");
let love = document.getElementById("love-id");
let color = document.getElementById("color-id");
let rating = document.getElementById("range-id");
let terms = document.querySelector("#check-box");

let form = document.getElementById("form");
let radio = document.querySelectorAll("input[type='radio']");
let checkbox = document.querySelector(`input[type='checkbox']`);

let radioValue = "";
document.getElementById("genre-div-id").addEventListener("click", (event) => {
  radioValue = event.target.value;
});

let nameErr = document.querySelector(".nameError");
let radioErr = document.querySelector(".radioError");
let mailErr = document.querySelector(".emailError");

// console.log(radio)
// console.log(count)


let array = [nameInput, mail];
// console.log(array);

// adding elements to the modal div
let finalDiv = document.getElementById("modal");
finalDiv.classList.add("form-results");
let div = document.createElement("div");
div.className = "forms-results";
let closeDiv = document.createElement("div");

let close = document.createElement("div");
close.className = "close";
close.textContent = "close";
closeDiv.appendChild(close);

let nameDiv = document.createElement("div");
let emailDiv = document.createElement("div");
let whatYouLoveDiv = document.createElement("div");
let colorDiv = document.createElement("div");
let ratingDiv = document.createElement("div");
let genreDiv = document.createElement("div");
let termsDiv = document.createElement("div");

termsDiv.className = "terms";

div.appendChild(nameDiv);
nameDiv.classList.add("classnameDiv");
div.appendChild(emailDiv);
div.appendChild(whatYouLoveDiv);
div.appendChild(colorDiv);
div.appendChild(ratingDiv);
div.appendChild(genreDiv);
div.appendChild(termsDiv);

finalDiv.appendChild(closeDiv);
finalDiv.appendChild(div);
finalDiv.style.display = "none";

//adding event listener to form

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let flag = true;
  // function for checking error
  let count = 0;
  if (nameInput.value.length < 5) {
    nameErr.innerHTML = "* please Fill full Name";
    flag = false;
  } else {
    nameErr.innerHTML = "";
  }

  radio.forEach((e) => {
    if (!e.checked) {
      count++;
    }
  });
  if (count >= 3) {
    radioErr.innerHTML = "* Please Select Any one";
    flag = false;
  } else {
    radioErr.innerHTML = "";
  }

  if (!mail.value.match("@")) {
    mailErr.innerHTML = "*Enter correct Email Address";
    flag = false;
  } else {
    mailErr.innerHTML = "";
  }

  if (!checkbox.checked) {
    document.querySelector(".checkboxError").innerHTML = "*Plaese Select T&C";
    flag = false;
  } else {
    document.querySelector(".checkboxError").innerHTML = "";
  }

  //for preventing from submitting empty data
  console.log(count);

  // console.log(count)
  for (let item of array) {
    if (item.value === "") {
      alert(`All details are mandotory`);
      return false;
    }
  }
  if (flag) {
    form.style.display = "none"; //Important concept for popup
    nameDiv.textContent = `Hello ${nameInput.value}`;
    emailDiv.textContentP = `Email : ${mail.value}`;
    whatYouLoveDiv.textContent = `You Love : ${love.value}`;
    colorDiv.textContent = `Color : ${color.value}`;
    ratingDiv.textContent = `Rating : ${rating.value / 10}`;
    genreDiv.textContent = `Book Genre : ${radioValue}`;
    termsDiv.textContent = "👉 I Agreed to terms and conditions";

    finalDiv.style.display = "flex";

    close.addEventListener("click", () => {
      console.log("gone");
      finalDiv.style.display = "none";
      form.style.display = "flex";
    });
  }
  form.reset();
});
