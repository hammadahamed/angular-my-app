import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Output() onRecipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  @Input() recipe: Recipe;

  selectRecipe() {
    this.onRecipeSelected.emit();

  }
}