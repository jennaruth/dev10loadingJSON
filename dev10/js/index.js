var xhr = new XMLHttpRequest(); 

xhr.onload = function() {

  responseObject = JSON.parse(xhr.responseText);

  
  var newContent = "";
  for (var i = 0; i < responseObject.events.length; i++) {
    
    newContent += '<div class="event">';
    newContent += '<img src="' + responseObject.events[i].map + '" ';
    newContent += 'alt="' + responseObject.events[i].location + '" />';
    newContent += "<p><b>" + responseObject.events[i].location + "</b><br>";
    newContent += responseObject.events[i].date + "</p>";
    newContent += "</div>";
  }

  
  document.getElementById("content").innerHTML = newContent;

 
};

xhr.open("GET", "data/data.json", true); 
xhr.send(null); 




function showEvents(data) {

  var newContent = ""; 

  
  for (var i = 0; i < data.events.length; i++) {
    
    newContent += '<div class="event">';
    newContent += '<img src="' + data.events[i].map + '" ';
    newContent += 'alt="' + data.events[i].location + '" />';
    newContent += "<p><b>" + data.events[i].location + "</b><br>";
    newContent += data.events[i].date + "</p>";
    newContent += "</div>";
  }

  
  document.getElementById("content").innerHTML = newContent;
}
showEvents({
  events: [
    {
      location: "San Francisco, CA",
      date: "May 1",
      map: "http://javascriptbook.com/code/c08/img/map-ca.png"
    },
    {
      location: "Austin, TX",
      date: "May 15",
      map: "http://javascriptbook.com/code/c08/img/map-tx.png"
    },
    {
      location: "New York, NY",
      date: "May 30",
      map: "http://javascriptbook.com/code/c08/img/map-ny.png"
    }
  ]
});