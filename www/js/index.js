var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
if(localStorage.course){
     $('#courseVal').hide();
     $('#getData').show();
}else{
     $('#courseVal').show();
     $('#getData').hide();
}
        
$("#goCourse").click(function() {
        localStorage.course=$('#courseId').val();
     $('#courseVal').hide();
     $('#getData').show();
});

$("#getData").click(function() {
    
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
        

    var onSuccess = function(position) {
        $('#load').show();  $('#getData').hide();
lat=position.coords.latitude;
longi=position.coords.longitude;
busId=localStorage.course;
        $.ajax({type: 'POST',url: 'http://bus.smart-pavlodar.kz/api/busSimulator.php',data:{lat:lat,longi:longi,budId:busId},
success: function(data){
            $('#load').hide();  $('#getData').show();
alert('Координаты отправлены|'+data);
},
error: function(XMLHttpRequest, textStatus, errorThrown){
alert('Ошибка, попробуйте еще раз!');
}
});
};
 
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
   
        
    }
};
