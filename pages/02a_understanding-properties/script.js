import gsap from "gsap";

gsap.to(".box", {
	// background: "#ff6f61",
	x: 300,
	y: 200,
	duration: 2,
	delay: 0.5,
	rotate: 360,
	scale: 1.1,
	ease: "power1.inOut", // easing function for smooth animation
	yoyo: true,
	repeat: -1,
	repeatDelay: 0.5, // wait 0.5 seconds before repeating
	borderRadius: "50%",
	paused: true, // start paused
	stagger: 0.2, // each box will start 0.2 seconds after the previous one
});
