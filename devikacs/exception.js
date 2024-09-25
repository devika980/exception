var btn1 = document.getElementById("btn1");
var btn1 = document.getElementById("err1");

function display(){
    try {
        alart("btn clicked")
        
    } catch (error) {
        err1.innerText=error.message
        
    }
    
}
function check(){
    var jus = document.getElementById("justin").value;
    var nel = document.getElementById("nelbin");
    try {
       if(jus=="")throw "Box cannot be empty";
       if(isNaN(jus))throw "value is not a number";
       if(jus<10)throw "value should be greater than 10";
       if(jus>20)throw "value should be less than 20"; 
    } catch (error) {
        nel.innerText=error
        
    }
    finally{
        document.getElementById('justin').value=" "
    }

}

