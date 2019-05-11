; (function(){

    function obtenerNombreDeAvenger(){
        return new Promise((resolve, reject)=>{
            console.log('Empezó la promesa...');
            const nombreAvenger = "Capitana Marvel";
            
            setTimeout(function(){
                resolve(nombreAvenger);
            }, 2000);
        });
    }

    function mandarSaludo(nombre){
        const plantilla = `Hola ${nombre}. Soy tu fan!!`;
        console.log('Saludo => ', plantilla);
    }

    obtenerNombreDeAvenger()
    .then((valor) => {
        mandarSaludo(valor);
    })
    .catch((err) => {
        console.error('Err => ', err);
    })

})();