function addListItem() {
	let text = $("#new-text").val()
	$("#todo-list").append('<li><input type="checkbox" class="done" />' + text + ' <button class="delete">Delete</button></li>')
	$("#new-text").val('')
}

function deleteItem() {
	$(this).parent().remove()
}

function finishItem() {
	if ($(this).parent().css('color') == 'gray') {
		$(this).parent().css('color', 'black')
	} else {
		$(this).parent().css('color', 'gray')
	}
}


$(document).ready(function() {
	$("#add").on('click', addListItem)
	$(document).on('click', '.delete', deleteItem)
	$(document).on('click', '.done', finishItem)


})