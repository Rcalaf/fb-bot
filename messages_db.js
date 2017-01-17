const config = require('config');

// URL where the app is running (include protocol). Used to point to scripts and 
// assets located at this address. 
const SERVER_URL = (process.env.SERVER_URL) ?
  (process.env.SERVER_URL) :
  config.get('serverURL');

exports.messagesTypes = {
	saludos: {
		0: {text: "Hello. Welcome, "},
		//1: {text: "¿Por dónde empezamos a configurar tu nuevo Seat Ibiza?"},
		2: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "¿Where should we start configuring your new SEAT Ibiza? Let me suggest you 3 options:",
				buttons:[
					{
						type: "postback",
						title: "Trims",
						payload: "estilos"
					},{
						type: "postback",
						title: "Colours",
						payload: "colores"
					},{
						type: "postback",
						title: "Wheels",
						payload: "llantas"
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
	            title: "XCELLENCE",
	            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget velit pulvinar, bibendum lectus non, convallis magna.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/dark_gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Excellence",
				  payload: "excellence"
	            }]
	          }, {
	            title: "FR",
	            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget velit pulvinar, bibendum lectus non, convallis magna.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/red.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose FR",
				  payload: "fr"
	            }]
	          }]
	        }
	      }
	    },
		selected: {text: "Great we sorted out the trim! Let's take a look to colours or wheels?"},
		excellence: {text: "So you change your mind, You like the EXCELLENCE better!"},
		fr: {text: "Great so we change it for the FR trim"},
		mas: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Yes, you can find more in the Ibiza web. ¿Would you like to go to the full equip configurator on the web site or would you like keep exploring here?",
				buttons:[
					{
						type: "web_url",
            			url:"http://www.seat.com/",
            			title:"Go to the web site"
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
	            title: "Blue",
	            //subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/blue.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Blue",
				  payload: "blue"
	            }]
	          }, {
	            title: "Red",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/red.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Red",
				  payload: "red"
	            }]
	          }, {
	            title: "Grey",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Grey",
				  payload: "gray"
	            }]
	          }, {
	            title: "Technic Grey",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/dark_gray.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Technic Grey",
				  payload: "grayTech"
	            }]
	          }, {
	            title: "White",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/white.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose White",
				  payload: "white"
	            }]
	          }]
	        }
	      }
	    },
		selected: {text: "Great choice!"},
		changed: {text: "Did you change colour? Great! You can do it as many times as you like."},
		1: {text: "attempt 1"},
		2: {text: "attempt 2"},
		mas: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Yes, you can find more in the Ibiza web. ¿Would you like to go to the full equip configurator on the web site or would you like keep exploring here?",
				buttons:[
					{
						type: "web_url",
            			url:"http://www.seat.com/",
            			title:"Go to web site"
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
	            title: "Wheel 1",
	            //subtitle: "Eres fan de los detalles superclase. Odias el chándal de los domingos y los pijamas de franela. ¿Tus coches? Huelen a nuevo después 15 años usándolos.",
	            //item_url: "https://www.oculus.com/en-us/rift/",               
	            image_url: SERVER_URL + "/assets/llanta1.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Wheel 1",
				  payload: "llanta_1"
	            }]
	          }, {
	            title: "Wheel 2",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta2.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Wheel 2",
				  payload: "llanta_2"
	            }]
	          },{
	            title: "Wheel 3",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta3.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Wheel 3",
				  payload: "llanta_3"
	            }]
	          },{
	            title: "Wheel 4",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta4.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Wheel 4",
				  payload: "llanta_4"
	            }]
	          },{
	            title: "Wheel 5",
	            //subtitle: "Si los maleteros hablaran: el tuyo lo haría de zapatillas de deporte, arena de playa, sacos de dormir y de tus \“yo hago la compra para la fiesta del sábado\”.",
	            //item_url: "https://www.oculus.com/en-us/touch/",               
	            image_url: SERVER_URL + "/assets/llanta6.jpg",
	            buttons: [{
	              type: "postback",
	              title: "Choose Wheel 5",
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
				text: "Yes, you can find more in the Ibiza web. ¿Would you like to go to the full equip configurator on the web site or would you like keep exploring here?",
				buttons:[
					{
						type: "web_url",
            			url:"http://www.seat.com/",
            			title:"Go to web site"
					}]
				}
			}
		},
		selected: {text: "Great choice!"},
		changed: {text: "Did you change yur Wheel selection? Great! You can do it as many times as you like."},
		1: {text: "attempt 1"},
		2: {text: "attempt 2"}
	},
	confused:{
		2: {text: "¿How can i help you? I can show you \"Wheel\", \"colours\" or \"trims\", tell me what would you like to start with?"},
		1: {text: "I'm not sure if I understand..."},
		0: {text: "¿Could you repeat please?"}
	},
	done:{
		0: {attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Well here is your new SEAT Ibiza!",
				buttons:[
					{
						type: "web_url",
						url: "http://www.seat.com/",
						title: "Go to your Ibiza"
					}]
				}
			}
		}
	}
}

