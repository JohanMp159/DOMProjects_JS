export default function hamburgerMenu(panelBtn,panel,menuLink){
	const d = document;
	/*si el objeto que origina el evento (e.target) coincide (matches) con el selector que me estas dando en la variable (panelBoton)*/
	d.addEventListener("click", (e) =>{
		if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(panelBtn).classList.toggle("is-active");
		}
		if(e.target.matches(menuLink)){
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(panelBtn).classList.remove("is-active");
		}
	});
}

console.log("Tú seras cápaz de realizar este mini sitio antes de ver las soluciones de MirCha, Ánimo!!")
/*
let btnMenu = document.querySelector("#btnMenu"),
	menu = document.querySelector("#menu");

btnMenu.addEventListener("click",mostrarMenu);

function mostrarMenu(){
	menu.classList.toggle("mostrar");
}




*/