
import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './hero';

import { HeroService} from './hero.service';





/* en el selector colocamos el nombre de nuestra template y en el templete la estructura que queremos insertar 
en este caso estamos condicionando con ngIf = hero donde ngIf obtiene su valor del onselect del component.ts y se la pasa para comparar ese con cada posicion del array  hero cuando lo consigue extrae nombre  y el ide en la perte del input con la directiva ngModel =hero.name hacemos que sea una inserccion de datos dinamica de manera que si modificamos el nombre en el input se modifica en el h2 en tiempo real*/
@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls : ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
	hero : Hero;
	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location

		){}

	ngOnInit(): void {
		this.route.params.switchMap((params: Params ) => this.heroService.getHero(+params['id'])).subscribe(Hero => this.hero = Hero);
	}
	goBack() :void {
		this.location.back();
	}
}
