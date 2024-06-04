import { Movie } from "../domain/Movie";
import { Cart } from "../service/cart";

test('Check making class Movie', () => {
	const movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	const result = {
		id: 1, 
		name: 'Черепашки ниндзя', 
		subtitle: 'Teenage Mutant Ninja Turtles', 
		year: 2012, 
		country: 'США', 
		slogan: '-', 
		genre: 'фантастика, мультфильм, десткий', 
		time: 22, 
		price: 1000
	}
	expect(movie).toEqual(result)
})

test('Check making class Cart', () => {
	const cart = new Cart();
	const result = {
		"discount": 0.85,
		"items": [],
	};
	expect(cart).toEqual(result);
})

test('Check method add', () => {
	const movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	const cart = new Cart();
	cart.add(movie);
	const result = {
		"discount": 0.85,
		"items": [
			{
				"country": "США",
				"genre": "фантастика, мультфильм, десткий",
				"id": 1,
				"name": "Черепашки ниндзя",
				"price": 1000,
				"slogan": "-",
				"subtitle": "Teenage Mutant Ninja Turtles",
				"time": 22,
				"year": 2012,
			}
		],
	}
	expect(cart).toEqual(result);
})

test('Check method getAll', () =>{
	const movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	const cart = new Cart();
	cart.add(movie);
	const result = [
			{
				"country": "США",
				"genre": "фантастика, мультфильм, десткий",
				"id": 1,
				"name": "Черепашки ниндзя",
				"price": 1000,
				"slogan": "-",
				"subtitle": "Teenage Mutant Ninja Turtles",
				"time": 22,
				"year": 2012,
			}
		]
	expect(cart.getAll()).toEqual(result);
})

test('Check method summCart', () => {
	const movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	const movie2 = new Movie(2, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 2000);
	const cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.summCart()).toBe(3000)
})

test('Check method summCartDiscount', () => {
	const movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	const movie2 = new Movie(2, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 2000);
	const cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.summCartDiscount()).toBe(2550)
})

test('Check method deleteCart', () => {
	const movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);	
	const cart = new Cart();
	cart.add(movie1);
	const result = {
		"discount": 0.85,
		"items": [],
	};
	cart.deleteCart(1);
	expect(cart).toEqual(result);
})