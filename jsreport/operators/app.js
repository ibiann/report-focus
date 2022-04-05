var a = 42;
var b = "42";

console.log(a == b);


/* toán logic ?. ?? */
const job = {
    position: 'dev',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};


const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();


/* ?? */

let user = {
    name: "Isha",
    detail: { age: 19 }
  }
  
  const userCity = user?.city ?? "Unknown city";
  
  console.log(userCity);


  /*  optional channing để gọi hàm */
  