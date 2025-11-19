import gsap from "gsap";

gsap.to(".card", {
	repeat: -1,
	yoyo: true,
	opacity: 1,
	scale: 0.85,
	boxShadow: "0 0 100px 5px #3fffff",
	duration: 1,
});
