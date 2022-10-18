export interface MyGreatInterface {
  x: number;
  y: number;
}

function dummyFn({ x, y }: MyGreatInterface): number {
  return x * 2 + y;
}

const o1: MyGreatInterface = { x: 5, y: 10 };
const o2: MyGreatInterface = { x: 1, y: 2 };

function logIt(o: MyGreatInterface): void {
  console.log(dummyFn(o));
}

logIt(o1);
logIt(o2);
