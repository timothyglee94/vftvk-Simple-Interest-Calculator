function compute()
{
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    /*validation check */ 
    if(principle < "1")
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    /*calulating interest */

    var interest = principle*years*rate/100;
    
    /*calculating correct year*/
    var year = parseInt(years)+2021;

    /*binding the result*/
    var result = document.getElementById("result");

    result.innerHTML = "<br/>If you deposit <mark>" + principle +
    "</mark>, <br/>at an intertest rate of <mark>" + rate + "%</mark>." + 
    "<br/>You will recieve an amount of <mark>" + interest + "</mark>," + 
    "<br/>in year <mark>" + year +"</mark>";

}

/* onchange when user moves range slider*/
window.onload = function() {
    document.getElementById("rate").onchange = function(){rateChanger()};
}

function rateChanger(){
    var rate = document.getElementById("rate").value;
    document.getElementById("intrate").textContent = rate + "%";
}
