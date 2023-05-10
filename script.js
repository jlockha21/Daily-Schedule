var eventsData;


function setHourColors() {
    var now =dayjs();
    for (var i = 9; i <18; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");
        } else if (i > now.hour()) {
            $("#hour-" + i + " textarea").addClass("future");

        }       
    }
}


function loadStoredData(){
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour1: "",
            hour2: "",
            hour3: "",
            hour4: "",
            hour5: "",
            
        };
    };
    for (var i = 9; i < 18; i++) {
        $("#hour-" + i + " textarea").val(eventsData["hour" + i]);
    }
};



function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventsData["hour" + hour] = value;

    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
    
};

$('.saveBtn').on('click', handleSaveClick);

var date = dayjs();
$('#currentDay').text(date.format('dddd, MMMM D'));


$(function(){
    loadStoredData();
    setHourColors(); 
    
    console.log(localStorage)
});

