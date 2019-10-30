/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var FooterService = /** @class */ (function () {
    function FooterService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    FooterService.prototype.getFooter = /**
     * @return {?}
     */
    function () {
        return this.httpClient.get('/assets/config/footer.json');
    };
    FooterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FooterService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ FooterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FooterService_Factory() { return new FooterService(i0.ɵɵinject(i1.HttpClient)); }, token: FooterService, providedIn: "root" });
    return FooterService;
}());
export { FooterService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FooterService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hZ2lsZS1wYWxhY2UtZm9vdGVyLyIsInNvdXJjZXMiOlsibGliL2Zvb3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRWxEO0lBT0UsdUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7O0lBSHhDLGlDQUFTOzs7SUFBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFTLDRCQUE0QixDQUFDLENBQUE7SUFDbEUsQ0FBQzs7Z0JBTkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVOzs7d0JBRG5CO0NBV0MsQUFSRCxJQVFDO1NBTFksYUFBYTs7Ozs7O0lBSVosbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vZm9vdGVyJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlclNlcnZpY2Uge1xuICBwdWJsaWMgZ2V0Rm9vdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PEZvb3Rlcj4oJy9hc3NldHMvY29uZmlnL2Zvb3Rlci5qc29uJylcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHsgfVxufVxuIl19