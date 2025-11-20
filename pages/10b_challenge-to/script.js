import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

const showToast = (toastIdx = 0) => {
	if (toastIdx < 0 || toastIdx >= toasts.length) return;
	const toast = toasts[toastIdx];
	gsap.to(toast, {
		y: -120,
		opacity: 1,
		scale: 1,
		duration: 0.8,
		delay: 0.1 * toastIdx,
		ease: "power4.out",
		onComplete: () => {
			gsap.to(toast, {
				y: 0,
				delay: 2.5,
				opacity: 0,
				scale: 0.95,
				duration: 0.8,
				ease: "power4.in",
				onComplete: () => {
					showToast(toastIdx + 1);
				},
			});
		},
	});
};

showToast();
