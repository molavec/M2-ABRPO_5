//Obtenemos una fecha
const date = new Date();
//console.log('La fecha es:', date);

// Obtengo el elemento contenedor
const container = document.getElementById('task-container');
//console.log('elemento HTML: ', container);

// Obtengo todos los contenedores .task
const task = document.getElementsByClassName('task');
//console.log('elementos task: ', task);

task[0].innerHTML = 'Cambio task 1' ;
task[1].innerHTML = 'Cambio task 2' ;

//imprimo la fecha en el contenedor
//console.log('<p>' + date  + '</p>');
container.innerHTML = '<p>' + date  + '</p>' ;

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

console.log('getResult(9)', getResult(9));


const showResultOnDOM = (event) => {
    console.log(event.target);
    const value = document.getElementById('survey-grade').value
    const surveyGradeElement = document.getElementById("survey");
    surveyGradeElement.innerHTML = "Gracias por tu respuesta. La calificación que nos has otorgado es:" + getResult(value) ;
};

// Definir un 'Listener' que escuche la modificación en el #survey-grade
document.addEventListener('change', showResultOnDOM );

// Obtener la nota


