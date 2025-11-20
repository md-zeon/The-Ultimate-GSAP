import gsap from "gsap";

const scrollToTopBtn = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
	const scrollY = window.scrollY || window.pageYOffset;
	if (scrollY > 300) {
		scrollToTopBtn.classList.add("show");
		if (!isFloating) {
			gsap.to(scrollToTopBtn, {
				y: 10,
				duration: 2,
				ease: "sine.in",
				yoyo: true,
				repeat: -1,
			});

			isFloating = true;
		}
	} else {
		scrollToTopBtn.classList.remove("show");
		isFloating = false;
	}
});

scrollToTopBtn.addEventListener("mouseenter", () => {
	gsap.to(scrollToTopBtn, {
		scale: 1.1,
		duration: 0.3,
		ease: "sine.out",
	});
});

scrollToTopBtn.addEventListener("mouseleave", () => {
	gsap.to(scrollToTopBtn, {
		scale: 1,
		duration: 0.3,
		ease: "sine.out",
	});
});

scrollToTopBtn.addEventListener("click", () => {
	window.scrollTo(0, 0);
	// window.scrollTo({ top: 0, behavior: "smooth" });
});
