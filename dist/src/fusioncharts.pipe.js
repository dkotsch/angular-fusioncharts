import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms any input value
 */
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FusionChartsPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    FusionChartsPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsPipe, name: "fusionchartsPipe" });
    FusionChartsPipe.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsPipe });
    return FusionChartsPipe;
}());
export { FusionChartsPipe };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FusionChartsPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'fusionchartsPipe'
                }]
        }, {
            type: Injectable
        }] });
//# sourceMappingURL=fusioncharts.pipe.js.map