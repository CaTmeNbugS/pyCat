import { trigger, state, style, transition, animate, query } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from './route-animations';
import { rippleEffect } from './scripts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider,
    trigger('side_bar', [
      state('n_spr', style({width: '80px'})),
      state('spr', style({width: '280px'})),
      transition('n_spr => spr', animate('.2s ease-out')
      ),
      transition('spr => n_spr', animate('.2s ease-out')),
    ]),
    trigger('nv_text',[
      state('hidden', style({opacity: 0, visibility: 'hidden'})),
      state('visible', style({opacity: 1, visibility: 'visible' })),
      transition('hidden => visible', animate('.1s')),
      transition('visible => hidden', animate('.1s')),
    ]),
    trigger('alert',[
      transition('void => *', [
        style({opacity:0}),
        animate('.2s ease-out')
      ]),
      transition('* => void', [
        style({opacity:1}),
        animate('.1s ease-in', style({opacity:0}))
      ])
    ]),
  ]
})
export class AppComponent implements OnInit{
  ngOnInit(): void{
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn)
}
side_bar_state = 'n_spr';
btn_text_state = 'hidden';
spreadMenu(){
  this.side_bar_state = this.side_bar_state === 'n_spr' ? 'spr' : 'n_spr'
  this.btn_text_state = this.btn_text_state === 'hidden' ? 'visible' : 'hidden'
}

prepareRoute(outlet: RouterOutlet){
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}
}
