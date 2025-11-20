import gsap from "gsap";

gsap.set(".gsap-box", { x: -500, y: 500, opacity: 0, scale: 0.5 });

gsap.to(".gsap-box", {
	x: 0,
	y: 0,
	opacity: 1,
	scale: 1,
	duration: 2,
	ease: "expo.out",
	delay: 0.5,
});
