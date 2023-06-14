import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista = [
    {visibility: true, title: 'Perro encontrado', image: "https://c4.wallpaperflare.com/wallpaper/816/552/980/animales-labrados-perro-wallpaper-preview.jpg", ult: "01/04/23", des: "Encontrado en Barrio San Isidro", contacto: "0987123412", pais: "Paraguay", ciudad: "Asunción"},
    {visibility: true, title: 'Perro perdido', image: "https://www.astrolabio.com.mx/wp-content/uploads/2016/01/Fotos-de-perros-jugando-7-1024x640.jpg", ult: "02/11/23", des: "Perdido en Barrio Obrero", contacto: "0974163485", pais: "Paraguay", ciudad: "Asunción"}
  ]
}
