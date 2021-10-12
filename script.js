let equal_pressed = 0;
//cacho el input que presione
let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
window.onload = () => {
  input.value = "";
};
//ingreso a cada clase con el forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //se ve el valor de cada signo
    input.value += button_class.value;
  });
});
//resolver el input con el signo de igual
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluar el input que ingresas
    let solution = eval(inp_val);
    //Verdadero para numeros naturales
    //falso para decimales
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //Si ingresan un numero invalido
    alert("Invalid Input");
  }
});
//limpiar input
clear.addEventListener("click", () => {
  input.value = "";
});
//borrar uno
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});