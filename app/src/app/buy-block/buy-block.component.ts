import { Component, OnInit, Input } from '@angular/core';
import {buyCatsInterface} from '../home/home.component'

@Component({
  selector: 'app-buy-block',
  templateUrl: './buy-block.component.html',
  styleUrls: ['./buy-block.component.css']
})
export class BuyBlockComponent implements OnInit {

  @Input() buyCatBlock: buyCatsInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
