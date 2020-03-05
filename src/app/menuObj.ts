export class Item {
    private description: Array<string>;
    private price: number;

    constructor(description: Array<string>, price: number) {
        this.description = [...description];
        this.price = price;
    }

    getItem() {
        return {
            description: this.description.join(", "),
            price: this.price
        }
    }

}

export class SubSection {
    private items: { [name: string]: Item };

    constructor(items: { [name: string]: Item }) {
        this.items = items;
    }

    
    getAllItems() {
        let newObj = {};
        for(const key of Object.keys(this.items)) {
            newObj[key] = this.items[key].getItem();
        }
        return newObj;
    }

    getItem(itemName: string) {
        return this.items[itemName] ? this.items[itemName].getItem() : "No item found";
    }

    
}

export class Section {
    private subSections: { [name: string]: SubSection };

    constructor(sections: { [name: string]: SubSection }) {
        this.subSections = sections;
    }

    
    
    getAllSubSectionsAndItems() {
        let newObj = {};
        for(const key of Object.keys(this.subSections)) {
            newObj[key] = this.subSections[key].getAllItems();
        }
        return newObj;
    }

  }

  export class Menu {
    private pizza: Section;
    // private something: Section;

    constructor(pizza: Section) {
        this.pizza = pizza;
        // this.something = something;
    }

    // GET

    
    getPizza() {
        return this.pizza.getAllSubSectionsAndItems();
    }
    
    // getSomething(){
    //     return this.something.getAllSubSectionsAndItems();
    // }


    // SET

    setPizza(pizza: Section) {
        this.pizza = pizza;
    }

    // setSomething(something: Section){
    //     this.something = something;
    // }
  
}