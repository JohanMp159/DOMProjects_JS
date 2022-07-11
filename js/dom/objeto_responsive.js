const d = document,
	  w = window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent){
	let breakPoint = w.matchMedia(mq);
	const responsive = (e) =>{
		(e.matches)
			?d.getElementById(id).innerHTML = desktopContent
			:d.getElementById(id).innerHTML = mobileContent;
		//console.log(breakPoint, e.matches)
	}
	
	//add.Listener recibe una funcion que estara evaluando la medaiquery
	breakPoint.addListener(responsive);
	responsive(breakPoint);
}