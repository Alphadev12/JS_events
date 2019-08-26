// Fonctionnalité 1
let footer = document.querySelector('footer');
let count = 0;

footer.addEventListener("click", function () {
	count++;
	console.log(`Clic numéro ${count}`);
});


// Fonctionnalité 2
let menu = document.getElementById('navbarHeader');
let btnMenu = document.getElementsByClassName('navbar-toggler')[0];
let menuStatus = false;

btnMenu.addEventListener("click", function () {
	if (menuStatus == false) {
		menu.classList.remove('collapse');
		menuStatus = true;
	}
	else if (menuStatus == true) {
		menu.classList.add('collapse');
		menuStatus = false;
	}
	// menu.classList.toggle('collapse');
});