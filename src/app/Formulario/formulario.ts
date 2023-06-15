import {Component, OnInit} from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
    selector: 'formulario',
    templateUrl: './formulario.html',
    styleUrls: ["./formulario.css"]
})

export class Formulario implements OnInit{
    
    formData = {
        title: "",
        ult: "",
        des: "",
        contacto: "",
        ciudad: "",
        pais: "",
    }
    
    titulos: string[] = ['Server1', 'server2', 'sernver4', 'serverN']

    reporte = ""

    ngOnInit(){
        
    }

    onUpdatereporte(event: any){
        this.reporte = event.target.value
    }

    submitForm(form: NgForm){
        if (form.valid){
            alert("Formulario válido")
            console.log("Formulario válido")
        }else{
            alert("Formulario inválido")
            console.log("Formulario inválido")
        }
    }
}
