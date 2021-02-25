document.addEventListener('DOMContentLoaded', bindButtons)
document.addEventListener('DOMContentLoaded', bindButtons2)

function bindButtons(){
  document.getElementById('video_competitionSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {vid:null, cid:null};
      payload.vid = document.getElementById('vid').value;
      payload.cid = document.getElementById('cid').value;

      
      console.log('http://flip3.engr.oregonstate.edu:52112/videos_competitions/insert?vid=' + payload.vid + '&cid=' 
        + payload.cid);

      req.open('GET', 'http://flip3.engr.oregonstate.edu:52112/videos_competitions/insert?vid=' + payload.vid + '&cid=' 
        + cid);
      

      req.setRequestHeader('Content-Type', 'application/json');

      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          
        } else {
          console.log("Error in network request: " + req.statusText);
        }});
      req.send(null);
      //event.preventDefault();
    });
};

// if(document.getElementById('deleteSubmit') !== null){
function bindButtons2(){
     document.getElementById('deleteSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {id:null};
        payload.id = getElementById("id").value;

        req.open('GET', 'http://localhost:3000/delete?id=' + payload.id, true);

        req.setRequestHeader('Content-Type', 'application/json');

        req.addEventListener('load',function(){
          if(req.status >= 200 && req.status < 400){
            
          } else {
            console.log("Error in network request: " + req.statusText);
          }});
        req.send(null);
    //event.preventDefault();
  });
}