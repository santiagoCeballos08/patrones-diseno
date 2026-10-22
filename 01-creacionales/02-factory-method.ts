/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburguer {
	prepare(): void;
}

class ChikenHamburguer implements Hamburguer {
	prepare(): void {
		console.log("preparando una hamburguesa de %cpollo", COLORS.yellow);
	}
}
class BeffHamburger implements Hamburguer {
	prepare(): void {
		console.log("preparando una hamburguesa de %cRes", COLORS.brown);
	}
}
class BeanHamburger implements Hamburguer {
	prepare(): void {
		console.log("preparando una hamburguesa de %cLentejas", COLORS.green);
	}
}

abstract class Restaurant {
	abstract createHamburger(): Hamburguer;

	orderHamburger(): void {
		const hamburger = this.createHamburger();
		hamburger.prepare();
	}
}

/* ahora ponemos la clases de los restaurantes */

class ChikenRestaurant extends Restaurant {

	override createHamburger(): Hamburguer {
		return new ChikenHamburguer();
	}
}
class BeffRestaurant extends Restaurant {

	override createHamburger(): Hamburguer {
		return new BeffHamburger();
	}
}

class BeanRestaurant extends Restaurant { 

	override createHamburger(): Hamburguer {
		return new BeanHamburger();
	}
}

function main(){
	let restaurant : Restaurant;

	const burgerType = prompt('Que tipo de hamburguesa quieres ? (Pollo / Res / Lentejas)');

	switch(burgerType){
		case 'Pollo' :
			restaurant = new ChikenRestaurant();
		break
		case 'Res' :
			restaurant = new BeffRestaurant();
		break
		case 'Lentejas' :
			restaurant = new BeanRestaurant();
		break
		default:
			throw new Error('Opcion no valida');

	}

	restaurant.orderHamburger();
}
main()