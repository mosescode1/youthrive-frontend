"use strict"
// NAV
const nav = document.querySelector("nav");
const accordian = document.querySelector(".accordian");
// ASSIGN BTN // MODAL AND OVERLAY
const assignBtn = document.querySelector(".modal_btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".inner-overlay");
const exit = document.querySelector(".exit");
// Tabbed Componet
const operation = document.querySelector(".employee_operations");
const tabs = document.querySelectorAll(".employee_tab");

// FORM
const form = document.querySelector("form");




/*
	Events Handler functions
*/
const navHandler = (e) => {
	const clicked = e.target.closest(".links");

	if (!accordian.classList.contains("hidden"))
		accordian.classList.add("hidden");
	// Guard clause
	if (!clicked) return;

	if (clicked.dataset.name == "employee") {
		accordian.classList.remove("hidden");
	}
}
// MODAL hANDLER
const handleModal = () => {
	overlay.classList.toggle("hidden");
	modal.classList.toggle("hidden");
}


// Tabbed component
const handleTabbedComponet = (e) => {
	const clicked = +e.target.dataset?.tab;
	if (!clicked) return;

	tabs.forEach(element => {
		element.classList.add("hidden")
	});

	document.querySelector(`.tab-${clicked}`)
		.classList.remove("hidden")

}

// form handler
const formHandler = (e) => {
	e.preventDefault();
}


// EVENT-LISTENERS
assignBtn.addEventListener("click", handleModal);
overlay.addEventListener("click", handleModal);
operation.addEventListener("click", handleTabbedComponet);
form.addEventListener("submit", formHandler);
nav.addEventListener("click", navHandler);
exit.addEventListener("click", handleModal);