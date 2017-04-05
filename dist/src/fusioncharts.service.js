var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var FusionChartsStatic = (function () {
    function FusionChartsStatic() {
    }
    return FusionChartsStatic;
}());
FusionChartsStatic = __decorate([
    Injectable()
], FusionChartsStatic);
export { FusionChartsStatic };
var FusionChartsService = (function () {
    function FusionChartsService(FusionChartsStatic) {
        this._fusionchartsStatice = FusionChartsStatic.core;
        FusionChartsStatic.modules && FusionChartsStatic.modules.forEach(function (FusionChartsModules) {
            FusionChartsModules(FusionChartsStatic.core);
        });
    }
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    return FusionChartsService;
}());
FusionChartsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [FusionChartsStatic])
], FusionChartsService);
export { FusionChartsService };
