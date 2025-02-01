import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calc(): number {
        return this._items.reduce((acc, num) => acc + num.price, 0);
    }
    calcWithSale(sale: number): number {
        let sum = this.calc();
        return sum - sum * sale/100;
    }
    remove(id: number): void {
        this._items = this._items.filter((i) => i.id != id)
    }
}