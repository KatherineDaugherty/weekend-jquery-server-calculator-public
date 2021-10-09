$(onReady);

function onReady() {
    console.log('jquery is loaded ');
//click handler
$(`#submit`).on(`click`, sendInputs);
}

//send POST with input values 
function sendInputs() {
    $.ajax({
        method: "POST",
        url: "/submission",
        data: {
            data:
            {
                num1: $("#numInput").val(),
                num2: $("#numInputTwo").val(),
            }
        }
    }).then(function (response) {
        // renderHistory();
        $("#numInput").val('');
        $("#numInputTwo").val('');
    });
}

// GET array of inputHistory
function renderHistory() {
    $.ajax({
        method: "GET",
        url: "/submission",
    }).then(function (response) {
        console.log(response);

    })
}
