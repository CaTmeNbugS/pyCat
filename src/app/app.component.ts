import { trigger, state, style, transition, animate, query } from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider} from './route-animations';


@Component({
  selector: 'web-application',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

    ])
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  //   const buttons = document.querySelectorAll<HTMLElement>('.ripplrEffect');
  //   buttons.forEach((btn) => {
  //     btn.addEventListener('mousedown', function (event){
  //         const x = event.clientX - btn.offsetLeft;
  //         const y = event.clientY - btn.offsetTop;
  //         const ripple = document.createElement('span');
  //         ripple.style.left = x + `px`;
  //         ripple.style.top = y + `px`;
  //         ripple.classList.add('ripple');
  //         this.appendChild(ripple);


  //         setTimeout(() => {
  //            ripple.classList.add('remove');
  //        }, 1000);
  //        setTimeout(() => {
  //         ripple.remove();
  //     }, 1500);

  //     });
  //   });
  }
  constructor() {
  }
  side_bar_state = 'n_spr';
  btn_text_state = 'hidden';
  spreadMenu(){
    this.side_bar_state = this.side_bar_state === 'n_spr' ? 'spr' : 'n_spr'
    this.btn_text_state = this.btn_text_state === 'hidden' ? 'visible' : 'hidden'
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
}
