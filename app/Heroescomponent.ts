import { Component, OnInit } from '@angular/core';
/*importo Hero de hero.ts*/
import { Hero } from './hero';
/*importo Heroservice de hero.servicie.ts*/
import { HeroService } from './hero.service';
import  { Router } from '@angular/router';


/* decoradore*/
@Component({
  moduleId : module.id,
  selector: 'my-heroes',

  /* interpolacion las {{}} es para que la aplicacion lea las propiedades de titulo y de ampeon */
  /*El template contiene la estructura del html es una caja de contenido de html que angular interpreta como tal */
  /*si queremos editar el nombre mediante un placeholder de manera dinamica tendremos que importar FromsModule en module para que de esta forma sea bidireccionales las entradas de formulario */
  /**/
  templateUrl: './heroes.component.html',
  styleUrls : ['./heroes.component.css']
 
})



export class HeroesComponent implements OnInit{ 


/*igualo la var Campeon a la clase Hero para volverla un objeto con 2 datos id y name */
/* igualo la variable con la constante para imprimirlo*/
Campeon : Hero[];
/* se crea la propiedad de selectedcampeon para seleccionar el campeon y lo instanciamos con la clase Hero para que posea la misma estructura*/
selectedCampeon : Hero; 

constructor(
  private router: Router, 
  private heroService: HeroService) {}
/* funcion de seleccionar el campeon de la lista para mostrar los detalles pasando los datos a la variable selectedCampeon  que tiene la estructura de hero de esta forma se almacena los datos que se estan seleccionando*/

getCampeon(): void{
	this.heroService.getCampeon().then( Campeon => this.Campeon= Campeon);
}

ngOnInit(): void {
	this.getCampeon();
}
onselect(hero: Hero): void{
	this.selectedCampeon = hero;
}
gotoDetail():void{
  this.router.navigate(['/detail', this.selectedCampeon.id]);
}
}


/* creo una constante y le asigno la estructura de hero para asi guardar los valores en forma de matriz y reasignar los datos a camepon*/



