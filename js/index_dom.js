import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import {moveBall,shortcuts} from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/detection_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import drow from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import speechReader from "./dom/narrador.js";


const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
	hamburgerMenu(".panel-btn",".panel",".menu a");
	digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
	alarm("assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
	countdown("countdown","April,02,2023 09:15:00","Feliz Cumpleaños!!","./img/Birthday.jpg","./assets/Simpson-Birthday.mp3");
	responsiveMedia("youtube","(min-width: 1024px)",`<a href="https://www.youtube.com/watch?v=863sLsyPrbA&ab_channel=MedellinStyle.com">Ver Vídeo</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/ENHmZArN-bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
	responsiveMedia("gmaps","(min-width: 1024px)",`<a href="https://goo.gl/maps/SKTBBV9HessqFuET9">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661630623397!2d-99.16759935!3d19.4270206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sco!4v1647984015657!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
	responsiveTester("responsive-tester");
	userDeviceInfo("user-device");
	webCam("webcam");
	getGeolocation("geolocation");
	searchFilters(".card-filter",".card");
	drow("#winner-btn",".player");
	slider();
	scrollSpy();
	smartVideo();
	contactFormValidations();
	
});


d.addEventListener("keydown", (e)=>{
	shortcuts(e);
	moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode",".stage");
networkStatus();
speechReader();
/*getuserMedia
mediadevices*/