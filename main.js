const form = document.getElementById('addForm');
const itemList = document.getElementById('itemList');
const filter = document.getElementById('filter');

// Crear nueva tarea
form.addEventListener('submit', addItem);
// Borrar la tarea seleccionada
itemList.addEventListener('click', removeItem);
// Filtrar las tareas al buscar
filter.addEventListener('keyup', filterItems);

// Función para agregar tareas
function addItem(e) {
  // Prevenir el comportamiento por defecto para que persista el dato
  e.preventDefault();

  /*if (document.getElementById('item').innerHTML.length = 0) {
    return
  } */

  // Tomar el valor del input  
  const newItem = document.getElementById('item').value

  // Crear nuevo elemento list
  const li = document.createElement('li');
  // Agregar estilo para el elemento list
  li.className = 'list-group-item';
  // Agregar texto con el valor del input que insertó el usuario
  li.appendChild(document.createTextNode(newItem));

  // Crear botón de borrar
  const deleteBtn = document.createElement('button');

  // Agregar estilos para el botón de borrar
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Añadir texto x al botón de borrar
  deleteBtn.appendChild(document.createTextNode('X'));

  // Añadir botón de borrar al elemento list que creamos
  li.appendChild(deleteBtn);

  // Añadir tarea al elemento ul que contiene las tareas 
  itemList.appendChild(li);
}

// Función para borrar tareas
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Estás seguro? Al hacerlo, no podrás deshacer esta acción.')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Función para filtrar tareas (buscar)
function filterItems(e) {
  const searchTerm = e.target.value.toLowerCase();
  // Seleccionar los elementos li donde se va a buscar la equivalencia
  const items = itemList.getElementsByTagName('li');
  // Convertir la selección anterior a un array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(searchTerm) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}