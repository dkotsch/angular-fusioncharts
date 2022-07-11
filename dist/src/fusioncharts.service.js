import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    FusionChartsStatic.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsStatic, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    FusionChartsStatic.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsStatic });
    return FusionChartsStatic;
}());
export { FusionChartsStatic };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsStatic, decorators: [{
            type: Injectable
        }] });
var FusionChartsService = /** @class */ (function () {
    function FusionChartsService(FCStatic) {
        var fcRoot;
        if (FusionChartsService.isFCRootSet()) {
            fcRoot = FusionChartsService.getFCRoot();
        }
        else {
            fcRoot = {
                core: FCStatic.core,
                modules: FCStatic.modules
            };
        }
        this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
    }
    FusionChartsService.setFCRoot = function (fcRoot) {
        FusionChartsService._fcRoot = fcRoot;
    };
    FusionChartsService.getFCRoot = function () {
        return FusionChartsService._fcRoot;
    };
    FusionChartsService.isFCRootSet = function () {
        return !!FusionChartsService._fcRoot;
    };
    FusionChartsService.prototype.resolveFusionCharts = function (core, modules) {
        if (core && core.id && core.id === 'FusionCharts') {
            this._fusionchartsStatice = core;
        }
        else {
            this._fusionchartsStatice = core();
        }
        if (modules) {
            modules.forEach(function (FusionChartsModules) {
                if ((FusionChartsModules.getName && FusionChartsModules.getType) ||
                    (FusionChartsModules.name && FusionChartsModules.type)) {
                    core.addDep(FusionChartsModules);
                }
                else {
                    FusionChartsModules(core);
                }
            });
        }
    };
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    FusionChartsService.prototype.getNextItemCount = function () {
        FusionChartsService.itemCount++;
        return FusionChartsService.itemCount;
    };
    FusionChartsService._fcRoot = null;
    FusionChartsService.itemCount = 0;
    FusionChartsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsService, deps: [{ token: FusionChartsStatic }], target: i0.ɵɵFactoryTarget.Injectable });
    FusionChartsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsService });
    return FusionChartsService;
}());
export { FusionChartsService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: FusionChartsStatic }]; } });
//# sourceMappingURL=fusioncharts.service.js.map