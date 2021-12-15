//console.log($.ajax('https://api.adviceslip.com/advice'))

//variables
const url = 'https://api.adviceslip.com/advice';


//element reference
const $advice = $('#slip.advice');


//element listeners
$('#btn-advice').on('click', handleClick);

//functions
function handleClick(evt) {
    evt.preventDefault();

    $.ajax(url).then(function (data) {
        const slipObject = (JSON.parse(data));
        $('main').html(`
        <h3>${slipObject.slip.advice}</h3>
        <img src="https://i.pinimg.com/originals/f1/9d/38/f19d38adcc7ac1de5bb2b0771a066399.gif" alt="">
        `);
    });
}
