import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".pin-section", {
	scrollTrigger: {
		trigger: ".pin-section",
		start: "top top",
		end: "+=500",
		scrub: true,
		markers: true,
		pin: true,
	},
});
