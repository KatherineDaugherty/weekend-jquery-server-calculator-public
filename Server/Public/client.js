$(onReady);

function onReady() {
    console.log('jquery is loaded ');
    getInputs(); 
    //click handler
    $(`#submit`).on(`click`, sendInputs);
    $(`#clear`).on(`click`, clearInputs);

}

function clearInputs() {
    $("#numInput").val('');
    $("#numInputTwo").val('');
    console.log('CLEAR');
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
        getInputs();
    });
}

// GET array of inputHistory
function getInputs() {
    $.ajax({
        method: "GET",
        url: "/submission",
    }).then(function (response) {
        console.log(`SUCCESS`, response);
        renderHistory(response);
    }).catch(function (response) {
        alert(`REQUEST FAILED, try again`)
    })
}

function renderHistory (res) {
    $(`.historyOfEquations`).empty();

    for (let number of res) {
        $(`.historyOfEquations`).append(`
        <li>'
        ${number.num1} ${number.num2}
        </li>
        `)
    }
}