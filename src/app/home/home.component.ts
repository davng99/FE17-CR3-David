import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Ristorante Il Gambero Rosso";
  description: string = "Delivering great food for more than 18 years!"

  constructor() { }

  ngOnInit(): void {
  }

}
