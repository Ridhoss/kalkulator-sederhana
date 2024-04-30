// display
const display = document.getElementById("display");

// menampilkan ke layar
function tampilkan(input) {
  display.value += input;
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
  display.value = display.value.toString().slice(0, -1);
}
