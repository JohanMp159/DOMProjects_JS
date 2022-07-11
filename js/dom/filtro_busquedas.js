const d = document;

export default function searchFilters(input,selector){
	const $cardFilter = d.querySelector(input),
		  $cards = d.querySelectorAll(selector);
	
	d.addEventListener("keyup",(e)=>{
		if(e.target.matches(input)){
			if(e.key === "Escape"){e.target.value = ""};
			
			d.querySelectorAll(selector).forEach((el) =>{
				el.textContent.toLowerCase().includes(e.target.value)
				?el.classList.remove("filter")
				:el.classList.add("filter")
			});
			console.log(e.key)
		   	console.log(e.target.value)
		   }
	})
}