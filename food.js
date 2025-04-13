function bill(){
    var idli=parseInt(document.getElementById("Idli").value)*20;
    var Pulav=parseInt(document.getElementById("Pulav").value)*35;
    var Poori=parseInt(document.getElementById("Poori").value)*40;
    var Dosa=parseInt(document.getElementById("Dosa").value)*60;
    var Coffe=parseInt(document.getElementById("Coffe").value)*20;
    var total =idli + Pulav + Poori + Dosa + Coffe

    var bill = document.getElementById("total");
    bill.innerHTML = "Yout Total Amount is :"+" "+total;

    
}