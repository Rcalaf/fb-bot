exports.messagesTypes = {
	greeting: {
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
	style: {
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
		1: {text: "¿Me tomas el pelo es facil elige uno?"}
	},
	  
	rims: {
		
	},
	colours:{
		
	},
	confused:{
		
	}
}

