/*----------------- INICIO DE FUNCIONES DECLARADAS -----------------*//*--Autor: https://github.com/RicardoCDEV-->*/
    function decToBin(numero){
        if(Math.floor(numero/2)===0){
            result += numero%2;
        }else{
            decToBin(Math.floor(numero/2));
            result += numero%2;
        }
    }

    function validarFormulario2(formularioDeConversion){
        if(formularioDeConversion.value === ""){
            conversionResult2.classList.add('error');
            conversionResult2Text.textContent = "Error, todavía no has puesto un numero binario entero para la conversión.";
        }else if(Number.isInteger(Number.parseInt(formularioDeConversion.value))){
            decToBin(Number.parseInt(formularioDeConversion.value));
            conversionResult2.classList.remove('error');
            conversionResult2Text.textContent = `${formularioDeConversion.value} en binario es: ${result}`;
            result = "";
        }else{
        
        }
    }
/*----------------- FIN DE FUNCIONES DECLARADAS -----------------*/

/*----------------- INICIO DE VARIABLES -----------------*/
    const input2 = document.querySelector("#input-2");
    const button2 = document.querySelector("#button-2");
    const conversionResult2 = document.querySelector(".conversion-result-2");
    const conversionResult2Text = document.querySelector(".conversion-result-2-text");
    let result = "";
/*----------------- FIN DE VARIABLES -----------------*/

/*----------------- INICIO DE ADD EVENT LISTENERS -----------------*/
    button2.addEventListener("click", ()=>{
        validarFormulario2(input2);
    })
/*----------------- FIN DE ADD EVENT LISTENERS -----------------*/