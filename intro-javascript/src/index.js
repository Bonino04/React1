import  {getHeroeById}  from './data/heroes.js';

const promesa = new Promise( (resolve, reject)=> {

    setTimeout(() => {
        const heroes = getHeroeById(2);
       
    }, 2000)
});

promesa.then(() => {
    console.log('heroes')
})