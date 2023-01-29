
let upgrades =[
  {
    name: 'Small Pod',
    price: 50,
    value: 1,
    quantity: 0,
  },
  {
    name: 'Bigboy UFO',
    price: 200,
    value:10,
    quantity: 0,
  },
]

let automaticUpgrades =[
  {
    name: 'Shuttle',
    price: 1000,
    value:10,
    quantity: 0,
  },
  {
    name: "Starfleet",
    price: 5000,
    value:1000,
    quantity: 0,
  },
]

let appliedUpgrades = [];
let appliedAutoUpgrades = [];

let humans=5000

let clickValue = 1
let autoValue = 0

function drawUpgrades(){
  let upgradesElem = document.getElementById('upgrade')
  let template = ''

  for (let i = 0; i < upgrades.length; i++) {
    const upgrade = upgrades[i];
    template += `
    <div class="col-4 text-center">
    <button class="btn btn-warning" onclick="applyUpgrade('${upgrade.name}')">${upgrade.price}<i class="mdi mdi-human-male
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
    <div class="col-4 text-center">
      <button class="btn btn-warning" onclick="applyAutoUpgrade('${upgrade.name}')">${upgrade.price}<i class="mdi mdi-human-male
      "></i></button>
    </div>
    <div class="col-6 d-flex align-items-center">
        <h6> ${upgrade.name}<br>+${upgrade.value}</h6>
    </div>
    `
    
  }
  autoupgradesElem.innerHTML = template


}




function applyUpgrade(name){
let upgrade = upgrades.find(u => u.name==name);
if (humans >= upgrade.price) {
  humans -= upgrade.price
  upgrade.quantity+=1
  appliedUpgrades.push(upgrade)
} else {
  window.alert("You do not have enough humans!")
}
HumanCount();
// clickAbduct()
// appliedUpgrades.push(upgrades[index])

}

function applyAutoUpgrade(name){
  let upgrade = automaticUpgrades.find(u => u.name == name);
  if (humans >= upgrade.price) {
    humans -= upgrade.price;
    upgrade.quantity+=1
    appliedAutoUpgrades.push(upgrade);
    // NOTE does this keep adding to the array? or just pushing to the quantity
    
  } else {
    window.alert('You do not have enough humans!');
  }
  HumanCount();
}

function clickAbduct(){
  // console.log('test');
  humans++
  // console.log(humans);
  for(let i = 0; i < appliedUpgrades.length; i++){
    humans += appliedUpgrades[i].value;
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

function HumanCount(){
  document.getElementById('humans').innerHTML = ` ${humans} <i class="mdi mdi-human-male"></i>`;
}



setInterval(autoAbduct,3000)
drawUpgrades()
drawAutoUpgrades()