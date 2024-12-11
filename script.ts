let myVar: string | boolean;

myVar = "Ciao";

console.log("Var: ", myVar);

let myNumber: number;
myNumber = 10;
console.log("Number: ", myNumber);

const addiction = (n1: number, n2: number) => {
  //return n1 + n2;
  if (typeof n1 === "number" && typeof n2 === "number") {
    return (n1 + n2).toString();
  } else {
    return "Devi inserire due numeri";
  }
};

//console.log("Addiction: ", addiction("0", 6));
console.log("Addiction: ", addiction(2, 6));

//UNION

let MyVar2: string | boolean;
MyVar2 = false;
MyVar2 = "Ciao";

console.log("MyVar2: ", MyVar2);

///------------------------------------------------------------

type StringOrNumber = string | number;

const mixedParams = (par1: StringOrNumber, par2: StringOrNumber) => {
  console.log("par1", typeof par1, "value: ", par1);
  console.log("par2: ", typeof par2, "value: ", par2);
  if (typeof par1 === "number" && typeof par2 === "number") {
    return par1 + par2;
  } else if (typeof par1 === "number" && typeof par2 === "string") {
    return par1.toString() + par2;
  } else if (typeof par1 === "string" && typeof par2 === "number") {
    return par1.concat(par2.toString());
  } else if (typeof par1 === "string" && typeof par2 === "string") {
    return par1 + par2;
  }
};
console.log("La somma dei due numeri è: ", mixedParams(4, 6));
console.log("Anche se i parametri sono un number e una string, sono usati come due stringhe --> ", mixedParams("Anni: ", 27));
console.log("Entrambi i parametri sono due stringhe --> ", mixedParams("Ciao, ", "come stai?"));

const myArray: number[] = [];
myArray.push(4, 5, 6, 7, 8);
myArray.push("5", "6", "ciao");
console.log("myArray: ", myArray);

//----------------------------------------------

myArray.forEach((n) => console.log("myArray element : ", n + 2));

const myTuple: [number, string, number] = [0, "2", 2];

myTuple.forEach((n) => console.log("Tuple element ", n, "is a: ", typeof n));

//---------------------------------------------------

type Person = {
  name: string;
  surname: string;
  age: number;
  height?: number;
};

type Student = {
  class: number | string;
  hourOfLesson: number;
};
const person1: Person & Student = {
  name: "Marco",
  surname: "Rossi",
  age: 24,
  class: 4 + "A",
  hourOfLesson: 2
};
console.log("Person1", person1);

//------------------------------------------------------

interface Human {
  name: string;
  surname: string;
  age: number;
  height: number;
  isAlive: boolean;
  hairColor: string;
  eyesColor: string;
}

const person2: Human = {
  name: "Antonio",
  surname: "Verdi",
  age: 34,
  height: 189,
  isAlive: true,
  hairColor: "brown",
  eyesColor: "green"
};

console.log("Person2", person2);

interface Students extends Human {
  class: number | string;
  hourOfLesson: number;
}
const person3: Students = {
  name: "Antonio",
  surname: "Verdi",
  age: 34,
  height: 189,
  isAlive: true,
  hairColor: "brown",
  eyesColor: "green",
  class: "5B",
  hourOfLesson: 3
};
console.log("Person3: ", person3);
