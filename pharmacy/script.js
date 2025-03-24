$(document).ready(function() {
    $("#set-time-btn").click(function() {
        $("#time-picker-modal").fadeIn();
    });

    $("#cancel-btn").click(function() {
        $("#time-picker-modal").fadeOut();
    });

    $("#ok-btn").click(function() {
        let selectedTime = $("#time-input").val();
        $("#selected-time").val(selectedTime);
        $("#time-picker-modal").fadeOut();
    });

    $("#add-btn").click(function() {
        let medication = $("#medication-name").val();
        let time = $("#selected-time").val();
        
        if (medication && time) {
            $("#schedule-list").append(`<li>${medication} - ${time}</li>`);
            $("#medication-name").val('');
            $("#selected-time").val('');
        } else {
            alert("Please enter both Medication Name and Time.");
        }
        function goBack() {
            window.history.back();
        }                
    });
});
