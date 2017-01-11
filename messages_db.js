var messagesTypes = {
	greeting: {
		1: {text: "Hola. Bienvenido, "},
		2: {text:"¿Por dónde empezamos a configurar tu nuevo Seat Ibiza?"},
		3: {attachment:{
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

exports.messagesTypes = messagesTypes;