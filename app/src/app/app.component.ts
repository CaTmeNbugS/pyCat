import { trigger, state, style, transition, animate, query } from '@angular/animations';
import {Component, Input, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {

  @Input() alert_text: string;

  side_bar_state = 'n_spr';
  btn_text_state = 'hidden';

  ngOnInit(): void{
    if(localStorage.getItem('theme') == undefined && localStorage.getItem('color') == undefined){
      localStorage.setItem('theme', 'white');
      localStorage.setItem('color', '#5863F8');
    }
    
    const r_btn = document.querySelectorAll('.r_btn');
    rippleEffect(r_btn);
    const root = document.documentElement.style;


    const color = localStorage.getItem('color');
    root.setProperty('--button_background', color);
    root.setProperty('--search_shadow', color + 36);
    
    const theme = localStorage.getItem('theme');
    if(theme == 'white'){
      root.setProperty('--background', '#f6f6f6' );
      root.setProperty('--content_background', 'white' );
      root.setProperty('--content_border_color', 'white' );
      root.setProperty('--text_color', 'black' );
      root.setProperty('--input_background', '#ebebeb'); 
      root.setProperty('--button_color2', 'black');
    }
    if(theme == 'dark'){
      root.setProperty('--background', '#15151a' );
      root.setProperty('--content_background', '#212125' );
      root.setProperty('--content_border_color', '#212125' );
      root.setProperty('--text_color', '#eeeeee' );
      root.setProperty('--input_background', '#404048'); 
      root.setProperty('--button_background2', '#404048');
      root.setProperty('--button_color2', '#c3c3c3'); 
    }
    if(theme == 'dimmed'){
      root.setProperty('--background', '#22272e' );
      root.setProperty('--content_background', '#2d333b' );
      root.setProperty('--content_border_color', '#2d333b' );
      root.setProperty('--text_color', '#eeeeee' );
      root.setProperty('--input_background', '#21262d'); 
      root.setProperty('--button_background2', '#21262d');
      root.setProperty('--button_color2', '#c3c3c3'); 
    }
  };

  spreadMenu(){
    this.side_bar_state = this.side_bar_state === 'n_spr' ? 'spr' : 'n_spr'
    this.btn_text_state = this.btn_text_state === 'hidden' ? 'visible' : 'hidden'
  };
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  };
}
