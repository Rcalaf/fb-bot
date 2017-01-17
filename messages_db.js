const config = require('config');

// URL where the app is running (include protocol). Used to point to scripts and 
// assets located at this address. 
const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

exports.messagesTypes = {
	saludos: {
		0: {text: "Hola. Bienvenido, "},
		//1: {text: "¿Por dónde empezamos a configurar tu nuevo Seat Ibiza?"},
		2: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "¿Por dónde empezamos a configurar tu nuevo Seat Ibiza? Déjame sugerirte 3 opciones:",
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
		mas: {attachment:{
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
	            title: "Azul",
	            //subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/blue.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Azul",
				  payload: "blue"
	            }]
	          }, {
	            title: "Rojo",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/red.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Rojo",
				  payload: "red"
	            }]
	          }, {
	            title: "Gris",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Gris",
				  payload: "gray"
	            }]
	          }, {
	            title: "Gris Technic",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/dark_gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Gris Technic",
				  payload: "grayTech"
	            }]
	          }, {
	            title: "Blanco",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/white.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Blanco",
				  payload: "white"
	            }]
	          }]
	        }
	      }
	    },
		selected: {text: "Buena elección!"},
		changed: {text: "Cambiaste de tipo de color? Genial! Pudes hacerlo tantas veces como quieras."},
		1: {text: "attempt 1"},
		2: {text: "attempt 2"},
		mas: {attachment:{
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
	llantas:{
		0:  {
	      attachment: {
	        type: "template",
	        payload: {
	          template_type: "generic",
	          elements: [{
	            title: "Llanta 1",
	            //subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/llanta1.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Llanta 1",
				  payload: "llanta_1"
	            }]
	          }, {
	            title: "Llanta 2",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta2.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Llanta 2",
				  payload: "llanta_2"
	            }]
	          },{
	            title: "Llanta 3",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta3.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Llanta 3",
				  payload: "llanta_3"
	            }]
	          },{
	            title: "Llanta 4",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta4.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Llanta 4",
				  payload: "llanta_4"
	            }]
	          },{
	            title: "Llanta 5",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta6.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Eligir Llanta 5",
				  payload: "llanta_5"
	            }]
	          }]
	        }
	      }
	    },
		mas: {attachment:{
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
		},
		selected: {text: "Buena elección!"},
		changed: {text: "Cambiaste de tipo de llanta? Genial! Pudes hacerlo tantas veces como quieras."},
		1: {text: "attempt 1"},
		2: {text: "attempt 2"}
	},
	confused:{
		2: {text: "¿Como puedo ayudarte? Te puedo mostrar \"llantas\", \"colores\" o \"estilos\", dime por donde quieres empezar?"},
		1: {text: "No se si te entiendo..."},
		0: {text: "¿Me puedes repetir?"}
	}
}

