import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    getFooter() {
        return this.httpClient.get('/assets/config/footer.json');
    }
}
FooterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FooterService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ FooterService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FooterService_Factory() { return new FooterService(ɵɵinject(HttpClient)); }, token: FooterService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FooterService.prototype.httpClient;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.apiService.getFooter().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            console.log(data);
            this.footer = data;
        }));
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-footer',
                template: "<div>\r\n<mat-toolbar color='primary'>\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.title }}</h3>\r\n      <span class='spacer'></span>\r\n\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.year }}</h3>\r\n    <span class='spacer'></span>\r\n\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.logo }}</h3>\r\n    <span class='spacer'></span>\r\n    \r\n    <span class='spacer'></span>\r\n    <h3 *ngFor=\"let f of footer.links\">\r\n      <a href=\"{{ f.url }}\">{{f.text}}</a>\r\n    </h3> \r\n    <span class='spacer'></span>\r\n    \r\n</mat-toolbar>\r\n</div>",
                styles: [".spacer{flex:1 1 auto}.mat-toolbar{position:fixed;left:0;bottom:0;width:100%;color:#fff;text-align:center}"]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [
    { type: FooterService }
];
if (false) {
    /** @type {?} */
    FooterComponent.prototype.footer;
    /**
     * @type {?}
     * @private
     */
    FooterComponent.prototype.apiService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterModule {
}
FooterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FooterComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    MatToolbarModule,
                    MatButtonModule
                ],
                exports: [FooterComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooterComponent, FooterModule, FooterService };
//# sourceMappingURL=agile-palace-footer.js.map
