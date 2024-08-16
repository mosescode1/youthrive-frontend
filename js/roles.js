"use strict"
// NAV
const nav = document.querySelector("nav");
const accordian = document.querySelector(".accordian");
// ASSIGN BTN // MODAL AND OVERLAY
const assignBtn = document.querySelector(".modal_btn");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".inner-overlay");
const exit = document.querySelector(".exit");

// filtter btn
const listBtn = document.querySelector(".list_btn");
const gridBtn = document.querySelector(".grid_btn");
const gridContent = document.querySelector(".grid_content");
const filtter = document.querySelector(".filter_lines");


// OBJECT ROLES

const roles = [
	{
		title: "Solution Sales Specialist",
		content: "Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company's sales goals.",
		name: "james Campion",
		job_description: "Cook"
	},
	{
		title: "Solution Sales Specialist",
		content: "Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company's sales goals.",
		name: "james Campion",
		job_description: "Manager"
	},
	{
		title: "Solution Sales Specialist",
		content: "Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company's sales goals.",
		name: "james Campion",
		job_description: "Manager"
	},
	{
		title: "Solution Sales Specialist",
		content: "Responsible for driving revenue growth by identifying and pursuing new business opportunities, as well as maintaining relationships with existing clients. working closely with customers to understand their needs and provide solutions that meet or exceed their expectations, while also achieving the company's sales goals.",
		name: "james Campion",
		job_description: "Manager"
	},

]

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

// POPULATE ROLES

const populateRoles = function () {
	roles.forEach((role) => {
		const html = `
		<div class="outer">
							<div class="roles_card">
								<div class="category__header">
									<h2>${role.title}</h2>
									<div>
										<div class="image_category">image here</div>
										<div class="icon">icon Here</div>
									</div>
								</div>

								<p>${role.content}</p>

								<div class="categories">
									<button class="cartegories_btn">Marketing</button>
									<button class="cartegories_btn">Product</button>
									<button class="cartegories_btn">Engineering</button>
									<button class="cartegories_btn_design">Design</button>
								</div>

								<div class="profile_categories">
									<div><img src="../assets/role_card_img.png" alt="" /></div>
									<div class="img_txt">
										<h4>${role.name}</h4>
										<p>${role.job_description}</p>
									</div>
									<div class="category_icon">
										<img src="../assets/Icon.png" alt="" />
									</div>
								</div>
							</div>
						</div>`;

		gridContent.insertAdjacentHTML("beforeend", html);
	})
}

populateRoles()


const value = roles.filter((role) => role.job_description === 'Manager')

console.log(value)

// EVENT-LISTENERS
assignBtn.addEventListener("click", handleModal);
overlay.addEventListener("click", handleModal);
nav.addEventListener("click", navHandler);
exit.addEventListener("click", handleModal);


gridBtn.addEventListener("click", () => {
	gridContent.classList.add("grid_layout")
})

listBtn.addEventListener("click", () => {
	gridContent.classList.remove("grid_layout")
})

filtter.addEventListener("click", () => {
	gridContent.classList.toggle("grid_layout");
})

