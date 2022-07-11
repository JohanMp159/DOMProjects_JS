const d = document,
	  w = window;
export default function scrollTopButton(btn){
	const $scrollBtn = d.querySelector(btn);
	
	w.addEventListener("scroll",(e)=>{
		//console.log(w.pageYOffset, d.documentElement.scrollTop); 
		let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
		(scrollTop > 700)
		   ?$scrollBtn.classList.remove("hidden")
		   :$scrollBtn.classList.add("hidden");
	});
	
	d.addEventListener("click",(e)=>{
		if(e.target.matches(btn)){
			w.scrollTo({
				behaviour: "smooth",
				top: 0,				
			})
		}
	});
}