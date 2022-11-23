// Union
function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) return "heads";
  return "tails";
}

// Union + Tuples
function maybeGetUserInfo():
  | ["error", Error]
  | ["success", { name: "Dante"; email: "dante@mail.com" }] {
  if (flipCoin() === "heads") {
    return ["success", { name: "Dante", email: "dante@mail.com" }];
  } else {
    return ["error", new Error("The coin landed on TAILS")];
  }
}

const outcome = maybeGetUserInfo();

const [first, second] = outcome;

// Narrowing with type guards
if (second instanceof Error) {
  console.error(`${second.name}: ${second.message}`);
} else {
  console.log(`User: ${second.name} - Email: ${second.email}`);
}

// Discriminated unions
if (outcome[0] === "error") {
  console.error(`${outcome[1].name}: ${outcome[1].message}`);
} else {
  console.log(`User: ${outcome[1].name} - Email: ${outcome[1].email}`);
}

// Intersection
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7; // 1 week in ms

function makeWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date(start.valueOf() + ONE_WEEK);

  return { ...start, end };
}

const thisWeek = makeWeek();

console.log({
  startOfWeek: thisWeek.toISOString(),
  endOfWeek: thisWeek.end.toISOString(),
});
