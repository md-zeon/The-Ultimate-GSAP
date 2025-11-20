import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indecator = document.querySelector(".indicator");

const updateIndecator = (element) => {
	const tabBounds = element.getBoundingClientRect(); // Get the size and position of the clicked tab
	const rowBounds = tabRow.getBoundingClientRect(); // Get the size and position of the tab row

	const width = tabBounds.width;
	const offset = tabBounds.left - rowBounds.left;

	gsap.to(indecator, {
		width: width,
		x: offset,
		duration: 0.5,
		ease: "back.out(1.7)",
	});
};

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((t) => t.classList.remove("active"));
		tab.classList.add("active");
		updateIndecator(tab);
	});
});

// Initialize the indicator position on the first tab
updateIndecator(document.querySelector(".tab.active"));
