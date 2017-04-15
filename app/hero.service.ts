import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Campeones } from './mock-campeones';


@Injectable()

export class HeroService{
	getCampeon():Promise<Hero[]>{

		return Promise.resolve(Campeones);
	} //stub
	
	getCampeonSlowly(): Promise<Hero[]>{
		return new Promise(resolve =>{
			setTimeout(() => resolve(this.getCampeon()), 2000) 

		});
	}
	getHero(id: number):Promise<Hero>{
		return this.getCampeon().then(heroes => heroes.find(hero =>hero.id === id));
	}
}
