$(onReady);
let operator = ``;
const equals = `=`;

function onReady() {
    console.log('jquery is loaded ');
    getInputs();
    //click handler
    $(`#submit`).on(`click`, sendInputs);
    $(`#clear`).on(`click`, clearInputs);
    $(`#plus`).on(`click`, add);
    $(`#minus`).on(`click`, minus);
    $(`#multiply`).on(`click`, multiply);
    $(`#divide`).on(`click`, divide);
}
function divide() {
    console.log('Divide');
    operator = `/`;
}
function multiply() {
    console.log('multiply');
    operator = `*`;
}
function minus() {
    console.log('minus');
    operator = `-`;
}
function add() {
    console.log('Add');
    operator = `+`;
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
            num1: $("#numInput").val(),
            equation: operator,
            num2: $("#numInputTwo").val(),
            equals: equals,
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
    });
}

//Append array of inputs to the DOM
function renderHistory(res) {
    $(`.historyOfEquations`).empty();

    for (let number of res) {
        $(`.historyOfEquations`).append(`
        <li>
        ${number.num1} ${number.equation} ${number.num2} ${number.equals} ${number.solution}
        </li>
        `)
    }
}
//append current solution to the DOM
// function renderSolution(){
//     $(`.answer`).empty();
//     $(`.answer`).append(`<p> ${solution} </p>`);
// }