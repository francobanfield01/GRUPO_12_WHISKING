const urlProvincias = 'https://apis.datos.gob.ar/georef/api/provincias';
//https://apis.datos.gob.ar/georef/api/provincias

const urlLocalidades ='https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=';
//https://apis.datos.gob.ar/georef/api/localidades

const selectProvincias = document.getElementById('select-province');
const selectProvincias2 = document.getElementById('select-province2');
const selectLocalidades = document.getElementById('select-city');
const selectLocalidades2 = document.getElementById('select-city2');

/* -----Api para Direccion de Facturación-------- */
window.addEventListener('load', async()=>{
    try {
        let resp = await fetch(urlProvincias);
        let result = await resp.json();      
        let provincias = result.provincias;
        provincias = provincias.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0);
        result.provincias.forEach(provincia => {
            selectProvincias.innerHTML += `<option value="${provincia.nombre}">${provincia.nombre}</option>`          
        });
    } catch (error) {
        console.error(error);
    }
})

selectProvincias.addEventListener('change', async (e) =>{
    try {
        let resp = await fetch(urlLocalidades + e.target.value);
        let result = await resp.json();
        let localidades = result.localidades;
        localidades = localidades.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0);
        selectLocalidades.innerHTML = null;    
        result.localidades.forEach(localidad => {
        selectLocalidades.innerHTML += `<option value="${localidad.nombre}">${localidad.nombre}</option>`  
    });
        
    } catch (error) {
        console.error(error)
    }
})

/*------- Api para Direccion de Envio --------*/
window.addEventListener('load', async()=>{
    try {
        let resp2 = await fetch(urlProvincias);
        let result2 = await resp2.json();      
        let provincias2 = result2.provincias;
        provincias2 = provincias2.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0);
        result2.provincias.forEach(provincia => {
            selectProvincias2.innerHTML += `<option value="${provincia.nombre}">${provincia.nombre}</option>`

        });
    } catch (error) {
        console.error(error);
    }
})

selectProvincias2.addEventListener('change', async (e) =>{
    try {
        let resp2 = await fetch(urlLocalidades + e.target.value);
        let result2 = await resp2.json();
        let localidades2 = result2.localidades;
        localidades2 = localidades2.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0);
        selectLocalidades2.innerHTML = null;
        result2.localidades.forEach(localidad => {
        selectLocalidades2.innerHTML += `<option value="${localidad.nombre}">${localidad.nombre}</option>`
    })
        
    } catch (error) {
        console.error(error)
    }
});    
    
