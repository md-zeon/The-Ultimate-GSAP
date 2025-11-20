import gsap from "gsap";

const reactions = document.querySelector(".reactions");

reactions.addEventListener("click", (e) => {
	if (e.target.tagName !== "BUTTON") return;
	const btn = e.target;
	gsap.fromTo(
		btn,
		{
			rotation: 30,
		},
		{
			rotation: -30,
			duration: 1,
			ease: "sine.out",
		},
	);
	gsap.fromTo(
		btn,
		{ y: 0, scale: 1, rotation: 0, opacity: 1 },
		{
			y: -100,
			scale: 1.5,
			opacity: 0,
			duration: 1,
			yoyo: true,
			ease: "sine.out",
			onComplete: () => {
				gsap.set(btn, { y: 0, scale: 1, rotation: 0, opacity: 1 });
			},
		},
	);
});
