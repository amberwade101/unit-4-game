
$( document ).ready(function(){

    var score= 0; 
    var wins= 0;
    var losses = 0;


    var random=Math.floor(Math.random()*101+19)
    
    $('#numbertomatch').text(random);
   
    
    var crystal1= Math.floor(Math.random()*11+1)
    var crystal2= Math.floor(Math.random()*11+1)
    var crystal3= Math.floor(Math.random()*11+1)
    var crystal4= Math.floor(Math.random()*11+1)
    
  $('#actualwins').text(wins);
  $('#actuallosses').text(losses);
 
  function reset(){
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('numbertomatch').text(random);
        crystal1= Math.floor(Math.random()*11+1);
        crystal2= Math.floor(Math.random()*11+1);
        crystal3= Math.floor(Math.random()*11+1);
        crystal4= Math.floor(Math.random()*11+1);
        score= 0;
        $('#actualscore').text(score);
        } 
 




  function goodJob(){
  alert("Your Gemmy!");
    wins++; 
    $('#actualwins').text(wins);
    reset();
  }
  
  function nextTime(){
  alert ("You will get it next time!");
    losses++;
    $('#actuallosses').text(losses);
    reset()
  }
 



    $('#gem1').on ('click', function(){
     score = score + crystal1;
      console.log("Crystal worth= " + score);
      $('#actualscore').text(score); 
           
          if (score === random){
            goodJob();
          }
          else if ( score > random){
            nextTime();
          }   
    })  
    $('#gem2').on ('click', function(){
      score = score + crystal2;
      console.log("Crystal worth= " + score);
      $('#actualscore').text(score); 
          if (score === random){
            goodJob();
          }
          else if ( score > random){
           nextTime();
          } 
    })  
    $('#gem3').on ('click', function(){
      score = score + crystal3;
      console.log("Crystal worth= " + score);
      $('#actualscore').text(score);
  
            if (score === random){
            goodJob();
          }
          else if ( score > random){
            nextTime();
          } 
    })  
    $('#gem4').on ('click', function(){
      score = score + crystal4;
      console.log("Crystal worth= " + score);
      $('#actualscore').text(score); 
        
            if (score === random){
            goodJob();
          }
          else if ( score > random){
            nextTime();
          }
    });   
  }); 



  /* Broken/Unfinished CODE: 
  var random=Math.floor(Math.random()*101+19)
  $('#numbertomatch').text(random);
  //generates random number
  
  //makes all images generate random value when clicked (change 4)


  $(".crystal-set").click(function() {
  
      for(var i = 0; i < 4; i++){
          var random = Math.floor(Math.random()*11) + 1;
          console.log(random);
      
          $("#gem1", "#gem2","#gem3","#gem4").append(random);
  
  
  }});
  
  function reset () {
      random=Math.floor(Math.random()*101+19)
      console.log(random)
      $('#numbertomatch').text(random);
      
  
      $(".crystal-set").click(function() {
      
          for(var i = 0; i < 4; i++){
              var random = Math.floor(Math.random()*11) + 1;
              console.log(random);
          
              $("#gem1", "#gem2","#gem3","#gem4").append(random);
      
              score=0
              $('#numbertomatch').text(score);
      }});
  */
   