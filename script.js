// clicking submit
function calculate() {
  // get the value in the age input
  let form_age = document.getElementById('age').value;
  // add 2 to the value
  // since javascript reads in the value as string, we must first convert it into an integer using parseInt
  let new_age = parseInt(form_age) + 2;
  document.getElementById('result').getElementsByTagName('span')[0].innerHTML =
    new_age;
}

function demo() {
  // get the value in the age input
  let form_age = document.getElementById('age').value;
  // add 2 to the value
  // since javascript reads in the value as string, we must first convert it into an integer using parseInt
  let new_age = parseInt(form_age) + 10;
  document.getElementById('result').getElementsByTagName('span')[0].innerHTML =
    new_age;
}

// document.getElementsByTagName('form')[0].on('submit', demo());
