import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild('nav', { static: true })
  // private _nav: ElementRef;

  // private get light(): HTMLElement {
  //   return this._nav.nativeElement;
  // }

  constructor() { }

  ngOnInit() {
    this.activate();
  }

  public activate() {
    // return gsap.fromTo(this.light,
    //   { opacity: 0, scale: 1.2 },
    //   { ease: 'elastic.out', opacity: 1, duration: 2, scale: 1 });
  }

}
