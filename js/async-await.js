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

    
    async function ejecutandoLaFormaCool(){
        console.log('Ejecutando la forma cool! :)');

        try{
            const avengerId = await obtenerIdDeAvenger();

            try{
                const avengerNombre = await obtenerNombreDeAvenger(avengerId);
                mandarSaludo(avengerNombre);
            }
            catch(error){
                console.error('Error en obtener nombre de avenger => ', error);
            }
        }
        catch(err){
            console.error('Error en obtener id de avenger => ', err);
        }
    }

    ejecutandoLaFormaCool();

})();