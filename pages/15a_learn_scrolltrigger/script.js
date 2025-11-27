import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
	x: 500,
	rotate: 360,
	ease: "power2.out",
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".box",
		start: "top center",
		end: "bottom 20%",
		markers: true,
		scrub: 1.5, // when true, the animation is tied to the scrollbar position
	},
});
