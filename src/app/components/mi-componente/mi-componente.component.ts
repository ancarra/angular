import {Component} from '@angular/core';

@Component({
    selector : 'mi-componente',
    template : `<h1>Hola soy la hostia puta</h1>
                <p> soy el copon</p>`

})

export class MiComponente{
    constructor(){
        console.log("coponente creado ok");
    }
}