const newUsers = [
   { id: 101, username: ' flynn ', email: 'flynn@example.com' },
   { id: 102, username: ' lara ', email: null },
   { id: 103, username: ' jimmy ', email: 'jim@example.com' },
   { id: 104, username: ' sally ', email: 'sally@example.com' },
   { id: 105, username: '    tim ', email: null }
];
const sanitizedUsers = []
for (let user of newUsers) {
   if (user.email !== null) {
      const sanitizedUser = {
         id: user.id,
         username: user.username.trim(),
         email: user.email
      };
      sanitizedUsers.push(sanitizedUser);
   }
}
console.log(sanitizedUsers);
//ecom order fullfillment
const customerOrder = ['a24', 'c05', 'd19', 'a23']; // IDs of products to order

const inventory = [
   { id: 'a23', name: 'Wireless Mouse', price: 25.50, inStock: true },
   { id: 'a24', name: 'USB-C Hub', price: 30.00, inStock: false },
   { id: 'b12', name: 'Webcam', price: 45.99, inStock: true },
   { id: 'c05', name: 'Mechanical Keyboard', price: 99.95, inStock: true },
   { id: 'd19', name: '1TB SSD', price: 89.99, inStock: true }
];
let totalCost = 0;
for (let order of customerOrder) {
   for (let item of inventory) {
      if (item.id === order) {
         if (item.inStock === true) {
            totalCost += item.price
         } else {
            console.log(`Item:${item.id} not in stock`);
         }
      }
   }
}
console.log(totalCost)
//Video Game Level Up
let currentLevel = 5;
let currentXp = 5850;
const xpGain = 1200; // XP gained from a major boss battle
currentXp += xpGain;
while (currentXp >= ((currentLevel + 1) * 1000)) {
   console.log("Ding!!!Leveled UP!!!");
   currentLevel++;
}
//Financial Growth Simulation
let initialInvestment = 20000;
const annualGrowthRate = 0.07;
const targetAmount = 40000;
let years = 0;
while (initialInvestment < targetAmount) {
   initialInvestment += initialInvestment * annualGrowthRate;
   years++;
}
console.log(`It took ${years} to reach the Target`);
//Dynamic Admin Control list
const userRoles = ['viewer', 'editor', 'commenter', 'ROGUE_ADMIN', 'moderator', 'publisher'];
for (let userr of userRoles) {
   if (userr === "ROGUE_ADMIN") {
      console.log("CRITICAL ALERT!!!! Rougue Admin Detected.");
      break;
   } else if (userr === "editor" || userr === "moderator") {
      console.log("High-Level Permissions Granted!!!")
   } else {
      console.log(`Processing Permissions for : ${userr}`);
   }
}