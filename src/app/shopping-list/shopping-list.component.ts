import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient..model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ing : Ingredient){
    this.ingredients.push(ing);
  }

}
