const config = require('config');

// URL where the app is running (include protocol). Used to point to scripts and 
// assets located at this address. 
const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

exports.messagesTypes = {
	saludos: {
		0: {text: "Hola. Bienvenido, "},
		1: {text: "¿Por dónde empezamos a configurar tu nuevo Seat Ibiza?"},
		2: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Déjame sugerirte 3 opciones:",
				buttons:[
					{
						type: "postback",
						title: "Estilos",
						payload: "estilos"
					},{
						type: "postback",
						title: "Colores",
						payload: "estilos"
					},{
						type: "postback",
						title: "Llantas",
						payload: "estilos"
					}]
				}
			}
		}
	},
	estilos: {
		0:  {
	      attachment: {
	        type: "template",
	        payload: {
	          template_type: "generic",
	          elements: [{
	            title: "EXCELLENCE",
	            subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/dark_gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Excellence",
				  payload: "excellence"
	            }]
	          }, {
	            title: "FR",
	            subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/red.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir FR",
				  payload: "fr"
	            }]
	          }]
	        }
	      }
	    },
		selected: {text: "Genial ya tenemos el estilo! que te parece si miramos color y llantas?"},
		excellence: {text: "Asi que cambiaste de opinion, te gusta mas el EXCELLENCE!"},
		fr: {text: "Genial lo cambiamos por el estilo FR"},
		1: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Sí, hay más en la web de Ibiza. ¿Quieres ir al configurador full equip de la web o quieres seguir aqui?",
				buttons:[
					{
						type: "web_url",
            			url:"http://configurador.seat.es/seat-cc/desktop-desktop-003_DEFAULT-es-normal.view?msk=1#carline",
            			title:"Ir a la Web"
					}]
				}
			}
		}
	},
	  
	colores: {
		0:  {
	      attachment: {
	        type: "template",
	        payload: {
	          template_type: "generic",
	          elements: [{
	            title: "EXCELLENCE",
	            subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            //image_url: SERVER_URL + "/assets/rift.png",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Excellence",
				  payload: "excellence"
	            }]
	          }, {
	            title: "FR",
	            subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            //image_url: SERVER_URL + "/assets/touch.png",
	            buttons: [{
	              type: "postback",
	              title: "Eligir FR",
				  payload: "fr"
	            }]
	          }]
	        }
	      }
	    },
		
	},
	llantas:{
		0:  {
	      attachment: {
	        type: "template",
	        payload: {
	          template_type: "generic",
	          elements: [{
	            title: "EXCELLENCE",
	            subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            //image_url: SERVER_URL + "/assets/rift.png",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Excellence",
				  payload: "excellence"
	            }]
	          }, {
	            title: "FR",
	            subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            //image_url: SERVER_URL + "/assets/touch.png",
	            buttons: [{
	              type: "postback",
	              title: "Eligir FR",
				  payload: "fr"
	            }]
	          }]
	        }
	      }
	    },
	},
	confused:{
		
	}
}

