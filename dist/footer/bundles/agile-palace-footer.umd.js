(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/material/toolbar'), require('@angular/material/button')) :
    typeof define === 'function' && define.amd ? define('agile-palace-footer', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', '@angular/material/toolbar', '@angular/material/button'], factory) :
    (global = global || self, factory(global['agile-palace-footer'] = {}, global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.ng.material.toolbar, global.ng.material.button));
}(this, (function (exports, core, http, platformBrowser, toolbar, button) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FooterService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ FooterService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FooterService_Factory() { return new FooterService(core.ɵɵinject(http.HttpClient)); }, token: FooterService, providedIn: "root" });
        return FooterService;
    }());
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
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(apiService) {
            this.apiService = apiService;
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.apiService.getFooter().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                console.log(data);
                _this.footer = data;
            }));
        };
        FooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-footer',
                        template: "<div>\r\n<mat-toolbar color='primary'>\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.title }}</h3>\r\n      <span class='spacer'></span>\r\n\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.year }}</h3>\r\n    <span class='spacer'></span>\r\n\r\n    <span class='spacer'></span>\r\n      <h3>{{ footer.logo }}</h3>\r\n    <span class='spacer'></span>\r\n    \r\n    <span class='spacer'></span>\r\n    <h3 *ngFor=\"let f of footer.links\">\r\n      <a href=\"{{ f.url }}\">{{f.text}}</a>\r\n    </h3> \r\n    <span class='spacer'></span>\r\n    \r\n</mat-toolbar>\r\n</div>",
                        styles: [".spacer{flex:1 1 auto}.mat-toolbar{position:fixed;left:0;bottom:0;width:100%;color:#fff;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return [
            { type: FooterService }
        ]; };
        return FooterComponent;
    }());
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
    var FooterModule = /** @class */ (function () {
        function FooterModule() {
        }
        FooterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FooterComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            http.HttpClientModule,
                            toolbar.MatToolbarModule,
                            button.MatButtonModule
                        ],
                        exports: [FooterComponent]
                    },] }
        ];
        return FooterModule;
    }());

    exports.FooterComponent = FooterComponent;
    exports.FooterModule = FooterModule;
    exports.FooterService = FooterService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=agile-palace-footer.umd.js.map
