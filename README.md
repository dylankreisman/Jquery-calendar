# Jquery-calendar

## Process
For this JQuery application, I needed to accomplish four things:
- Setting up a bootstrap-modeled website
- Creating a time interval
- Color-code the time-blocks to past, present, and future
- Make all the data put in the text box pushed into local storage

To do this, I first created the html and established the correct classes. Then, I used moment.js to create a recurring time interval. I created a function then associated to the time-block and parsed a variable -- then I made a series of if, else if, and else statements to give them certain properties. Once this was done, then I went and created two functions related to the button and the textarea. 

## Languages
- HTML 
- CSS (custom and bootstrap)
- JavaScript / JQuery

## Section of Code
The portion of code shown below is associated to my color coded rows, which change colors based on past, present, and future. I first named the function, then created a variable inside associated with the current hour. Then, I used JQuery to look inside a class of time-block, and created an internal function that would look through each row. With each row, I tied them to three if, else if, and else statements. 
~~~~
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
~~~~

## Links and Gif
[Gif](Work-day-scheduler.gif)
- [Github](https://github.com/dylankreisman/Jquery-calendar)
- [Application](https://dylankreisman.github.io/Jquery-calendar)
- [LinkedIn](https://www.linkedin.com/in/dylan-kreisman-3752b1160/)