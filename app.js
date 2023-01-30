// SECTION Arrays

let upgrades =[
  {
    name: 'UFO',
    price: 50,
    value: 1,
    quantity: 0,
    priceMultiplier: 1.1,
  },
  {
    name: 'Bigboy UFO',
    price: 200,
    value:10,
    quantity: 0,
    priceMultiplier: 1.1
  },
]

let automaticUpgrades =[
  {
    name: 'Shuttle',
    price: 1000,
    value:10,
    quantity: 0,
    priceMultiplier: 1.2
  },
  {
    name: "Starfleet",
    price: 5000,
    value:1000,
    quantity: 0,
    priceMultiplier: 1.1
  },
]

let appliedUpgrades = [];
let appliedAutoUpgrades = [];



// SECTION important variables
let humans= 1000000
let clickValue = 1
let autoValue = 0


// SECTION functions

function drawUpgrades(){
  let upgradesElem = document.getElementById('upgrade')
  let template = ''

  for (let i = 0; i < upgrades.length; i++) {
    const upgrade = upgrades[i];
    template += `
    <div class="col-5 text-center d-flex justify-content-end p-2">
    <button class="btn btn-primary" onclick="applyUpgrade('${upgrade.name}')">${upgrade.price}<i class="mdi mdi-human-male
    "></i></button>
  </div>
  <div class="col-6 d-flex align-items-center">
      <h6> ${upgrade.name}<br>+${upgrade.value} </h6>
  </div>
    `
    
  }
upgradesElem.innerHTML = template

}

function drawAutoUpgrades(){
  let autoupgradesElem = document.getElementById('autoupgrade')
  let template = ''

  for (let i = 0; i < automaticUpgrades.length; i++) {
    const upgrade = automaticUpgrades[i];
    template += `
    <div class="col-5 text-center p-2 d-flex justify-content-end">
      <button class="btn btn-primary" onclick="applyAutoUpgrade('${upgrade.name}')">${upgrade.price}<i class="mdi mdi-human-male
      "></i></button>
    </div>
    <div class="col-6 d-flex align-items-center">
        <h6> ${upgrade.name}<br>+${upgrade.value}</h6>
    </div>
    `
    
  }
  autoupgradesElem.innerHTML = template
  drawAutoValue()


}



// NOTE These too functions move objects to new applied arrays
function applyUpgrade(name){
let upgrade = upgrades.find(u => u.name==name);
if (humans >= upgrade.price) {
  humans -= upgrade.price
  upgrade.quantity+=1
  // upgrade.price*= 2;
  upgrade.price = Math.floor(upgrade.price * upgrade.priceMultiplier);
  appliedUpgrades.push(upgrade)
} else {
  window.alert("You do not have enough humans!")
}
HumanCount();
drawUpgrades();
drawClickValue();
drawUpgradeCount(name);
// clickAbduct()
// appliedUpgrades.push(upgrades[index])

}

function applyAutoUpgrade(name){
  let upgrade = automaticUpgrades.find(u => u.name == name);
  if (humans >= upgrade.price) {
    humans -= upgrade.price;
    upgrade.quantity+=1
    upgrade.price = Math.floor(upgrade.price * upgrade.priceMultiplier);
    appliedAutoUpgrades.push(upgrade);
    // NOTE does this keep adding objects to the array? or just pushing to the quantity
    
  } else {
    window.alert('You do not have enough humans!');
  }
  HumanCount();
  drawAutoUpgrades();
  drawAutoValue()
  drawAutoUpgradeCount(name);
}


// NOTE These functions add to the human count
function clickAbduct(){
  // console.log('test');
  humans++
  // console.log(humans);
  for(let i = 0; i < appliedUpgrades.length; i++){
    humans += (appliedUpgrades[i].value);
}
  // NOTE turned this into a function called Human count so that everytime human count is affected elsewhere, we can reuse the same function inside.
  HumanCount()
}

function autoAbduct(){
  // appliedAutoUpgrades.forEach(autoupgrades => {
  //   humans += appliedAutoUpgrades[i].value
  // });
  for (let i = 0; i < appliedAutoUpgrades.length; i++) {
    humans += appliedAutoUpgrades[i].value;
  }
  HumanCount()
}


// NOTE These functions draw the sum of values of click and automatics upgrades
function drawClickValue(){
  let clickValue = 1
  for (let i = 0; i < appliedUpgrades.length; i++) {
    clickValue += appliedUpgrades[i].value
  }
  document.getElementById("clickValue").innerHTML = `${clickValue}`;

}

function drawAutoValue(){
  let autoValue = 0
  // NOTE this ^^^ makes sure that when adding to main autoValue above in line 38, im starting this count at 0 then adding to the line above in line 38
// console.log(appliedAutoUpgrades);
  for (let i = 0; i < appliedAutoUpgrades.length; i++) {
    autoValue += appliedAutoUpgrades[i].value
  }
  document.getElementById("autoValue").innerHTML = `${autoValue}<i class="mdi mdi-human-male"></i>`;
}


// NOTE This function draws the total Human count


function HumanCount(){
  document.getElementById('humans').innerHTML = ` ${humans.toLocaleString()}<i class="mdi mdi-human-male"></i>`;
  // SECTION ----------------------------------------------^^^^^^^^^^^^^^----- places ',' every thousands
}


// SECTION here we will keep track of how many upgrades we have purchased



function drawUpgradeCount(name) {
  let upgrade = upgrades.find(u => u.name == name);
  document.getElementById(`${name}Count`).innerHTML = `${upgrade.quantity}`;
  // NOTE Found this online ^^^^ you can enter the name of the element you want in the HTML so it can have 'multiple' ids!!!
}

function drawAutoUpgradeCount(name) {
  let upgrade = automaticUpgrades.find(u => u.name == name);
  document.getElementById(`${name}Count`).innerHTML = `${upgrade.quantity}`;
  // NOTE Found this online ^^^^ you can enter the name of the element you want in the HTML so it can have 'multiple' ids!!!
}


setInterval(autoAbduct,3000)
drawUpgrades()
drawAutoUpgrades()