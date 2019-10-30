import { HttpClient } from '@angular/common/http';
import { Footer } from './footer';
export declare class FooterService {
    private httpClient;
    getFooter(): import("rxjs").Observable<Footer>;
    constructor(httpClient: HttpClient);
}
