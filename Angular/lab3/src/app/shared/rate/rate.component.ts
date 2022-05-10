import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input() rating:number=0;
  
  cwidth:number=0;
  constructor() { }

  ngOnChanges(changes:SimpleChanges): void{
    this.cwidth=this.rating*15;
  }

  ngOnInit(): void {
    this.cwidth =this.rating*15;
  }
 

}

