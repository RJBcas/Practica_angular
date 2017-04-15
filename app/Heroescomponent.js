"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*importo Heroservice de hero.servicie.ts*/
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
/* decoradore*/
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    /* funcion de seleccionar el campeon de la lista para mostrar los detalles pasando los datos a la variable selectedCampeon  que tiene la estructura de hero de esta forma se almacena los datos que se estan seleccionando*/
    HeroesComponent.prototype.getCampeon = function () {
        var _this = this;
        this.heroService.getCampeon().then(function (Campeon) { return _this.Campeon = Campeon; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getCampeon();
    };
    HeroesComponent.prototype.onselect = function (hero) {
        this.selectedCampeon = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCampeon.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            /* interpolacion las {{}} es para que la aplicacion lea las propiedades de titulo y de ampeon */
            /*El template contiene la estructura del html es una caja de contenido de html que angular interpreta como tal */
            /*si queremos editar el nombre mediante un placeholder de manera dinamica tendremos que importar FromsModule en module para que de esta forma sea bidireccionales las entradas de formulario */
            /**/
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
/* creo una constante y le asigno la estructura de hero para asi guardar los valores en forma de matriz y reasignar los datos a camepon*/
//# sourceMappingURL=Heroescomponent.js.map