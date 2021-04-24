import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

export interface buyCatsInterface{
  name: string;
  description: string;
  city: string;
  breed: string;
  value: string;
  age: number;
  price: string;
  id: number;
  male?: boolean;
  female?: boolean;
  }

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.scss']
})
export class BuyPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  buyCatsArray: buyCatsInterface[] = [
    {name: 'Василий',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, quia voluptatibus consequatur quis nemo doloremque minus possimus, cumque temporibus aliquam eveniet. Iste delectus molestias, aliquid fugit rerum sapiente, veniam blanditiis laboriosam quos nulla iusto nam tempora sequi voluptas earum culpa facilis voluptatibus. Itaque, dicta delectus placeat quidem reiciendis numquam saepe ad non odit, assumenda, dolorem officia repudiandae!',
     city: 'Оренбург',breed: 'Сибирская',age: 2, price: '2500',value: 'руб', id:1, male:true, female:false},
    {name: 'Пуся',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ullam temporibus iusto nisi voluptas non repellendus a? Tempora sed nobis quo quisquam, consequuntur eveniet quasi exercitationem modi eius deserunt odit repellendus officiis nulla ducimus, voluptas corporis minus. Exercitationem et quasi assumenda provident iure, sequi, nisi ipsa rem consequuntur odit similique facilis neque ipsam vitae corporis? Totam aliquid, inventore repellendus praesentium rerum unde asperiores numquam molestias, eum voluptate ex adipisci ratione!',
     city: 'Москва',breed: 'Мейн-кун',age: 1, price: '5500',value: 'руб', id:2, male:false, female:true},
    {name: 'Мура',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel laboriosam aspernatur autem iste dolore similique veniam ratione facilis? Molestiae animi voluptate, repellendus, pariatur autem eligendi, illo delectus reiciendis natus ipsam qui. Temporibus iure minima repellendus, dolor sapiente consequuntur quasi debitis molestiae vitae nostrum a similique reprehenderit! Quidem excepturi similique sed officiis nihil quam.',
     city: 'Оренбург',breed: 'Шотландская вислоухая',age: 8, price: '1000',value: 'руб', id:3, male:false, female:true},
    {name: 'Артур',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, qui accusamus. Veniam, similique quod, aliquid labore enim aperiam in dolorem nulla nesciunt animi molestiae. Voluptates magnam esse suscipit amet dignissimos ipsam molestiae quam tenetur natus.',
     city: 'Orenburg',breed: 'Рэгдолл',age: 0.5, price: '1500',value: 'руб', id:4, male:true, female:false},
    {name: 'Персик',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos tenetur, a voluptatibus placeat id mollitia iusto nobis. Voluptatibus qui, consequuntur omnis maxime commodi fuga, dicta cumque error saepe id illum suscipit doloremque fugit sequi perferendis quos natus blanditiis, iste sint amet distinctio consequatur eveniet! Sequi fugit itaque ab vero eveniet eius, a animi illo, maiores accusantium, quam saepe. Quisquam, sed!',
     city: 'Оренбург',breed: 'Сингапурская',age: 5, price: '500',value: 'руб', id:5, male:true, female:false},
    {name: 'Дымчик',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium natus doloremque impedit earum architecto. Alias ab perspiciatis a assumenda nam?',
     city: 'Санкт-Петербург',breed: 'Бомбейская',age: 3, price: '2000',value: 'руб', id:6, male:true, female:false},
    {name: 'Бусинка',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corporis quasi ex nostrum aut totam porro nesciunt, iusto molestiae sit repellendus atque suscipit optio obcaecati consectetur! Tenetur molestiae ipsa doloribus! Veniam natus debitis ex vitae nostrum facere magni repellat id dignissimos officia temporibus vero ipsum labore, illo cumque voluptatibus tenetur voluptatem illum tempore doloremque. Rerum hic quia deleniti nisi magni dicta tempore nobis in? Inventore qui unde eum?',
     city: 'Самара',breed: 'Балинезийская',age: 1, price: '2500',value: 'руб', id:7, male:false, female:true},
  ]
}
