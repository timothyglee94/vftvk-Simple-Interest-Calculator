function compute()
{
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principle*years*rate/100
    
    document.getElementById("rate").onchange = function(){rateChanger()};

    function rateChanger(){
        var rate = document.getElementById("rate").value;
        span.innerText(rate);
    }
}
        