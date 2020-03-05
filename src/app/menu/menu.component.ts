import { Component, OnInit } from '@angular/core';
import { Menu, Section, SubSection, Item } from '../menuObj';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public objectKeys = Object.keys;
  private menu = new Menu(new Section(
    {
      "Pizza": new SubSection(
        {
          "Pizza Margarita": new Item([
            "Tomato sauce",
            "cheese",
            ], 10),

            "Pizza tuna": new Item([
              "Tomato sauce",
              "cheese",
              "tuna"
            ], 12),
            "Pizza Frutti di Mare": new Item([
              "Tomato sauce",
              "Sea food"
            ], 20),
            "Pizza Cardinale": new Item([
              "Tomato sauce",
               "mozzarella",
               "ham",
               "and oregano"
            ],17),
            "Pizza Mediterranea": new Item([
              "Tomato sauce",
              "buffalo mozzarella",
              "cherry tomatoes and pepper"
            ], 12)
        }
      ),
      "drinks specials": new SubSection(
        {
          "Fresh Mango": new Item([], 8),
          "Orange and Lemon": new Item([], 5),
        }
        ),
      }
    ));
  
  public pizza: object;
  
  constructor() { }

  ngOnInit() {
    this.pizza = this.menu.getPizza();
  }

}
