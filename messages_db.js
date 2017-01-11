exports.messagesTypes = {
	greeting: {
		0: {text: "Hola. Bienvenido, "},
		1: {text: utf8_encode("¿Por dónde empezamos a configurar tu nuevo Seat Ibiza?")},
		2: {attachment:{
				type: "template",
				payload: {
					template_type: "button",
					text: "",
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
		texts:[""]
	},
	rims: {
		
	},
	colours:{
		
	},
	confused:{
		
	}
}

