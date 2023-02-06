// clicking submit calculates the car's value and prints it
function calculate_value() {
  // get age value from the user input
  let age = parseInt(document.getElementById('age').value);

  // get price value from the user input
  let price = parseInt(document.getElementById('price').value);

  // get car model from user selection in dropdown
  // will return HondaAccord, TC, FE, etc.
  let model = document.getElementById('model').value;

  // set the deprecation value based on the car type
  let deprecation_percent = model_depreceation(model);

  let varx = price * deprecation_percent;

  let variay = price - varx;

  // calculate value of the car
  let value = price - variay * age;

  // change the text on the page to the car value
  document.getElementById('result').getElementsByTagName('span')[0].innerHTML =
    value;
}

//returns the given model's depreciation percentage
function model_depreceation(model) {
  switch (model) {
    case 'HondaAccord':
      return 0.958;
    case 'TC':
      return 0.952;
    case 'FE':
      return 0.926;
    case 'NP':
      return 0.928;
    case 'FF':
      return 0.952;
    case 'GS':
      return 0.942;
    case 'AV':
      return 0.946;
    case 'HA':
      return 0.944;
    case 'ID':
      return 0.853;
    case 'TH':
      return 0.86;
    case 'NS':
      return 0.952;
    case 'TY':
      return 0.96;
    case 'HE':
      return 0.956;
    case 'TCC':
      return 0.958;
    default:
      return 0;
  }
}

//just a demo function for testing
function demo() {
  // get the value in the age input
  let form_age = document.getElementById('age').value;
  // add 2 to the value
  // since javascript reads in the value as string, we must first convert it into an integer using parseInt
  let new_age = parseInt(form_age) + 10;
  document.getElementById('result').getElementsByTagName('span')[0].innerHTML =
    new_age;
}
