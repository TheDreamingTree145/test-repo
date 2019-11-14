document.addEventListener('DOMContentLoaded', function() {
  existingPairs();
  attachTestListener();
})

const existingPairs = () => {
  for (let i=0; i < localStorage.length; i++) {
    const english = localStorage.key(i);
    const foreign = localStorage.getItem(english);
    const element = document.createElement("li");
    element.textContent = `${english} - ${foreign}`;
    document.getElementById("ul_list_pairs").appendChild(element);
  }
}

const savePair = () => {
  event.preventDefault();
  const english = document.getElementById('english_input');
  const foreign = document.getElementById('foreign_input');
  localStorage.setItem(english.value, foreign.value);
  appendPair(english.value, foreign.value);
}

const appendPair = (english, foreign) => {
  const element = document.createElement("li");
  element.textContent = `${english} - ${foreign}`;
  document.getElementById("ul_list_pairs").appendChild(element);
}

const attachTestListener = () => {
  const element = document.getElementById('test_button')
  element.addEventListener('click', startTest)
}

const startTest = () => {
  alert('clicked')
}

const clearPairs = () => {
  localStorage
}

const newFunction = () => {
  doThis();
  notThat();
}
