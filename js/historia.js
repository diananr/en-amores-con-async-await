; (function(){
    let nombre;

    function obtenerNombreDeAvenger(){
        const nombreAvenger = "Capitana Marvel";
        
        setTimeout(function(){
            nombre = nombreAvenger;
        }, 2000);
    }

    function mandarSaludo(){
        const plantilla = `Hola ${nombre}. Soy tu fan!!`;
        console.log('Saludo => ', plantilla);
    }

    obtenerNombreDeAvenger();
    mandarSaludo();
})();


