import gsap from "gsap";
const card = document.getElementById("card");

card.addEventListener("mouseenter", () => {
	gsap.to("#card", {
		rotateY: 180,
		duration: 1,
		yoyo: true,
		ease: "power1.inOut",
	});
});

card.addEventListener("mouseleave", () => {
	gsap.to("#card", {
		rotateY: 0,
		duration: 1,
		yoyo: true,
		ease: "power1.inOut",
	});
});
