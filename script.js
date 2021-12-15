//console.log($.ajax('https://api.adviceslip.com/advice'))

//variables
const url = 'https://api.adviceslip.com/advice';


//element reference
const $advice = $('#slip');


//element listeners
$('#btn-advice').on('click', handleClick);

//functions
function handleClick(evt){
    evt.preventDefault();

    $.ajax(url).then(function(data){
        
        render(data);
       
    });
}

function render(slip){
    $('main').html(`
    <h3>${slip}</h3>
    <img src="https://media1.giphy.com/media/lqvOP6ZqZLxwxu1ppD/200w.webp?cid=ecf05e47tth4eizd4ohq3ld282mgj55xoj8m9vwrnuglj3lv&rid=200w.webp&ct=g" alt="">
    `);
}

