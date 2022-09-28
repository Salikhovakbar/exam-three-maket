const formEl = document.querySelector(".hero-input-box")
const inputName = document.getElementById("input-name-food");
const inputPrice = document.getElementById("input-price-food");
const inputLink = document.getElementById("input-link-food");
const inputNameChief = document.getElementById("input-name-chief");
const inputNameRestaurant = document.getElementById("input-name-restaurant");
const btnAdd = document.getElementById("btn-add");
const btnDelete = document.getElementById("btn-delete");
const boxAddedOptions = document.querySelector(".box-added-options");

let addFnct = (e) => {
    e.preventDefault();
const boxEl = document.createElement("div");
boxAddedOptions.appendChild(boxEl);
const boxInsideEl = document.createElement("div");
boxEl.appendChild(boxInsideEl);
const imgEl = document.createElement("img");
boxInsideEl.appendChild(imgEl);
imgEl.src = inputLink.value;
const textBox = document.createElement("div");
boxInsideEl.appendChild(textBox);
const btnBox = document.createElement("div");
boxInsideEl.appendChild(btnBox);
const deleteBtn = document.createElement("button");
btnBox.appendChild(deleteBtn);
btnBox.appendChild(deleteBtn);
const date = new Date();
const time = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
const timeBtn = document.createElement("button");
btnBox.appendChild(timeBtn);
const completeBtn = document.createElement("button");
btnBox.appendChild(completeBtn);
const meat = document.createElement("p");
textBox.appendChild(meat);
const price = document.createElement("p");
textBox.appendChild(price);
const chief = document.createElement("p");
textBox.appendChild(chief);
const restaurant = document.createElement("p");
textBox.appendChild(restaurant);
textBox.className = "text-box";
btnBox.className = "box-of-btn"
boxInsideEl.className = "inside-the-box";
meat.innerHTML = "<span class='spanEl'>Name of the food :</span>" + "  " + inputName.value.toUpperCase() + " " + ";";
price.innerHTML = "<span class='spanEl'>Price tag :</span>" + "  " + inputPrice.value.toUpperCase() + "$" + ";";
chief.innerHTML = "<span class='spanEl'>Name of the chief :</span>" + "  " + inputNameChief.value.toUpperCase()  + ";";
restaurant.innerHTML = "<span class='spanEl'>The restaurant :</span>" + "  " + inputNameRestaurant.value.toUpperCase()  + ";";
deleteBtn.innerHTML = "Delete the dish";
timeBtn.innerHTML = time + '<i class="bi bi-clock-fill"></i>';
deleteBtn.innerHTML = 'Delete  <i class="bi bi-trash3-fill"></i>';
completeBtn.innerHTML = '  <i class="bi bi-check-all"></i> Finish the dish';
boxEl.className = "added-box-task";
inputName.value = "";
inputPrice.value = "";
inputLink.value = "";
inputNameChief.value = "";
inputNameRestaurant.value = "";
deleteBtn.addEventListener("click", () => {
    boxEl.remove();
})
let deleteFnct = () => {
    boxAddedOptions.innerHTML = "";
    inputName.value = "";
    inputPrice.value = "";
    inputLink.value = "";
    inputNameChief.value = "";
    inputNameRestaurant.value = "";
}
btnDelete.addEventListener("click", deleteFnct);
completeBtn.addEventListener("click", () => {
if(boxEl.style.backgroundColor === "white"){
        boxEl.style.backgroundColor = "rgb(112, 255, 79)";
}
else{
    boxEl.style.backgroundColor = "white"
}
})
}
formEl.addEventListener("submit", addFnct);