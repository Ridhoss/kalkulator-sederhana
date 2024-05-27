// display
const display = document.getElementById("display");

const max = 15;

// menampilkan ke layar
function tampilkan(input) {
  if (display.value.length < max) {
    display.value += input;
  } else {
      alert('Maximal 15 Character');
  }
}

// menghapus isi layar
function clearDisplay() {
  display.value = "";
}

// menghitung
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// menghapus 1
function del() {
  if (display.value === "Error") {
    display.value = "";
  } else {
    display.value = display.value.toString().slice(0, -1);
  }
}
