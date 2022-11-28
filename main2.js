const elInput = document.querySelector("#input");
const elForm = document.querySelector(".form");
const elBtn = document.querySelector("#btn");
const elContent = document.querySelector(".content");
const elClearBtn = document.querySelector("#clearbtn");
const elTextList = document.querySelector(".text-list");
let arr = [];

function massageHandler() {
	if (elInput.value === "") {
		elTextList.textContent = "Iltimos biror bit so'z yoki qiymat kiriting !";
		elTextList.style.textAlign = "center";
		elTextList.style.border = "1px solid darkgray";
		elTextList.style.borderRadius = "5px";
		elTextList.style.padding = "5px";
		elTextList.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.1)";
		elTextList.style.background = "red";
		elTextList.style.color = "white";
	} else {
		elTextList.style.border = "none";
		elTextList.style.padding = "0px";
		elTextList.style.boxShadow = "none";
		elTextList.style.background = "transparent";
		let inputValue = elInput.value;
		arr.push(inputValue);
		const h3 = document.createElement("h3");
		elTextList.appendChild(h3);
		h3.textContent = inputValue;
		h3.style.textAlign = "center";
		h3.style.border = "1px solid darkgray";
		h3.style.borderRadius = "5px";
		h3.style.padding = "5px";
		h3.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.1)";
		h3.style.background = "#b6f2d4";
		h3.style.transition = "all 0.5 linear !important";

		elInput.value = "";
	}
}

function mathHandler() {
	if (elTextList === "") {
		elContent.textContent = "You have no pending tasks";
	} else {
          elContent.textContent = `You have ${arr.length} pending tasks`;
          elContent.style.color = "black";
	}
}

function clearHandler() {
	elTextList.textContent = "";
	elContent.textContent = "You have no pending tasks";
	elContent.style.fontSize = "30px";
	elContent.style.color = "coral";
     elInput.value = "";
     arr.length = 0;
}

elForm.addEventListener("submit", function (e) {
	e.preventDefault();
	massageHandler();
	mathHandler();
});

elClearBtn.addEventListener("click", function (e) {
	e.preventDefault();
	clearHandler();
});
