import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
	gsap.fromTo(
		bar,
		{
			scaleY: 0.4,
		},
		{
			scaleY: 1.6,
			duration: 0.6,
			ease: "sine.in",
			yoyo: true,
			repeat: -1,
			delay: index * 0.1,
		},
	);
});
