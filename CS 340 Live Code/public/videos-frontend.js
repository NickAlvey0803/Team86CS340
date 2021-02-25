document.addEventListener('DOMContentLoaded', bindButtons)
document.addEventListener('DOMContentLoaded', bindButtons2)

function bindButtons(){
  document.getElementById('videoSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {category:null, weight:null, uploader_weight:null, light_score:null, uid:null};
      payload.category = document.getElementById('category').value;
      payload.weight = document.getElementById('weight').value;
      payload.uploader_weight = document.getElementById('uploader_weight').value;
      payload.light_score = document.getElementById('light_score').value;
      payload.uid = document.getElementById('uid').value;

      
      console.log('http://flip3.engr.oregonstate.edu:52112/videos/insert?category=' + payload.category + '&weight=' 
        + payload.weight + '&uploader_weight='+ payload.uploader_weight + '&light_score=' + payload.light_score + '&uid=' + payload.uid);

      req.open('GET', 'http://flip3.engr.oregonstate.edu:52112/videos/insert?category=' + payload.category + '&weight=' 
        + payload.weight + '&uploader_weight='+ payload.uploader_weight + '&light_score=' + payload.light_score + '&uid=' + payload.uid);
      


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
