import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Footer } from './footer';

@Component({
  selector: 'app-material-footer',
  templateUrl: './material-footer.component.html',
  styleUrls: ['./material-footer.component.css']
})
export class MaterialFooterComponent implements OnInit {
   footer: Footer;

  constructor(private apiService: FooterService) { }

  ngOnInit() {
    this.apiService.getFooter().subscribe((data) => {
      console.log(data);
      this.footer = data;
    });
  }

}
