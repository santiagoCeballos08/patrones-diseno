/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
	public cpu: string = 'cpu - no definido';
	public ram: string = 'ram - no definido';
	public storage: string = 'storage - no definido';
	public gpu?: string;

	displayConfiguration() {
		console.log(`configuracion de la computadora
			CPU: ${this.cpu}
			RAM: ${this.ram}
			ALMACENAMIENTO: ${this.storage}
			`);
	}
}

class ComputaerBuilder {}
