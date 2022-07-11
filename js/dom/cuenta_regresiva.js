const d= document;

export default function countdown(id,limitDate,finalMessage,url,ruta){
	const $countdown =d.getElementById(id),
		  countdownDate = new Date(limitDate).getTime();
	
	let countdownTempo = setInterval(()=>{
		let now = new Date().getTime(),
			limitTime = countdownDate - now,
			days = Math.floor(limitTime/(1000*60*60*24)),
			hours = ("0" + Math.floor(limitTime%(1000*60*60*24)/(1000*60*60))).slice(-2),
			minutes = ("0" + Math.floor(limitTime%(1000*60*60)/(1000*60))).slice(-2),
			seconds = ("0" + Math.floor(limitTime%(1000*60)/(1000))).slice(-2);
		
		$countdown.innerHTML = `<h3> Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;
		if(limitTime < 0){
			clearInterval(countdownTempo);
			$countdown.innerHTML = `<h3>${finalMessage} </h3>`;
			$countdown.style.backgroundImage = "url(img/confeti2.gif)";
			
			const $image = document.createElement("img");
			$image.src = url;
			$image.style.width = "430px";
			$image.style.height = "500px";
			$image.style.objectFit = "cover";
			$countdown.insertAdjacentElement("afterBegin",$image);
			
			let setTime;
			const $alarm = d.createElement("audio");
			$alarm.src = ruta;
			$alarm.controls = true;
			
			$countdown.insertAdjacentElement("beforeEnd",$alarm);
			setTime = setTimeout(()=>{
				$alarm.play();
			},1000);
			
			setTimeout(()=>{
				clearInterval(setTime);
				$alarm.src = "./assets/cumpleaños.mp3"
				$alarm.play();
				$alarm.volume = 0.30;				
			},1000*40);	
			
		}
	},1000)
}