import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  b1color='#ffffff';
  b2color='#ffffff';
  trophy(){
    this.b1color='#c86dec';
    this.b2color='#ffffff';
  }
  prof(){
    this.b2color='#c86dec';
    this.b1color='#ffffff';
  }
  

}
