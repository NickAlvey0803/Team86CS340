document.addEventListener('DOMContentLoaded', bindButtons)
document.addEventListener('DOMContentLoaded', bindButtons2)

function bindButtons(){
  document.getElementById('commentSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {uid:null, vid:null, description:null, light_score:null};
      payload.uid = document.getElementById('uid').value;
      payload.vid = document.getElementById('vid').value;
      payload.description = document.getElementById('description').value;
      payload.light_score = document.getElementById('light_score').value;

      
      console.log('http://flip3.engr.oregonstate.edu:52112/comments/insert?uid=' + payload.uid + '&vid=' 
        + payload.vid + '&description='+ payload.description + '&light_score=' + payload.light_score);

      req.open('GET', 'http://flip3.engr.oregonstate.edu:52112/comments/insert?uid=' + payload.uid + '&vid=' 
        + vid + '&description='+ payload.description + '&light_score=' + payload.light_score);
      


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