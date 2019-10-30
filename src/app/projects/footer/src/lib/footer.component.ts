import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Footer } from './footer';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  footer: Footer;

 constructor(private apiService: FooterService) { }

 ngOnInit() {
   this.apiService.getFooter().subscribe((data) => {
     console.log(data);
     this.footer = data;
   });
 }

}
