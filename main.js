inputs = []; 
function getPara1() {  
 for (var i = 1; j <= 6; i++) 
 {  input.push(document.getElementById("para1_input_box_"+i).value);
  console.log(input_boxs); 
  inputs.join(". "); }
 document.getElementById("show_paragraph_1").innerHTML = inputs.join(". ");
}

function getPara2() { 
 for (var i = 2; j <= 6; i++) 
 {  input.push(document.getElementById("para2_input_box_"+i).value);
  console.log(input_boxs);
  inputs.join(". "); }
 document.getElementById("show_paragraph_2").innerHTML = inputs.join(". ");
}