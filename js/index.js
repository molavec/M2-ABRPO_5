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
