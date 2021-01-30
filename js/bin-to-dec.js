/*----------------- INICIO DE FUNCIONES DECLARADAS -----------------*//*--Autor: https://github.com/RicardoCDEV-->*/
    function binToDec(numero,ind,rel){
        if(numero.length === ind+1){
            result += Number.parseInt(numero[ind])+2*rel;
        }else{
            binToDec(numero, ind+1, Number.parseInt(numero[ind])+2*rel);
        }
    }
    
    function validarFormulario1(formularioDeConversion){    
        if(!/\b[01]+\b/.test(formularioDeConversion.value) && formularioDeConversion.value !== ""){
            conversionResult1Text.textContent = "Error, no es un número en representación binaria. Los números binarios solo pueden tener 1 o 0, ejemplo: 101.";
            conversionResult1.classList.add('error');
        }else if(formularioDeConversion.value === ""){
            conversionResult1.classList.add('error');
            conversionResult1Text.textContent = "Error, todavía no has puesto un numero binario entero para la conversión.";
        }else if(Number.isInteger(Number.parseInt(formularioDeConversion.value)) && /\b[01]+\b/.test(formularioDeConversion.value)){ //expresion regular usado /\b[01]+\b/  https://stackoverflow.com/questions/55093033/regex-to-describe-binary-numbers
            binToDec(formularioDeConversion.value, 0, 0);
            conversionResult1.classList.remove('error');
            conversionResult1Text.textContent = `${formularioDeConversion.value} en decimal es: ${result}`;
            result = "";
        }else{
            
        }
    }
/*----------------- FIN DE FUNCIONES DECLARADAS -----------------*/

/*----------------- INICIO DE VARIABLES -----------------*/
    const input1 = document.querySelector("#input-1");
    const button1 = document.querySelector("#button-1");
    const conversionResult1 = document.querySelector(".conversion-result-1");
    const conversionResult1Text = document.querySelector(".conversion-result-1-text");
/*----------------- FIN DE VARIABLES -----------------*/

/*----------------- INICIO DE ADD EVENT LISTENERS -----------------*/
    button1.addEventListener("click", ()=>{
        validarFormulario1(input1);
    })
/*----------------- FIN DE ADD EVENT LISTENERS -----------------*/