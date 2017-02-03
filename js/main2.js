// primera forma: var listaTareas = [];

var listaTareas = [];
function pushTareas(){
	var inputTask = document.getElementById("task"); 
	listaTareas.push({tarea:inputTask.value,isDone:false});
	inputTask.value="";
}

//----------------------

function drawTasksList()
{
	pushTareas();
	var lista = document.getElementById("listTask");
	lista.innerHTML = "";
	for (var i in listaTareas)
	{
		var html = "<li><input onclick='terminado("+i+")' type='checkbox' " + (listaTareas[i].isDone?"checked":"") + ">"  + listaTareas[i].tarea + "<i style='float:right;' class='fa fa-trash'></i>" + "</li>";
		lista.innerHTML += html;
	}
}

function terminado(_index)
{
	//alert(listaTareas[_index].nombre);
	//listaTareas[_index].isDone = !listaTareas[_index].isDone;
		//drawTasksList();
	

}

















/*function check()
{
	for (var checked in listaTareas)
	{
		var checked = "<li><input  "+ (listaTareas[i].isDone?"text-decoration:line-through":"text-decoration:none") + ">";
	}
}*/







