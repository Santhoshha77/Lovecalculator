function vote() {
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var result = document.getElementById("result");
    var country = document.getElementById("country").value .toUpperCase();
    
    if(age>=18 && country =="INDIA"){
        result.innerHTML = " You are eligible"+" "+name;
    }else{
        result.innerHTML = "You are not eligible"+" "+name;
    }
    
    }   