
import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasService {

  private peliculas:Pelicula[] = [
    {
      nombre: "Star Wars: Episode I - The Phantom Menace",
      bio: "Obi-Wan Kenobi es un joven aprendiz caballero Jedi bajo la tutela de Qui-Gon Jinn; Anakin Skywalker, quien después será padre de Luke Skywalker y se convertirá en Darth Vader, solamente es un niño de 9 años. Cuando la Federación de Comercio corta todas las rutas al planeta Naboo, Qui-Gon y Obi-Wan son asignados para solucionar el problema.",
      img: "assets/img/SW-tfm.jpg",
      aparicion: "1999-05-19",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode III - Revenge of the Sith",
      bio: "Seducido por el lado oscuro, Anakin Skywalker se rebela contra su mentor, Obi-Wan Kenobi, y se convierte en Darth Vader.",
      img: "assets/img/SW-rots.jpg",
      aparicion: "2005-05-17",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode IV - A New Hope",
      bio: "La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2, quien acompañado de su inseparable C-3PO logra escapar. Tras aterrizar en el planeta Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la princesa.",
      img: "assets/img/SW-anh.jpg",
      aparicion: "1997-05-25",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode VII - The Force Awakens",
      bio: "Treinta años después de haber derrotado al Imperio, una nueva amenaza se cierne sobre la República. El terrible y enigmático guerrero Kylo Ren ha reunido un ejército de leales al Imperio, que se hace llamar la Primera Orden y ataca a la Alianza. La única esperanza para la galaxia es que una recogedora de chatarra, un stromtrooper fugado y un androide llamado BB-8 logren encontrar a tiempo al legendario jedi Luke Skywalker.",
      img: "assets/img/SW-tfa.jpg",
      aparicion: "2015-12-18",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode II - Attack of the Clones",
      bio: "En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. La reina Amidala regresa al Senado para conseguir un ejército que ayude a los caballeros jedi.",
      img: "assets/img/SW-aotc.jpg",
      aparicion: "2002-05-16",
      casa: "Lucasfilm"
    },
    {
      nombre: "Solo: A Star Wars Story",
      bio: "El joven Han Solo y su banda de contrabandistas pretenden robar coaxium del planeta Kessel. Dado que necesita una nave muy rápida para la misión, Solo contacta con Lando Calrissian, el propietario del Halcón Milenario.",
      img: "assets/img/SW-solo.jpg",
      aparicion: "2018-05-25",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode V - The Empire Strikes Back",
      bio: "Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y los persiguen a través de la galaxia. Mientras, el grupo de rebeldes de Skywalker se esconde en un planeta helado.",
      img: "assets/img/SW-tesb.jpg",
      aparicion: "1980-05-17",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode VIII - The Last Jedi",
      bio: "La Primera Orden ha acorralado a los últimos miembros de la resistencia. Su última esperanza es que Finn se introduzca en la nave de Snoke y desactive el radar que les permite localizarlos. Mientras él trata, en compañía de una soldado de la Resistencia, de cumplir esta misión imposible, Rey se encuentra lejos, intentando convencer a Luke Skywalker de que la entrene y la convierta en la última jedi.",
      img: "assets/img/SW-tlj.jpg",
      aparicion: "2017-12-15",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: The Clone Wars",
      bio: "El Ejército de la República, encabezada por los Jedi, lucha contra ejércitos de androides a lo largo y ancho de la galaxia.",
      img: "assets/img/SW-tcw.jpg",
      aparicion: "2008-08-10",
      casa: "Lucasfilm"
    },
    {
      nombre: "Rogue One: A Star Wars Story",
      bio: "El Imperio va a construir una estación espacial capaz de destruir planetas, conocida como la Estrella de la Muerte. Los rebeldes, conocedores de esto, se embarcan en una misión extraordinaria: robar los planos y sabotear la estación.",
      img: "assets/img/SW-rogue.jpg",
      aparicion: "2016-12-15",
      casa: "Lucasfilm"
    },
    {
      nombre: "Star Wars: Episode VI - Return of the Jedi",
      bio: "Luke Skywalker, ahora un experimentado caballero Jedi, intenta descubrir la identidad de Darth Vader.",
      img: "assets/img/SW-rttj.jpg",
      aparicion: "1983-05-25",
      casa: "Lucasfilm"
    },  
    {
      nombre: "Star Wars: Episode IX - The Rise of Skywalker",
      bio: "La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.",
      img: "assets/img/SW-tros.jpg",
      aparicion: "2019-12-16",
      casa: "Lucasfilm"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }

  getPeliculas():Pelicula[]{
    return this.peliculas;
  }

  getPelicula( idx: string ){
    return this.peliculas[idx];
  }

  buscarPelicula( termino:string ):Pelicula[]{

    let peliculasArr:Pelicula[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.peliculas.length; i ++ ){
      let pelicula = this.peliculas[i];
      let nombre = pelicula.nombre.toLowerCase();
      if( nombre.indexOf( termino ) >= 0  ){
        pelicula.idx = i;
        peliculasArr.push( pelicula )
      }
    }
    return peliculasArr;
  }
}

export interface Pelicula{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
