// prevent sending form when pressing enter
$(document).on("keydown",function(event) {
    return event.key != "Enter";
});

