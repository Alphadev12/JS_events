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

// Fonctionnalité 3
let btnEdit = document.querySelector(".btn.btn-sm.btn-outline-secondary");
let card_text = btnEdit.parentNode.parentNode.previousElementSibling;

btnEdit.addEventListener("click", function () {
	card_text.style.color = 'red';
});

// Fonctionnalité 4
let btnEdit2 = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary")[1];
let card_text2 = document.querySelectorAll('.card-text')[1];

btnEdit2.addEventListener("click", function () {
	if (card_text2.style.color === 'green') {
		card_text2.style.color = 'black';
	}
	else {
		card_text2.style.color = 'green';
	}
});

// Fonctionnalité 5
let navbar = document.querySelector('.navbar');
let linkTag = document.getElementsByTagName('link')[0];
let linkDisabled = false;
navbar.addEventListener("dblclick", function () {
	if (linkDisabled == false) {
		linkTag.disabled = true;
		linkDisabled = true;
	}
	else if(linkDisabled == true){
		linkTag.disabled = false;
		linkDisabled = false;
	}
});

// Fonctionnalité 6
let btnView = document.querySelectorAll('.btn.btn-sm.btn-success');
for (let i = 0; i < btnView.length; i++) {
	let card_image = btnView[i].parentNode.parentNode.parentNode.previousElementSibling;
	let cart_textView = btnView[i].parentNode.parentNode.previousElementSibling;
	let toggle = true;

	btnView[i].addEventListener("mouseover", function () {
		if (toggle == true) {
			cart_textView.style.display = 'none';
			card_image.style.width = '20%';
			toggle = false;
		}
		else if (toggle == false) {
			cart_textView.style.display = 'block';
			card_image.style.width = '100%';
			toggle = true;
		}
	});
}


// Fonctionnalité 7
let btnNext = document.getElementsByClassName('btn btn-secondary my-2')[0];

btnNext.addEventListener("click", function () {
	let card = document.getElementsByClassName("card");
	lastCard = card[5].parentNode;
	firstCard = card[0].parentNode;

	parent = lastCard.parentNode;

	parent.insertBefore(lastCard,firstCard);
});