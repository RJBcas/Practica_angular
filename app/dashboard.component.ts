import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import  { HeroService } from './hero.service';


@Component ({
	moduleId :module.id,
	selector : 'my-dashboard',
	templateUrl : './dashboard.component.html',
	styleUrls : ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
	
	Campeones : Hero[]=[];

	constructor(private heroservice: HeroService){}

	ngOnInit(): void {
		this.heroservice.getCampeon().then(Campeones =>this.Campeones = Campeones.slice(1,5));
	}
}