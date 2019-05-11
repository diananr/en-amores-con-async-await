; (function(){

    function obtenerIdDeAvenger(){
        return new Promise((resolve, reject)=>{
            console.log('Empezó la promesa...');
            const idAvenger = 1;

            setTimeout(function(){
                resolve(idAvenger);
            }, 1000);
        });
    }

    function obtenerNombreDeAvenger(idAvenger){
        return new Promise((resolve, reject)=>{
            console.log('Empezó la segunda promesa...');

            setTimeout(function(){
                if (idAvenger == 1) resolve("Capitana Marvel");
                resolve("Viuda Negra");
            }, 1000);
        });
    }

    function mandarSaludo(nombre){
        const plantilla = `Hola ${nombre}. Soy tu fan!!`;
        console.log('Saludo => ', plantilla);
    }

    
    obtenerIdDeAvenger()
    .then((id) => {
        console.log('Yeeey! Ya tenemos el id..');

        obtenerNombreDeAvenger(id)
        .then((nombre) => {
            mandarSaludo(nombre);
        })
    })
    .catch((err) => {
        console.error('Err => ', err);
    })

})();