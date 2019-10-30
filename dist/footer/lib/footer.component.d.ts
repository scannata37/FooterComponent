import { OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Footer } from './footer';
export declare class FooterComponent implements OnInit {
    private apiService;
    footer: Footer;
    constructor(apiService: FooterService);
    ngOnInit(): void;
}
