const d = document,
	  n = navigator;

export default function getGeolocation(id){
	const $id = d.getElementById(id),
	options ={
		enableHighAccuracy: true, // el dispositivo trate de hacer una lectura
		timeout: 5000,
		maximinAge: 0, //No guardar en cache las lecturas, no tenga referencias anteriores
	},
		  
	target = {
		latitude : 0,
		longitude: 0,
	};
	
	const sucess = (position) =>{
		let coords = position.coords;
		if(target.latitude != coords.latitude && target.longitude != coords.longitude){
		$id.innerHTML = `
			<p> Tu posición actual es: </p>			
			<ul>
				<li>Latitud: <b>${coords.latitude}</b> </li>
				<li>Longitud: <b>${coords.longitude}</b></li>
				<li>Precisión: <b>${coords.accuracy} Metros </b></li>
			</ul>
			<a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener"> Ver en Google Maps </a>
		`;
		n.geolocation.clearWatch(watchID);
		//console.log(position);
		}
	};
	
	const error = (err) =>{
		$id.innerHTML = `<p> <mark> Error ${err.code}: ${err.message} </mark> </p>`;
		console.log(`Error ${err.code}: ${err.message}`);
	};
	/*
	n.geolocation.getCurrentPosition(sucess,error,options);*/
	const watchID = n.geolocation.watchPosition(sucess,error,options);
	
	
/*	
	let watchID = n.geolocation.watchPosition((e)=>{
		e.coords.latitude, e.coords.longitude;
	});*/
	

}