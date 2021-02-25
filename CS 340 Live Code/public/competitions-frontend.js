document.addEventListener('DOMContentLoaded', bindButtons)
document.addEventListener('DOMContentLoaded', bindButtons2)

function bindButtons(){
  document.getElementById('competitionSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload = {competition_name:null, lift_type:null, weight_class:null, lift_reps:null};
      payload.competition_name = document.getElementById('competition_name').value;
      payload.lift_type = document.getElementById('lift_type').value;
      payload.weight_class = document.getElementById('weight_class').value;
      payload.lift_reps = document.getElementById('lift_reps').value;

      
      console.log('http://flip3.engr.oregonstate.edu:52112/competitions/insert?competition_name=' + payload.competition_name + '&lift_type=' 
        + payload.lift_type + '&weight_class='+ payload.weight_class + '&lift_reps=' + payload.lift_reps);

      req.open('GET', 'http://flip3.engr.oregonstate.edu:52112/competitions/insert?competition_name=' + payload.competition_name + '&lift_type=' 
        + lift_type + '&weight_class='+ payload.weight_class + '&lift_reps=' + payload.lift_reps);
      


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