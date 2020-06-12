import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  h1color = '#a74ef0';
  h2color='#89858b';
  btnq(){
    
    this.h1color = "#89858b" ;
    this.h2color='#a74ef0';
    
    
}

}
