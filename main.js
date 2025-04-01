const mainContainer = document.querySelector("main");
const btnGo = document.getElementById("btn");
const inputUrl = document.getElementById("inputUrl");

function createElement(tag, className, id, textContent) {
	const element = document.createElement(tag);
	element.className = className;
	element.id = id;
	element.textContent = textContent;
	return;
}

function createCard(title) {
    const article = createElement('article')

    const h1 = createElement("h1", "", "", title)
    article.appendChild(h1);
}


btnGo.addEventListener("click", () => {
	fetch(inputUrl.value)
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < data.length; i++) {
                const el = data[i];

            }
		});
});

// let globalData = [];
