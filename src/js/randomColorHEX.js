var btn = document.getElementById('changerColor')
var hexColor = document.getElementById('hexColor')

var generator = function () {
	newColor = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
	console.log(newColor);
	if (newColor.lenght < 7) {
		generator();
	}
}

btn.addEventListener('click', function () {
	generator();

	document.body.style.background = newColor;
	// btn.style.color = newColor;
	hexColor.innerText = newColor;
});
