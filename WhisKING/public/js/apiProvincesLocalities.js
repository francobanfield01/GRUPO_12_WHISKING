
const urlLocalidades ='https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=';

const urlProvincias = 'https://apis.datos.gob.ar/georef/api/provincias';

const selectLocalidades = document.querySelector('#city');

const selectProvincias = document.querySelector('#province');

window.addEventListener('load', async()=>{
    try {
        let resp = await fetch(urlProvincias);
        let result = await resp.json();
       /*  console.log(result) */
        result.provincias.forEach(provincia => {
            console.log(provincia);
        });
    } catch (error) {
        
    }

})