import { UserContactInfo } from "./types";

/**
 * Prints user contact information
 * @param info user's name and email
 */
function printContactInfo(info: UserContactInfo): void {
  console.log(info);
  console.log(info.name);
  console.log(info.email);
}

printContactInfo({ name: "dante", email: "dante@mail.com" });

const arania = {
  name: "julian",
  email: "julian@spider.com",
  position: "striker",
};

printContactInfo(arania); // still works

// ----------------------------------------------------------------

type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = [
  "success",
  { name: "Dante"; email: "dante@mail.com" }
];
type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;

/**
 * Returns a touple with either the user's name and email or an error object
 * @returns UserInfoOutcomeError type or a UserInfoOutcomeSuccess type
 */
function maybeGetUserInfo(): UserInfoOutcome {
  if (Math.random() > 0.5) {
    return ["success", { name: "Dante", email: "dante@mail.com" }];
  } else {
    return ["error", new Error("The coin landed on TAILS")];
  }
}

console.log(maybeGetUserInfo());

// Interfaces
interface UserInfo {
  name: string;
  email: string;
}

interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

interface Dog extends Mammal {
  getBreed(): string;
}

function careForDog(dog: Dog) {
  dog.isAlive();
  dog.getBreed();
}

interface AnimalLike {
  eat(food): void;
}

class Dog implements AnimalLike {
  bark(): string {
    return "woof!";
  }
  eat(food: string): string {
    return `eating ${food}`;
  }
}

// Recursion
type NestedNumbers = number | NestedNumbers[];

const value = 5;
const values: NestedNumbers = [2, 3, [5, 1], 7, 4, [9, 0]];

if (typeof values !== "number") {
  values.push(6);
  values.push([6]);
}

console.log({ value });
console.log({ values });
