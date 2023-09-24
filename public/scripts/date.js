
$('document').ready(()=>{
    let todayElement = $('.today');
    const date = new Date();
    const week = date.toLocaleString('en-US', { weekday: 'long',});
    const day = date.toLocaleString('en-US', {month: 'long', day: '2-digit'});

    todayElement.text(`${week}, ${day}`);
    
    let localTimeElement = $('.local-time');
    let time = date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
    localTimeElement.text(time);

    $('.nav').on('mouseover', function() {
        $(this).addClass('nav-focused');
    }).on('mouseout', function() {
        $(this).removeClass('nav-focused');
    });

    $('.todo-input > input').on('mouseover', function() {
        $(this).addClass('focused');
    }).on('mouseout', function() {
        $(this).removeClass('focused');
    });

    $('.todo input').on('click', function() {
        if (this.checked) {
            $(this).next().addClass('completed');
        } else {
            $(this).next().removeClass('completed');
        }
    });
});

function doTime() {
    const date = new Date();
    let localTimeElement = $('.local-time');
    let time = date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
    localTimeElement.text(time);
}
setInterval(doTime, 1000);