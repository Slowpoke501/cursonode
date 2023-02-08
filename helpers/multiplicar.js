const fs = require(`fs`);


const crearArchivo = async(base = 5,lista=false,hasta=10)=>{

    console.log(`======================`);
    console.log(` Tabla de base ${base}`);
    console.log(`======================`);


    let salida =``
    for (let i = 1; i < hasta+1; i++) {
        salida += `${base} X ${i} = ${base*i}\n`;
        
    }
    if(lista==true){
        console.log(salida)
    }
    

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
    
}

module.exports={
    crearArchivo
}