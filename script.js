let equal_pressed = 0;
//cacho el input que presione
let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let igual = document.getElementById("igual");
//boton de DEL
let borrarTodo = document.getElementById("borrarTodo");
//boton de AC
let borrar = document.getElementById("borrar");

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
igual.addEventListener("click", () => {
  equal_pressed = 1;
  //mejor asigno el String de value para poderle hacer eval();
  let inp_val = input.value;
   /*
  let solution = eval(inp_val);

  if (Number.isInteger(solution)) {
    input.value = solution;
  } else {
    alert("No se reconoce operacion");
  }
   */
  try {
    //evaluar el input que ingresas
    let solution = eval(inp_val);
    
    //Verdadero para numeros naturales
    //falso para decimales
    input.value = solution;

    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
    
  } catch (err) {
    //Si ingresan un numero invalido
    input.value ="No se puede";
  }
 
});
//borrar todo
borrarTodo.addEventListener("click", () => {
  input.value = "";
});
//le quito
borrar.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});