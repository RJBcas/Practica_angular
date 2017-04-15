import { Component } from '@angular/core';


@Component({
	 moduleId: module.id,
	selector : 'my-app',
	template: '	<h1>{{title}}</h1><nav><a routerLink="/heroes" routerLinkActive="active">Campeones</a><a routerLink="/dashboard" routerLinkActive="active">Tablero</a></nav><router-outlet></router-outlet>',
	styleUrls :['./app.component.css']
})

export class AppComponent{
	title = 'Bienvenido a League of Legends';
}