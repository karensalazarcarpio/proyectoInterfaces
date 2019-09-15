import { Component, OnInit } from '@angular/core';
import { Itinerario } from './itinerario.model';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    private arrayDepartamentos: string[] = [];
    private listaItinerario: Itinerario[]= [];
    private itinerarioForm:Itinerario;

    constructor() { 
        this.itinerarioForm=new Itinerario();
    }

    ngOnInit() { 
        this.arrayDepartamentos.push('La Paz');
        this.arrayDepartamentos.push('Santa Cruz');
        this.arrayDepartamentos.push('Potosi');
        this.arrayDepartamentos.push('Oruro');
        this.arrayDepartamentos.push('Cochabamba');
        this.arrayDepartamentos.push('Pando');
        this.arrayDepartamentos.push('Tarija');
        this.arrayDepartamentos.push('Chuquisaca');
        this.arrayDepartamentos.push('Beni');

        

    }
    private adicionarForm(){
        //console.log(this.itinerarioForm);
        this.listaItinerario.push(this.itinerarioForm);   
    }
    private cambiarOrigen($event){
        //console.log($event.target.value);
        this.itinerarioForm.origen=$event.target.value;
    }
    
    private cambiarDestino($event){
        //console.log($event.target.value);
        this.itinerarioForm.destino=$event.target.value;
    }
}
