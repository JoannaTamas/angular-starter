import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jsh-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public name= 'Ioana';
  public count=0;
  constructor() { }

  ngOnInit() {
  }

  sayHello(){
    alert('Hello '+ this.name);
  }

  countClicks(){
    this.count++;
    alert('Number of clicks: '+ this.count);
  }

}
