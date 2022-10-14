import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // logo : string = "https://www.osteriadegliamici.com/images/ristorante/RISTORANTE350-min.png";
  logo : string = "https://freepngclipart.com/thumb/chef/78186-thumb-signal-cooking-chef-vector-graphics-thumb.png";
  constructor() { }

  ngOnInit(): void {
  }

}
