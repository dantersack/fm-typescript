// Call signatures
interface TwoNumberCalculation {
  (x: number, y: number): number;
}

type TwoNumberCalc = (x: number, y: number) => number;

const add: TwoNumberCalculation = (x, y) => x + y;

const subtract: TwoNumberCalc = (x, y) => x - y;

// Construct signatures
interface DateConstructor {
  new (value: number): Date;
}

let MyDateConstructor: DateConstructor = Date;

const d = new MyDateConstructor();

// Classes - The following classes are equivalent
// Class with access modifiers
class Car {
  public make: string;
  public model: string;
  public year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

// Class with param properties
class Car2 {
  constructor(
    public make: string,
    public model: string,
    public number: number
  ) {}
}

const car1 = new Car("Toyota", "Corolla", 2019);
const car2 = new Car2("Mercedes-Benz", "GLC Coupe", 2022);
