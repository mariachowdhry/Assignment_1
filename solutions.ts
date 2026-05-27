function filterEvenNumbers(num1: number[]): number[] {
  return num1.filter(num => num % 2 === 0);
}


function reverseString(word: string): string {
  return word.split("").reverse().join("");
}


type StringOrNumber = number | string;
function checkType  (value: StringOrNumber)  {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};


function getProperty<T, X extends keyof T>(obj: T, key: X): T[X] {
  return obj[key];
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter(num => arr2.includes(num));
}
