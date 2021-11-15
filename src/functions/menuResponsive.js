export const clickMenu = () => {
	let menuButton = document.getElementById("menuResponsiveIcon");
	let menuResponsive = document.getElementById("navbarResponsive");

	menuButton.addEventListener("click", () => {
		menuResponsive.classList.toggle("listaHide");
	});

	window.onscroll = () => {
		if (this.scrollY > 50) {
			menuResponsive.classList.remove("listaHide");
		}
	};
};
