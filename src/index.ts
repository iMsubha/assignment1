{
  function formatString(input: string, toUpper?: boolean): string {
    return toUpper == false ? input.toLowerCase() : input.toUpperCase();
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function concatenateArrays<T>(...arrays: T[][]) {
    const result: T[] = [];
    for (const arr of arrays) {
      result.push(...arr);
    }
    return result;
  }

  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo(): string {
      return `Make:${this.make}, Year:${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel(): string {
      return `Model:${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");

  function processValue(value: string | number): number {
    return typeof value == "string" ? value.length : value * 2;
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let prices = products.map((p) => p.price);
    let highestPrice = Math.max(...prices);
    let mostExpensiveProduct = products.find((p) => p.price == highestPrice);
    return mostExpensiveProduct || null;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    const weekend = day == Day.Saturday || day == Day.Sunday;
    return weekend ? "Weekend" : "weekday";
  }

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n >= 0) {
          resolve(n * n);
        } else {
          reject(new Error("Error: Negative number not allowed"));
        }
      }, 1000);
    });
  }
}
