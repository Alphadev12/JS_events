let footer = document.querySelector('footer');
let count = 0;

footer.addEventListener("click", function () {
	count++;
	console.log(`Clic numéro ${count}`);
})