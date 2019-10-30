/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FooterService } from './footer.service';
export class FooterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnaWxlLXBhbGFjZS1mb290ZXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFTakQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFHM0IsWUFBb0IsVUFBeUI7UUFBekIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtJQUFJLENBQUM7Ozs7SUFFbEQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhCRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLGdtQkFBc0M7O2FBRXZDOzs7O1lBUFEsYUFBYTs7OztJQVVwQixpQ0FBZTs7Ozs7SUFFSixxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9vdGVyU2VydmljZSB9IGZyb20gJy4vZm9vdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb290ZXI6IEZvb3RlcjtcblxuIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogRm9vdGVyU2VydmljZSkgeyB9XG5cbiBuZ09uSW5pdCgpIHtcbiAgIHRoaXMuYXBpU2VydmljZS5nZXRGb290ZXIoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgIHRoaXMuZm9vdGVyID0gZGF0YTtcbiAgIH0pO1xuIH1cblxufVxuIl19