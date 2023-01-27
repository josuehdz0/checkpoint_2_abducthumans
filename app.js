
let upgrades =[
  {
    name: 'Small Pod',
    price: 50,
    value:2,
  },
  {
    name: 'Bigboy UFO',
    price: 200,
    value:10,
  },
  // {
  //   name: 'Shuttle',
  //   price: 1000,
  //   value:10,
  // },
  // {
  //   name: "Starfleet",
  //   price: 5000,
  //   value:1000,
  // },
  
]

let automaticUpgrades =[
  {
    name: 'Shuttle',
    price: 1000,
    value:10,
  },
  {
    name: "Starfleet",
    price: 5000,
    value:1000,
  },
]

let appliedUpgrades = [];

let humans=1000

function drawUpgrades(){
  let upgradesElem = document.getElementById('upgrade')
  let template = ''

  for (let i = 0; i < upgrades.length; i++) {
    const upgrade = upgrades[i];
    template += `
    <div class="col-4 text-center">
      <button class="btn btn-warning" onclick="applyUpgrade()">${upgrade.price}<i class="mdi mdi-human-male
      "></i></button>
    </div>
    <div class="col-6 d-flex align-items-center">
        <h6> ${upgrade.name} +${upgrade.value}</h6>
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
      <button class="btn btn-warning" onclick="applyUpgrade()">${upgrade.price}<i class="mdi mdi-human-male
      "></i></button>
    </div>
    <div class="col-6 d-flex align-items-center">
        <h6> ${upgrade.name} +${upgrade.value}</h6>
    </div>
    `
    
  }
  autoupgradesElem.innerHTML = template


}




function applyUpgrade(index){
let upgrade = upgrades[index];
if (humans >= upgrade.price) {
  humans-= upgrade.price
  appliedUpgrades.push(upgrade)
}
// appliedUpgrades.push(upgrades[index])

}

function applyAutoUpgrade(){

}

function clickAbduct(){
  // console.log('test');
  humans++
  // console.log(humans);
  
  document.getElementById('humans').innerHTML = ` ${humans} <i class="mdi mdi-human-male
  "></i>`;
}


function HumanCount(){


}


drawUpgrades()
drawAutoUpgrades()