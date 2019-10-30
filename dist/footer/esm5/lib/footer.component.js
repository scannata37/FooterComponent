/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FooterService } from './footer.service';
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
        { type: Component, args: [{
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
export { FooterComponent };
if (false) {
    /** @type {?} */
    FooterComponent.prototype.footer;
    /**
     * @type {?}
     * @private
     */
    FooterComponent.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FnaWxlLXBhbGFjZS1mb290ZXIvIiwic291cmNlcyI6WyJsaWIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFTQyx5QkFBb0IsVUFBeUI7UUFBekIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtJQUFJLENBQUM7Ozs7SUFFbEQsa0NBQVE7OztJQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQUk7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWhCRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGdtQkFBc0M7O2lCQUV2Qzs7OztnQkFQUSxhQUFhOztJQXFCdEIsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVpZLGVBQWU7OztJQUMxQixpQ0FBZTs7Ozs7SUFFSixxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9vdGVyU2VydmljZSB9IGZyb20gJy4vZm9vdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmb290ZXI6IEZvb3RlcjtcblxuIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogRm9vdGVyU2VydmljZSkgeyB9XG5cbiBuZ09uSW5pdCgpIHtcbiAgIHRoaXMuYXBpU2VydmljZS5nZXRGb290ZXIoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgIHRoaXMuZm9vdGVyID0gZGF0YTtcbiAgIH0pO1xuIH1cblxufVxuIl19