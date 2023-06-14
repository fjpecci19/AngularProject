import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lista = [
    {visibility: true, title: 'Perro encontrado', image: "https://c4.wallpaperflare.com/wallpaper/816/552/980/animales-labrados-perro-wallpaper-preview.jpg", ult: "01/04/23", des: "Perro encontrado en Barrio San Isidro", contacto: "0987123412", pais: "Paraguay", ciudad: "Asunción"},
    {visibility: true, title: 'Perro perdido', image: "https://www.astrolabio.com.mx/wp-content/uploads/2016/01/Fotos-de-perros-jugando-7-1024x640.jpg", ult: "02/11/23", des: "Perro perdido en Barrio Obrero", contacto: "0974163485", pais: "Paraguay", ciudad: "Asunción"},
    {visibility: true, title: 'Gato perdido', image: "https://c4.wallpaperflare.com/wallpaper/162/73/224/ciudad-gato-noche-varanda-wallpaper-preview.jpg", ult: "08/7/23", des: "Gato perdido en ciudad de Paraguarí", contacto: "0971234156", pais: "Paraguay", ciudad: "Paraguarí"},
    {visibility: true, title: 'Gato encontrado', image: "https://www.xtrafondos.com/wallpapers/resized/mirada-de-gato-6964.jpg?s=large", ult: "27/9/23", des: "Gato encontrado en puente de la amistad", contacto: "0979087125", pais: "Paraguay", ciudad: "Ciudad del este"},
    {visibility: true, title: 'Vaca perdida', image: "https://media.diariouno.com.ar/p/ad2f70ea3e934d36f452a2c3178da4cc/adjuntos/298/imagenes/009/108/0009108517/1200x0/smart/vaca-la-ruta-pixabayjpg.jpg", ult: "14/6/23", des: "Vaca perdida en la ruta", contacto: "0978765123", pais: "Paraguay", ciudad: "Capiatá"},
  ]
}
