
// console.log($.ajax('https://api.adviceslip.com/advice'))
//variables
// const URL = 'https://api.adviceslip.com/advice';

//element reference
const $id = $('#slip.id');
const $advice = $('#slip.advice');
const $form = $('form')
const $input = $('input[type="button"]');

//element listeners
$form.on('click', handleClick);

//functions
function handleClick(evt){
    console.log(evt);
    evt.preventDefault();

    $.ajax('https://api.adviceslip.com/advice').then(function(advice){
        render(advice);
    });
}

function render(adviceSlip){
    $('main').html(`
    <p>${adviceSlip.advice}</p>
    `);
}

