let igual_presionado = 0;
//cacho el input que presione
let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let igual = document.getElementById("igual");
//boton de DEL
let borrar = document.getElementById("borrarTodo");
//boton de AC
let borrarTodo = document.getElementById("borrar");

window.onload = () => {
  input.value = "";
};
//ingreso a cada clase con el forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (igual_presionado == 1) {
      input.value = "";
      igual_presionado = 0;
    }
    //se ve el valor de cada signo
    input.value += button_class.value;
  });
});
//resolver el input con el signo de igual
igual.addEventListener("click", () => {
  igual_presionado = 1;
  //mejor asigno el String de value para poderle hacer eval();
  let inp_val = input.value;
  
  try {
    //evaluar el input que ingresas aqui se hace cualquier operacion
    let solution = eval(inp_val);

    input.value = solution;

    //Verdadero para numeros naturales
    //falso para decimales
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

//quitar solo 1
borrar.addEventListener("click", () => {
  input.value = "";
});
//borrar todo
borrarTodo.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});