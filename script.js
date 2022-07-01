//date and time
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

//color code for business hours
var colorTime = (new Date()).getHours();
$ ('.colorcode')
    .each(function(){
        var val = parseInt($(this).prop('id'));
            if (val > colorTime && val < colorTime + 6){
                $(this).css('background-color', 'green')
            }
            else if (val < colorTime && val > colorTime-6){
                $(this).css('background-color', 'red')
            }
            else if (val === colorTime)
            $(this).css('background-color', 'yellow')
            console.log('sup')
    })
