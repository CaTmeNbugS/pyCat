import { trigger, transition, style, query, group, animate, } from '@angular/animations';

export const slider =
    trigger('routeAnimations', [
        transition('* => 1page', slideTo('left')),
        transition('1page => *', slideTo('right')),
        transition('* => 2page', slideTo('left')),
        transition('2page => *', slideTo('right')),
        transition('* => 3page', slideTo('left')),
        transition('3page => *', slideTo('right')),
        transition('* => 4page', slideTo('left')),
        transition('4page => *', slideTo('right')),
        transition('* => 5page', slideTo('left')),
        transition('5page => *', slideTo('right')),
        transition('* => 6page', slideTo('left')),
        transition('6page => *', slideTo('right'))
    ]);

function slideTo(direction){
    const optional = {optional: true};
    return[
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({[direction]: '-100%'})
        ]),
        group([
            query(':leave', [
                animate('750ms ease', style({[direction]: '100%'}))
            ], optional),
            query(':enter', [
                animate('750ms ease', style({[direction]: '0%'}))
            ])
        ]),
    ];
}