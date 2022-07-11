import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic, FusionChartsService } from './src/fusioncharts.service';
import * as i0 from "@angular/core";
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe, FusionChartsStatic };
var FusionChartsModule = /** @class */ (function () {
    function FusionChartsModule() {
    }
    // Keep this for backward compatible
    FusionChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule,
            providers: [{
                    provide: FusionChartsStatic,
                    useValue: {
                        core: fcCore,
                        modules: fcModules
                    }
                }]
        };
    };
    FusionChartsModule.fcRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        FusionChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    };
    FusionChartsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    FusionChartsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsModule, declarations: [FusionChartsComponent,
            FusionChartsDirective,
            FusionChartsPipe], exports: [FusionChartsComponent,
            FusionChartsDirective,
            FusionChartsPipe] });
    FusionChartsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsModule, providers: [
            FusionChartsService,
            FusionChartsStatic
        ] });
    return FusionChartsModule;
}());
export { FusionChartsModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FusionChartsComponent,
                        FusionChartsDirective,
                        FusionChartsPipe
                    ],
                    exports: [
                        FusionChartsComponent,
                        FusionChartsDirective,
                        FusionChartsPipe
                    ],
                    providers: [
                        FusionChartsService,
                        FusionChartsStatic
                    ]
                }]
        }] });
//# sourceMappingURL=index.js.map