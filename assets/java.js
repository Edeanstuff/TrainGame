var config = {
    apiKey: "AIzaSyDwAyaru_z0lrZApOEQZ2nDpljGs_QdG_Q",
    authDomain: "ucla-bootcamp-test-e8b12.firebaseapp.com",
    databaseURL: "https://ucla-bootcamp-test-e8b12.firebaseio.com/",
    projectId: "ucla-bootcamp-test-e8b12",
    storageBucket: "ucla-bootcamp-test-e8b12.appspot.com",
    messagingSenderId: "1042111117634"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
var trainname = "";
var dest = "";
var frequency= "";
var timeaway;
var time;
var first;
var next= "";
var newTime;
var firstfix;
var frefix

    function getValues() {
        trainname = $("#trainn").val().trim();
        dest = $("#dest").val().trim();
        frequency = $("#fre").val().trim();
        first = $("#first").val().trim();
}
    function onScreen() {
        $("#traininput").append("<div>" + sv.train + "</div>");
        $("#destinput").append("<div>" + sv.dest + "</div>");
        $("#freinput").append("<div>" + sv.fre + "</div>");
        alert(first);
    }
    function getTime() {
        firstfix = moment(first, "hh:mm").format("h:mm")
        frefix = moment(frequency, "mm").format("m")
        console.log(firstfix);
        next = moment(firstfix, "h:mm");
        console.log(next);
        newTime = moment().format('HH:mm');
        
      
     }
     $("#submit").on("click", function(event) {
        event.preventDefault();
  
        getValues();
  
        database.ref().push({
          train: trainname,
          dest: dest,
          fre: frequency,
        });
        
      
  
      database.ref().on("child_added", function(snapshot) {
        var sv = snapshot.val();
        $("#traininput").html("<div>" + sv.train + "</div>");
        $("#destinput").html("<div>" + sv.dest + "</div>");
        $("#freinput").html("<div>" + sv.fre + "</div>");
        
  
        
  
      })
    });