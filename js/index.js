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
    } else if ( nota >= 9 && nota <= 10 ) { // 9, 10
        return 'Sobresaliente';
    } else {
        return 'Ingresa un valor entre 0 y 10' 
    }
};



// De
// Obtener la nota


