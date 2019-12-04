function loadApp(){
    "use strict";

    function buildBaits(response){
        $(".bait-output").empty();

        var $baits = response;

        $baits.forEach((item)=>{
            if(item !== null){
                var bait = item.name;
                var p = $("<p>");
                p.html(bait);
                $(".bait-output").append(p);
            }
        });
    }

    function getBaits(){
        $.getJson("baits.json", (response)=>{
            console.log("rsponse = "+response.toSource());
            buildBaits(repsonse);
        });
    }

    getBaits();
};


$(document).ready(loadApp);