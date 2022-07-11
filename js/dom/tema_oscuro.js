const d = document,
	  ls = localStorage;

export default function darkTheme(btn,classDark,stage){
	const $selectors = d.querySelectorAll("[data-dark]");
	const $themeBtn = d.querySelector(btn);
	const $stage = d.querySelector(stage);
	
	let moon ="🌙",
		sun ="☀️";
	
	const lightMode = ()=>{
		$selectors.forEach(el => el.classList.remove(classDark));
		$themeBtn.textContent = moon;
		$stage.classList.remove("stage-darkMode");
		ls.setItem("theme","light");
	};
	
	const darkMode =()=>{
		$selectors.forEach(el => el.classList.add(classDark));
		$themeBtn.textContent = sun;
		$stage.classList.add("stage-darkMode");
		ls.setItem("theme","dark");
	};
	
	
	d.addEventListener("click",(e)=>{
		if(e.target.matches(btn)){
			($themeBtn.textContent === moon)
				?darkMode()
				:lightMode();
				//console.log($selectors);
				//console.log($themeBtn.textContent);
		}
	});
	
	
	d.addEventListener("DOMContentLoaded",(e)=>{
		//validamos si exite una variable tipo Local Storage, si no la creamos
		//console.log(ls.getItem("theme"));  
		if(ls.getItem("theme") === null) ls.setItem("theme","light"); //setItem establecemos un nuevo valor a la API de localstorage.
		if(ls.getItem("theme") === "light") lightMode();
		if(ls.getItem("theme") === "dark") darkMode();
	});
}