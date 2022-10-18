function dummyFn({ x, y }: MyGreatInterface): number {
  return x * 2 + y;
}

export interface MyGreatInterface {
  name: string;

  x: number;
  y: number;
}

const o1: MyGreatInterface = { x: 5, y: 10, name: "O1" };
const o2: MyGreatInterface = { x: 1, y: 2, name: "O2" };

function logIt(o: MyGreatInterface): void {
  console.log(o.name, dummyFn(o));
}

logIt(o1);
logIt(o2);
