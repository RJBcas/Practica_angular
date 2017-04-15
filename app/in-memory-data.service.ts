import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
	createDb(){
		let  Campeones =[
		{id :11 , name :'ashe'},
		{id :12 , name :'Corkis'},
		{id :13 , name :'caytlin'},
		{id :14 , name :'Draven'},
		{id :15 , name :'Kog mag'},
		{id :16 , name :'jinx'},
		{id :17 , name :'sirvir'},
		{id :18 , name :'ezreal'},
		{id :19 , name :'jhin'},
		{id :20 , name :'queen'},

		];
		return{Campeones};
	}
}