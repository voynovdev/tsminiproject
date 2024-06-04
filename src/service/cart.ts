import Buyable from "../domain/Buyable";

export class Cart {
	private items: Buyable[] = [];
	private discount: number = 0.85;

	add(item: Buyable): void {
		this.items.push(item);
	}

	getAll(): Buyable[] {
		return [...this.items];
	}

	summCart(): number {
		return this.items.reduce((acc, obj) => acc + obj.price, 0);
	}

	summCartDiscount(): number {
		return this.items.reduce((acc, obj) => acc + (obj.price * this.discount), 0);
	}

	deleteCart(id: number): void {
		const found: number = this.items.findIndex((obj) => obj.id === id);
		if(found !== -1) {
			this.items.splice(found, 1);
		}
	}
}