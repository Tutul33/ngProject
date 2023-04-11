import { Component, Input, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  @Input() counter:any;
   
  constructor(){

  }
  ngOnInit():void{
this.loadData();
  }
  loadData(){    
    const prices=from([{name:'tutul 1',price:10}, {name:'tutul 2',price:20}, {name:'tutul 3',price:30}]);
  const productsWithPrice=prices.pipe(
    map(
      (price, index) => ({
                          name: price.name+":- "+`product #${index+1}`,
                          price: price.price*(index+1)
                       })
       )
   );
   console.log(productsWithPrice)
  productsWithPrice.subscribe(result => console.log(result));
/* output:
 { name: `product #1`, price: 10 },
 { name: `product #2`, price: 20 },
 { name: `product #3`, price: 30 }
*/
  }
}
