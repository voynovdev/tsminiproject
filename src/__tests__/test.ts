import { Movie } from "../domain/Movie";
import { Cart } from "../service/cart";

test('Check making class Movie', () => {
	let movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	let result = {
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
	let cart = new Cart();
	let result = {
		"discount": 0.85,
		"items": [],
	};
	expect(cart).toEqual(result);
})

test('Check method add', () => {
	let movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	let cart = new Cart();
	cart.add(movie);
	let result = {
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
	let movie = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	let cart = new Cart();
	cart.add(movie);
	let result = [
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
	let movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	let movie2 = new Movie(2, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 2000);
	let cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.summCart()).toBe(3000)
})

test('Check method summCartDiscount', () => {
	let movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);
	let movie2 = new Movie(2, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 2000);
	let cart = new Cart();
	cart.add(movie1);
	cart.add(movie2);
	expect(cart.summCartDiscount()).toBe(2550)
})

test('Check method deleteCart', () => {
	let movie1 = new Movie(1, 'Черепашки ниндзя', 'Teenage Mutant Ninja Turtles', 2012, 'США', '-', 'фантастика, мультфильм, десткий', 22, 1000);	
	let cart = new Cart();
	cart.add(movie1);
	let result = {
		"discount": 0.85,
		"items": [],
	};
	cart.deleteCart(1);
	expect(cart).toEqual(result);
})