//date and time


var datetime = null
var date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

datetime = $('#currentDay')
update();
setInterval(update, 1000);



function rightColor() {
    var rightTime = moment().hours();

    $('.time-block')
        .each(function () {
            var val = parseInt($(this)[0].dataset.time);
            if (val > rightTime) {
                $(this).addClass('future')
            }
            else if (val < rightTime) {
                $(this).addClass('past')
            }
            else
                $(this).addClass('present')
        })
}
rightColor()

$(".saveBtn").click(function () {
    localStorage.setItem(
        //Set the key in local storage
        $(this).parent()[0].dataset.time,
        //Set the Value in local storage
        $(this).siblings()[1].value
    )
})
$('textarea').each(function () {
    // Get value from localStorage based on parent element's dataset
    $(this).val(localStorage.getItem($(this).parent()[0].dataset.time))
})