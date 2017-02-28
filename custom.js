$(document).ready(function(){
  var url = "http://" + window.location.host + "/static/custom/jQuery/"

  $.getScript(url + "katexTag.js", function(){ 
    RenderKatexTag(); 
  });  

  $.getScript(url + "bqTag.js", function(){
    RenderBqTag(); 
  });

  $.getScript(url + "kbdTag.js", function(){ 
    RenderKbdTag(); 
  });  
  
  $.getScript(url + "cbTag.js", function(){ 
    RenderCbTag(); 
  });
});

