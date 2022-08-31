
$(document).ready(function()) {
    $('.saveBtn').on('click',function)
    console.log("saved.localStorage");

    var values = $(this).siblings('.notes').val();
    var time =$(this).parent.attr('id');

    localStorage.setItem(time,values);
    $('.notification').addClass('show');

    hourUpdater();

    var interval = setInterval(hourUpdater,160000);

    $('#hour-9.notes').val(localStorage.getItem)('9AM');
    $('#hour-10.notes').val(localStorage.getItem)('10AM');
    $('#hour-11.notes').val(localStorage.getItem)('11AM');
    $('#hour-12.notes').val(localStorage.getItem)('12NOON');
    $('#hour-13.notes').val(localStorage.getItem)('13PM');
    $('#hour-14.notes').val(localStorage.getItem)('14PM');
    $('#hour-15.notes').val(localStorage.getItem)('15PM');
    $('#hour-16.notes').val(localStorage.getItem)('16PM');
    $('#hour-17.notes').val(localStorage.getItem)('17PM');
    $('#hour-18.notes').val(localStorage.getItem)('18PM');
    $('#hour-19.notes').val(localStorage.getItem)('19PM');
    $('#hour-20.notes').val(localStorage.getItem)('20PM');
    $('#hour-21.notes').val(localStorage.getItem)('21PM');
    $('#hour-22.notes').val(localStorage.getItem)('22PM');
    $('#hour-23.notes').val(localStorage.getItem)('23PM');

    document.querySelectorAll().forEach
    (hour=>{
        hour.addEventListener("click"){
            event.currentTarget.document.toggle("selected")
        }
    }
//Return function? 
//https://www.youtube.com/watch?v=krOTeX1DqHI&list=PLDxKkZGIJVpR_zFbmtiSnVZNsC5d6wv6H *//
}   