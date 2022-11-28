const elInput = document.querySelector("#input");
const elBtn = document.querySelector("#btn");
const elForm = document.querySelector("#form");

elForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let inputValue = Number(elInput.value);
	const paragraph = document.createElement("p");
	elForm.appendChild(paragraph);

	if (inputValue === 1) {
		paragraph.textContent = "Dushanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 2) {
		paragraph.textContent = "Seshanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 3) {
		paragraph.textContent = "chorshanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 4) {
		paragraph.textContent = "payshanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 5) {
		paragraph.textContent = "Juma";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 6) {
		paragraph.textContent = "Shanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else if (inputValue === 7) {
		paragraph.textContent = "Yakshanba";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "gray";
		paragraph.style.fontWeight = "550";
	} else {
		paragraph.textContent = "1 dan 7 gacha bo'lgan son kiriting !";
		paragraph.style.margin = "20px";
		paragraph.style.fontSize = "28px";
		paragraph.style.color = "coral";
		paragraph.style.fontWeight = "550";
	}
	elInput.value = "";
});
