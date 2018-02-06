var Calculadora = {

	operando1: 0,
	operando2: 0,
	operador: '',

	/*Operaciones Basicas*/
	suma: function(){
		var result = 0
		if(Calculadora.esDecimal(this.operando1) || Calculadora.esDecimal(this.operando2)){
			var aux = parseFloat(this.operando1 + this.operando2)
			result = aux.toPrecision(8)
		}else{
			result = this.operando1 + this.operando2
		}
		return result
	},

	resta: function(){ 
		var result = 0
		if(Calculadora.esDecimal(this.operando1) || Calculadora.esDecimal(this.operando2)){
			var aux = parseFloat(this.operando1 - this.operando2)
			result = aux.toPrecision(8)
		}else{
			result = this.operando1 - this.operando2
		}
		return result
	},

	multiplicacion: function(){	
		var result = 0
		if(Calculadora.esDecimal(this.operando1) || Calculadora.esDecimal(this.operando2)){
			var aux = parseFloat(this.operando1 * this.operando2)
			result = aux.toPrecision(8)
		}else{
			result = this.operando1 * this.operando2
		}
		return result
	},

	division: function(){ 
		var result = 0
		var resultado = 0
		if(this.operando2 != 0){
				if(Calculadora.esDecimal(this.operando1) || Calculadora.esDecimal(this.operando2)){
					var aux = parseFloat(this.operando1 / this.operando2)
					result = aux.toPrecision(6)
				}else{
					if(Calculadora.esDecimal(this.operando1 / this.operando2)){
						var aux = parseFloat(this.operando1 / this.operando2)
						result = aux.toPrecision(6)
					}else{
						result = this.operando1 / this.operando2
					}
				}
		}else{
			alert('No es posible dividir un número por 0: Infinito');
			result = 0
		}
		
		return result
	},

	raiz: function(){
		var result = 0
		if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(Calculadora.operando2)){
			var aux = Math.sqrt(Calculadora.operando1)
			result = aux.toPrecision(6)
		}else{
			result = Math.sqrt(Calculadora.operando1)
		}
		return result
	},

	cambioSigno: function (ope) {
		var result = 0
		var operando = 0		
		if(Calculadora.esDecimal(ope)){
			operando = parseFloat(ope)
		}else
			operando = parseInt(ope)
			if(operando != 0)
				result = operando * -1
		return result
	},

	/*Funciones de Propositos especiales*/

	cleanDisplay: function(){
		document.getElementById('display').value 
	},

	showOnDisplay: function(valor){
		var val = valor.toString()
		if(val.length <= 8){
			Calculadora.cleanDisplay()
			document.getElementById('display').innerHTML = val
		}
	},


	precisionDecimal:function(val){
		var resultado = ''
		var contador = 0
		var value = val.toString()
		if(Calculadora.esDecimal(parseFloat(value))){
			for (var i = value.toString().length-1; i>=0; i--) {
				if(value[i] == '0')
					contador++
				else
					break	
			}
		}
		resultado = value.toString().substring(0, value.length-contador).trim()
		return resultado 
	},

	esDecimal: function(n) {
		return n % 1 != 0;
	},

	/*Funciones de Captura por Eventos de Mouse y visualización de Datos*/
	escucharClick: function(){
		var valor = ''
		/*Captura Valores Númericos*/
		document.getElementById('0').addEventListener("click", function(){
				if(valor == '0')valor=''
				if(document.getElementById('display').innerHTML != '0' ){
					valor += document.getElementById('0').getAttribute('alt')
					Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
				}
		})
		document.getElementById('1').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('1').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}

		})
		document.getElementById('2').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('2').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
				if(Calculadora.operador == '=')
				if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('3').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('3').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
				if(Calculadora.operador == '=')
					Calculadora.operando1 = valor
		})
		document.getElementById('4').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('4').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
				if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('5').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('5').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
				if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('6').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('6').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('7').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('7').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('8').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('8').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})
		document.getElementById('9').addEventListener("click", function(){
				if(valor == '0')valor=''
				valor += document.getElementById('9').getAttribute('alt')
				Calculadora.showOnDisplay(valor)
					if(Calculadora.operador == '='){
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
					}
		})

		/*Captura Operadores y otros Caracteres Aritmeticos*/
		document.getElementById('punto').addEventListener("click", function(){
			valor = document.getElementById('display').innerHTML
			if(valor.indexOf('.') < 0 ){
					valor += '.'
				Calculadora.showOnDisplay(valor)
			}else{
				console.log('Error, función invalida: El valor ingresado ya es decimal');
				alert('Error, función invalida: El valor ingresado ya es decimal')
			}
		})

		document.getElementById('on').addEventListener("click", function(){
				valor = 0;
				Calculadora.operando1 = 0
				Calculadora.operando2 = 0
				Calculadora.showOnDisplay(valor)
		})

		document.getElementById('sign').addEventListener("click", function(){
				Calculadora.operando1 = Calculadora.cambioSigno(valor)
				Calculadora.showOnDisplay(Calculadora.operando1)
				valor = 0
		})

		document.getElementById('igual').addEventListener("click", function(){

			switch(Calculadora.operador){
				case '+':
					if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor))
							Calculadora.operando2 = parseFloat(valor)
					else
							Calculadora.operando2 = parseInt(valor)
					valor = Calculadora.suma() 

				break
				case '-':
					if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor))
							Calculadora.operando2 = parseFloat(valor)
					else
							Calculadora.operando2 = parseInt(valor)
					valor = Calculadora.resta() 

				break
				case '*':
					if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor))
							Calculadora.operando2 = parseFloat(valor)
					else
							Calculadora.operando2 = parseInt(valor)
					valor = Calculadora.multiplicacion() 

				break;
				case '/':
					if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor))
							Calculadora.operando2 = parseFloat(valor)
					else
							Calculadora.operando2 = parseInt(valor)
					valor = Calculadora.division() 

				break;
				case 'raiz':
					if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor))
							Calculadora.operando2 = parseFloat(valor)
					else
							Calculadora.operando2 = parseInt(valor)
					valor = Calculadora.raiz() 
					
				break;
				default:
					valor = Calculadora.operando1
				break;
			}
			//alert(Calculadora.precisionDecimal(valor))
			Calculadora.operando1 = parseFloat(Calculadora.precisionDecimal(valor))
			Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
			valor = 0
			Calculadora.operador = '='
		})

		document.getElementById('mas').addEventListener("click", function(){
			  Calculadora.operador = '+'
			  console.log('Ahora esta realizando una Suma')
			 /*Operación ejecutada por primera vez*/
				if(Calculadora.operando1 == 0 && Calculadora.operando2 ==0){
					if(Calculadora.esDecimal(valor))
						Calculadora.operando1 = parseFloat(valor)
					else
						Calculadora.operando1 = parseInt(valor)
					valor = ''
				}else{
					/*Operación ejecutada por segunda o mas veces vez*/
					if(Calculadora.operado = '=')
						valor = 0
					if(Calculadora.operando1 !=0 && valor !=0 ){
						if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor)){
							Calculadora.operando2 = parseFloat(valor)
							Calculadora.operando1 = parseFloat(Calculadora.operando1)
						}else{
							Calculadora.operando2 = parseInt(valor)
							Calculadora.operando1 = parseInt(Calculadora.operando1)
						}
						valor = Calculadora.suma()
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
						Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
						valor = 0
					}
				}
		})

		document.getElementById('menos').addEventListener("click", function(){
			  Calculadora.operador = '-'
			  console.log('Ahora esta realizando una Resta')
			 /*Operación ejecutada por primera vez*/
				if(Calculadora.operando1 == 0 && Calculadora.operando2 ==0){
					if(Calculadora.esDecimal(valor))
						Calculadora.operando1 = parseFloat(valor)
					else
						Calculadora.operando1 = parseInt(valor)
					valor = ''
				}else{
					/*Operación ejecutada por segunda o mas veces vez*/
					if(Calculadora.operado = '=')
						valor = 0
					if(Calculadora.operando1 !=0 && valor !=0 ){
						if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor)){
							Calculadora.operando2 = parseFloat(valor)
							Calculadora.operando1 = parseFloat(Calculadora.operando1)
						}else{
							Calculadora.operando2 = parseInt(valor)
							Calculadora.operando1 = parseInt(Calculadora.operando1)
						}
						valor = Calculadora.resta()
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
						Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
						valor = 0
					}
				}
		})

		document.getElementById('por').addEventListener("click", function(){
			  Calculadora.operador = '*'
			  console.log('Ahora esta realizando una Multiplicación')
			 /*Operación ejecutada por primera vez*/
				if(Calculadora.operando1 == 0 && Calculadora.operando2 ==0){
					if(Calculadora.esDecimal(valor))
						Calculadora.operando1 = parseFloat(valor)
					else
						Calculadora.operando1 = parseInt(valor)
					valor = ''
				}else{
					/*Operación ejecutada por segunda o mas veces vez*/
					if(Calculadora.operado = '=')
						valor = 0
					if(Calculadora.operando1 !=0 && valor !=0 ){
						if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor)){
							Calculadora.operando2 = parseFloat(valor)
							Calculadora.operando1 = parseFloat(Calculadora.operando1)
						}else{
							Calculadora.operando2 = parseInt(valor)
							Calculadora.operando1 = parseInt(Calculadora.operando1)
						}
						valor = Calculadora.multiplicacion()
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
						Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
						valor = 0
					}
				}
		})

		document.getElementById('dividido').addEventListener("click", function(){
			  Calculadora.operador = '/'
			  console.log('Ahora esta realizando una División')
			 /*Operación ejecutada por primera vez*/
				if(Calculadora.operando1 == 0 && Calculadora.operando2 ==0){
					if(Calculadora.esDecimal(valor))
						Calculadora.operando1 = parseFloat(valor)
					else
						Calculadora.operando1 = parseInt(valor)
					valor = ''
				}else{
					/*Operación ejecutada por segunda o mas veces vez*/
					if(Calculadora.operado = '=')
						valor = 0
					if(Calculadora.operando1 !=0 && valor !=0 ){
						if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor)){
							Calculadora.operando2 = parseFloat(valor)
							Calculadora.operando1 = parseFloat(Calculadora.operando1)
						}else{
							Calculadora.operando2 = parseInt(valor)
							Calculadora.operando1 = parseInt(Calculadora.operando1)
						}
						valor = Calculadora.division()						
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
						Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
						valor = 0
					}
				}
		})

		document.getElementById('raiz').addEventListener("click", function(){
			  Calculadora.operador = 'raiz'
			  console.log('Ahora esta realizando una Raiz')
			 /*Operación ejecutada por primera vez*/
				if(Calculadora.operando1 == 0 && Calculadora.operando2 ==0){
					if(Calculadora.esDecimal(valor))
						Calculadora.operando1 = parseFloat(valor)
					else
						Calculadora.operando1 = parseInt(valor)
					valor = ''
				}else{
					/*Operación ejecutada por segunda o mas veces vez*/
					if(Calculadora.operado = '=')
						valor = 0
					if(Calculadora.operando1 !=0 && valor !=0 ){
						if(Calculadora.esDecimal(Calculadora.operando1) || Calculadora.esDecimal(valor)){
							Calculadora.operando2 = parseFloat(valor)
							Calculadora.operando1 = parseFloat(Calculadora.operando1)
						}else{
							Calculadora.operando2 = parseInt(valor)
							Calculadora.operando1 = parseInt(Calculadora.operando1)
						}
						alert('entro')
						valor = Calculadora.raiz()						
						Calculadora.operando1 = valor
						Calculadora.operando2 = 0
						Calculadora.showOnDisplay(Calculadora.precisionDecimal(valor))
						valor = 0
					}
				}
		})

	}

 }


Calculadora.escucharClick()

