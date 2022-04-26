let elSelect = document.querySelector(".js-select");
let elPizzaSize = document.querySelector(".js-pizza-size");
let elSelected = document.querySelector(".js-bread-type");
let elPizzaSizeBread = document.querySelector(".js-bread-size");
let elAddVegetablesWrapper = document.querySelector(".js-vegetables-wrapper");
let elVegetablesList = document.querySelector(".js-vegetables-list");
let elVegetablesResulList = document.querySelector(".js-vegetables-list-wrapper");
let elItionalsWrapper = document.querySelector('.js-additioanl-box');
let elItionalsList = document.querySelector('.js-additioanl-list');
let elItionalsListResult = document.querySelector(".js-additioanl-list-result");


let selectOptionsValue = ['Yupqa', 'O\'rta','Qalin'];



for (let i = 0; i < selectOptionsValue.length; i++) {

  elSelected.textContent = selectOptionsValue[0];
  
  let newElOption = document.createElement("option");
  newElOption.textContent = selectOptionsValue[i];


  elSelect.addEventListener('change', function (evt) {
    evt.preventDefault();
    elSelected.textContent = elSelect.value;
  });

  elSelect.appendChild(newElOption);
}


let pizzaSize = ['25 cm ', '30 cm', '35 cm'];

for (let i = 0; i < pizzaSize.length; i++) {

  elPizzaSizeBread.textContent = pizzaSize[0];

  let elInputRadio = document.createElement('input');
  let elLabel = document.createElement('label');

  elInputRadio.classList.add('form-check-input');
  elLabel.classList.add('radio-label');
  elInputRadio.classList.add('pizzaSize-radio');


  // elInputRadio.setAttribute("checked", "on");

  elInputRadio.value = pizzaSize[i];
  elInputRadio.type = 'radio';
  elInputRadio.name = 'Pizza-size';

  elInputRadio.id = pizzaSize[i];
  elLabel.setAttribute('for', pizzaSize[i]);
  elLabel.textContent = pizzaSize[i];

  
// ======================== Function =====================
  elInputRadio.addEventListener('change', function (evt) {
    evt.preventDefault();
    elPizzaSizeBread.textContent = this.value;
  });

  elPizzaSize.appendChild(elInputRadio);
  elPizzaSize.appendChild(elLabel);
}


let addVegetables = ['Pomidor', 'Tuzlangan bodring', 'Kurka go\'shti','Qo\'ziqorin', 'Zaytun',  'Qazi'];

let sherzod = [];

for (let i = 0; i < addVegetables.length; i++) {
  let elAddVegetablesItem = document.createElement('li');
  let elAddVegetablesCheckbox = document.createElement('input');
  let elAddVegetablesLabel = document.createElement('label');

  elAddVegetablesCheckbox.classList.add('form-check-input');
  elAddVegetablesLabel.classList.add('addVegetables-label');
  elAddVegetablesItem.classList.add('addVegetables-item');

  elAddVegetablesCheckbox.id = addVegetables[i];
  elAddVegetablesLabel.setAttribute('for', addVegetables[i]);
  elAddVegetablesLabel.textContent = addVegetables[i];
  elAddVegetablesCheckbox.value = addVegetables[i];
  elAddVegetablesCheckbox.type = 'checkbox';
  elAddVegetablesCheckbox.name = "Nimadir";

  elAddVegetablesCheckbox.addEventListener('change', function (evt) {
    evt.preventDefault();
    if (sherzod.includes(this.value)) {
      let index = sherzod.indexOf(this.value);
      sherzod.splice(index, 1);
    } else {
      sherzod.push(this.value);
    }
    
    elVegetablesResulList.innerHTML = null;
    
    for (let i = 0; i < sherzod.length; i++){
      let elAddVegetablesResult = document.createElement('li');
      elAddVegetablesResult.classList.add('add-vegetables-item');
      elAddVegetablesResult.textContent = sherzod[i];
      elVegetablesResulList.appendChild(elAddVegetablesResult);
      elVegetablesResulList.name = "Additional";
    }
    
  });

  elVegetablesList.appendChild(elAddVegetablesItem);
  elAddVegetablesItem.appendChild(elAddVegetablesCheckbox);
  elAddVegetablesItem.appendChild(elAddVegetablesLabel);
}


let addtionalsArrey = ['Achchiq', 'Sosiskali'];

let Haydarov = [];

for (let i = 0; i < addtionalsArrey.length; i++) {
  let addtionalsInputCheckbox = document.createElement('input');
  let addtionalsLabel = document.createElement("label");
  let addtionalsItem = document.createElement('li');

  addtionalsInputCheckbox.id = addtionalsArrey[i];
  addtionalsLabel.setAttribute('for', addtionalsArrey[i]);
  addtionalsInputCheckbox.value = addtionalsArrey[i];
  addtionalsLabel.textContent = addtionalsArrey[i];
  addtionalsItem.classList.add('addtionals-item');
  addtionalsInputCheckbox.type = 'checkbox';

  addtionalsLabel.classList.add('addVegetables-label');
  addtionalsInputCheckbox.classList.add('form-check-input');
  
// ======================== Function =====================
  addtionalsInputCheckbox.addEventListener('change', function(evt) {
    evt.preventDefault();

    if (Haydarov.includes(this.value)) {
      let index = Haydarov.indexOf(this.value);
      Haydarov.splice(index, 1);
    } else {
      Haydarov.push(this.value);
    }
    
    elItionalsListResult.innerHTML = null;
    
    for (let i = 0; i < Haydarov.length; i++){
      let elAdditionasResult = document.createElement('li');
      elAdditionasResult.classList.add('add-vegetables-item');
      elAdditionasResult.textContent = Haydarov[i];
      elItionalsListResult.appendChild(elAdditionasResult);
    }

  });

  addtionalsItem.appendChild(addtionalsInputCheckbox);
  addtionalsItem.appendChild(addtionalsLabel);
  elItionalsList.appendChild(addtionalsItem);
}