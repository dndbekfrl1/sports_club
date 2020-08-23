
function value_check() { //선호종목
  var check_count = document.getElementsByName("match").length;

  for (var i=0; i<check_count; i++) {
      if (document.getElementsByName("match")[i].checked == true) {
          alert(document.getElementsByName("match")[i].value);
      }
  }
}


window.onload=function() { //상태메시지 수정
    document.getElementById("combtn").onclick=processText;
   }
   
   function processText() {
    var txtBox = document.getElementById("comment");
    var lines = txtBox.value.split("\n");
   
    // generate HTML version of text
    var resultString  = "<p>";
    for (var i = 0; i < lines.length; i++) {
      resultString += lines[i] + "<br />";
    }
    resultString += "</p>";
   
    // print out to page
    var   blk   = document.getElementById("result");
    blk.innerHTML  =  resultString; 
   }

   
   
