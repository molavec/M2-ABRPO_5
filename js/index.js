// CÓDIGO ENCUESTA
// función para mostrar el resultado
const getResult = (nota) => {
    if (nota < 3) { // 0, 1, 2 
        return 'Muy deficiente';
    } else if ( nota >= 3 && nota < 5 ) { // 3, 4
        return 'Insuficiente';
    } else if ( nota >= 5 && nota < 7 ) { // 5, 6
        return 'Suficiente';
    } else if ( nota >= 7 && nota < 8 ) { // 7
        return 'Bien';
    } else if ( nota >= 8 && nota < 9 ) { // 8
        return 'Notable';
    } else if (  9 <= nota <= 10 ) { // 9, 10
        return 'Sobresaliente';
    } else {
        return 'Ingresa un valor entre 0 y 10' 
    }
};



const showResultOnDOM = (event) => {
    console.log(event.target);
    const value = document.getElementById('survey-grade').value
    const surveyGradeElement = document.getElementById("survey");
    surveyGradeElement.innerHTML = "Gracias por tu respuesta. La calificación que nos has otorgado es:" + getResult(value) ;
};

// Definir un 'Listener' que escuche la modificación en el #survey-grade
//document.addEventListener('change', showResultOnDOM );

// Obtener la nota

// BOTON WHATSAPP
$('#myDiv').floatingWhatsApp({
    phone: '56993443055',
    popupMessage: 'Hola, en que puedo ayudarte?',
    showPopup: true,
    position:'right',
});

// Funcion para hora
setInterval(() => {
    // console.log('ejecucion setTimeOut',new Date())
    $('#date').html(new Date())    
  }, 1000)