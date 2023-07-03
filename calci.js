function ac()
    {
      document.getElementById("res").innerText="";
    }
    function show(input)
    {
     document.getElementById("res").innerText+=input;
    }
    function cal(){
      document.getElementById("res").innerText=eval(document.getElementById("res").innerText);
    }
    function del(){
      document.getElementById("res").innerText=document.getElementById("res").innerText.toString().slice(0,-1);
  }