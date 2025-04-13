function love(){
    let html1 = document.getElementById("name1");
    let html2 = document.getElementById("name2");

    let name1 = html1.value;
    let name2 = html2.value;
    
    let result = document.getElementById("result");

    if(!name1){
        alert("Enter the Boy Name please");
    }else if(!name2){
        alert("Enter the Girl Name please");
    }
    else{
        const love=Math.floor(Math.random()*100);
        result.innerHTML = "The Love between"+"  "+name1+"  "+"and"+"  "+"  "+name2+"  "+"is " +love+"%";
        html1.value = '';
        html2.value = '';

    }

 





}