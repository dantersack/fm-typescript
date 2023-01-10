const phoneList = [
  { customerId: "0001", areaCode: "321", num: "123-4566" },
  { customerId: "0002", areaCode: "174", num: "142-3626" },
  { customerId: "0003", areaCode: "192", num: "012-7190" },
  { customerId: "0005", areaCode: "402", num: "652-5782" },
  { customerId: "0004", areaCode: "301", num: "184-8501" },
];

function listToDict<T>(
  list: T[],
  idGen: (arg: T) => string
): { [key: string]: T } {
  const dict: { [key: string]: T } = {};

  list.forEach((element) => {
    const dictKey = idGen(element);
    dict[dictKey] = element;
  });

  return dict;
}

console.log(listToDict(phoneList, (item) => item.customerId));

console.log(
  listToDict(
    [
      new Date("10-01-2021"),
      new Date("03-14-2021"),
      new Date("06-03-2021"),
      new Date("09-30-2021"),
      new Date("02-17-2021"),
      new Date("05-21-2021"),
    ],
    (arg) => arg.toISOString()
  )
);

function wrapInArray<T>(arg: T): [T] {
  return [arg];
}

console.log(wrapInArray(3));
console.log(wrapInArray(new Date()));
console.log(wrapInArray(new RegExp("/s/")));
