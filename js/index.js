//Obtenemos una fecha
const date = new Date();
//console.log('La fecha es:', date);

// Obtengo el elemento contenedor
const container = document.getElementById('task-container');
//console.log('elemento HTML: ', container);

// Obtengo todos los contenedores .task
const task = document.getElementsByClassName('task');
console.log('elementos task: ', task);

task[0].innerHTML = 'Cambio task 1' ;
task[1].innerHTML = 'Cambio task 2' ;

//imprimo la fecha en el contenedor
//console.log('<p>' + date  + '</p>');
container.innerHTML = '<p>' + date  + '</p>' ;

// CÓDIGO ENCUESTA

// Obtener la nota


// función para mostrar el resultado
const getResult = (nota) => {
    if (nota < 3) {
        return 'Muy deficiente';
    } else if ( nota >= 3 && nota < 5 ) {
        return 'Insuficiente';
    } else if ( nota >= 6 && nota < 7 ) {
        return 'Suficiente';
    } else if ( nota >= 7 && nota < 8 ) {
        return 'Bien';
    } else if ( nota >= 8 && nota < 9 ) {
        return 'Notable';
    } else if ( nota >= 9 && nota <= 10 ) {
        return 'Sobresaliente';
    } else {
        'Ingresa un valor entre 0 y 10' 
    }
};
