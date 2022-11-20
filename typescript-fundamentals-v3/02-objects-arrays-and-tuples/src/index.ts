/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} ${car.year}`;

  if (car.chargeVoltage) {
    str += ` ${car.chargeVoltage}v`;
  }

  console.log(str);
}

printCar({
  make: "Toyota",
  model: "Corolla",
  year: 2022,
});

/**
 * Excess Property Checking - three ways to solve it:
 * 1. Remove the 'color' property from the object
 * 2. Add 'color: string' to the function argument type
 * 3. Create a variable to hold the value and then pass the variable to the function
 */
printCar({
  make: "Tesla",
  model: "Model S",
  year: 2022,
  chargeVoltage: 220,
  color: "RED",
});

// Example using option 3
const car = {
  make: "Tesla",
  model: "Model S",
  year: 2022,
  chargeVoltage: 220,
  color: "RED",
};

printCar(car);

// Index signatures
const phones: {
  [k: string]: {
    country: string;
    area: string;
    number: string;
  };
} = {};

phones.country;

// Array Types
const fileExtensions: string[] = ["js", "ts"];

const cars: { make: string; model: string; year: number }[] = [
  { make: "Mercedes-Benz", model: "A Class", year: 2020 },
  { make: "Audi", model: "Q8", year: 2017 },
];

// Tuples
let myCar: [number, string, string] = [2022, "Toyota", "Corolla"];

const [make] = myCar;
