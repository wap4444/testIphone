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

$("#getData").click(function() {
    var homeId = $('#homeId').val();
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
        
function myFunction() {
    $('#homeId').empty();
      $.ajax({type: 'POST',url: 'http://len.smart-pavlodar.kz/api/allHomes.php',data:{qqq:1},
        success: function(data) {
        resp = JSON.parse(data);
        $.each(resp, function(key, data) {
        $('#homeId').append('  <option value="'+resp[key].id_f+'">'+resp[key].NazvUlitsy+', '+resp[key].NomerDom+'</option>');
        });
       }
      });
}
myFunction();

    var onSuccess = function(position) {
        alert(position.coords.latitude);
 $('#load').show();
lat=position.coords.latitude;
longi=position.coords.longitude;
homeId=localStorage.course;
        $.ajax({type: 'POST',url: 'http://len.smart-pavlodar.kz/api/getCoord.php',data:{lat:lat,longi:longi,homeId:homeId},
success: function(data){
            $('#load').hide();
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
