document.addEventListener('DOMContentLoaded', bindButtons)
document.addEventListener('DOMContentLoaded', bindButtons2)

function bindButtons(){
  document.getElementById('userSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {username:null, weight:null, description:null, user_score:null};
      payload.username = document.getElementById('username').value;
      payload.weight = document.getElementById('weight').value;
      payload.uploader_weight = document.getElementById('uploader_weight').value;
      payload.user_score = document.getElementById('user_score').value;

      
      console.log('http://flip3.engr.oregonstate.edu:52112/users/insert?username=' + payload.username + '&weight=' 
        + payload.weight + '&uploader_weight='+ payload.uploader_weight + '&user_score=' + payload.user_score);

      req.open('GET', 'http://flip3.engr.oregonstate.edu:52112/users/insert?username=' + payload.username + '&weight=' 
        + payload.weight + '&uploader_weight='+ payload.uploader_weight + '&user_score=' + payload.user_score);
      


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
