const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite=10) =>{
    return new Promise( (resolve, reject) => {
        if( !Number(base)){
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }
        let data = '';
        for (let i=1 ; i<=limite ; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-con-limite-${limite}.txt`,data, (err)=>{
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}-con-limite-${limite}.txt`);
        })
    })
}

let listarTabla = (base, limite = 10) =>{
    console.log('======================================'.red);
    console.log(`==============Tabla del ${base}=============`.red);
    console.log('======================================'.red);
    for (let i=1 ; i<=limite ; i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
