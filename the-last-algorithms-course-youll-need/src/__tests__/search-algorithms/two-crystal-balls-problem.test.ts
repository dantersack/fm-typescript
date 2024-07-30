import { twoCrystallBalls } from "../../algorithms/search/two-crystal-balls-problem";

test("two crystall balls", () => {
  expect(
    twoCrystallBalls([false, false, false, false, true, true, true, true, true])
  ).toEqual(4);
  expect(twoCrystallBalls([false, true, true, true, true, true, true])).toEqual(
    1
  );
  expect(
    twoCrystallBalls([false, false, false, false, false, false, true])
  ).toEqual(6);
  expect(
    twoCrystallBalls([false, false, false, false, false, false, false, false])
  ).toEqual(-1);
});
