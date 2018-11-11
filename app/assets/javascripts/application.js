// // This is a manifest file that'll be compiled into application.js, which will include all the files
// // listed below.
// //
// // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// // vendor/assets/javascripts directory can be referenced here using a relative path.
// //
// // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// // compiled file. JavaScript code in this file should be added after the last require_* statement.
// //
// // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// // about supported directives.
// //
// //= require rails-ujs
// //= require activestorage
// //= require turbolinks
// //= require_tree .

// // manual
// //= require_tree .

// // (desired - current) * current lp factor * lp gain per game 
// //     let division = new Array();
// //     divison_cost["Bronze 5"]= 0;
// //     divison_cost["Bronze 4"]= 20;
// //     divison_cost["Bronze 3"]= 40;
// //     divison_cost["Bronze 2"]= 60;
// //     divison_cost["Bronze 1"]= 80;
// //     divison_cost["Silver 5"]= 100;
// //     divison_cost["Silver 4"]= 125;
// //     divison_cost["Silver 3"]= 150;
// //     divison_cost["Silver 2"]= 175;
// //     divison_cost["Silver 1"]= 200;
// //     divison_cost["Gold 5"]= 225;
// //     divison_cost["Gold 4"]= 255;
// //     divison_cost["Gold 3"]= 285;
// //     divison_cost["Gold 2"]= 315;
// //     divison_cost["Gold 1"]= 345;
// //     divison_cost["Plat 5"]= 375;
// // // 
// //     let currentLp = new Array();
// //     currentLp_multipler["0-20"] = 1;
// //     currentLp_multipler["20-40"] = 0.8;
// //     currentLp_multipler["40-60"] = 0.6;
// //     currentLp_multipler["60-80"] = 0.4;
// //     currentLp_multipler["80-100"] = 0.2;
// //
//     let lpPerWin = new Array();
//     lpPerWin_multipler["20+"] = 1.5;
//     lpPerWin_multipler["15-19"] = 1.2;
//     lpPerWin_multipler["15-"] = 2;
// //
// // function getDivisonCost() 
// // {
// //     let divisonCost= 0;
// //     let theForm = document.forms["boostcalculator"];
// //     let startDivison = theForm.elements["startdivison"];

// //     divisonCost = division_cost[startDivison.value];

// // }
// // function calcBoostCost()
// // {
// //     // let getBoostCost = 0;
// //     //Get a reference to the form id=""
// //     let theForm = document.forms["boostcalculator"];
// //     //Get a reference to the select id=""
// //     let startDivison = theForm.elements["startdivison"];
// //     let endDivison = theForm.elements["enddivison"];
// //     // current lp
// //     let currentLp = theForm.elements["currentlp"];
// //     // lp per win
// //     let lpPerWin = theForm.elements["lpperwin"];
// //     // boostcost
// //     boostCost = 1 * currentLp_multipler[currentLp.value] * LpPerWin_multipler[lpPerWin.value];
// //     //display result
// //     // document.getElementbyId("totalPrice").innerHTML = "Total Price"+boostCost
// //     document.getElementbyId("totalPrice").value = boostCost
// // }

// function getLpMultiplier() 
// {
//     let lpMultiplier = 0;
//     let theForm = document.forms["boostcalculator"];
//     let selectedLp = theForm.elements["lpperwin"];

//     lpMultiplier = LpPerWin_multiplier[selectedLp.value];

//     document.getElementById('totalPrice').innerHTML =
//     "Total Price For Cake $"+cakePrice;
 


// }
function calc()
{
    let elo1 = document.getElementById("currentelo").value;
    let elo2 = document.getElementById("desiredelo").value;
    let currentelo = document.getElementById("currentLP").value;
    let lpwin = document.getElementById("lpwin").value;
    
    document.getElementById("total").innerHTML = 
    "Total: " + (elo2 - elo1) * currentelo * lpwin
}
