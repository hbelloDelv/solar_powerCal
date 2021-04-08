
//loading the loads icons
let loadIcons = document.getElementById('loadIcons');

//loads icons
let imag_1 = document.createElement('img');
imag_1.setAttribute('src', './images/imag1.png');
imag_1.setAttribute('alt', 'imag1');
imag_1.style.marginRight = '10px';
imag_1.style.padding = '10px';
loadIcons.appendChild(imag_1);

let imag_2 = document.createElement('img');
imag_2.setAttribute('src', './images/imag2.png');
imag_2.setAttribute('alt', 'imag2');
imag_2.style.marginRight = '10px';
imag_2.style.padding = '10px';
loadIcons.appendChild(imag_2);


//Gloabal variables
let loadFan;
let fanWatt;

let loadPressingIron;
let PressingIronWatt;

let total_loadfan_fanWatt = parseInt(loadFan) * parseInt(fanWatt);
let total_loadPressingIron_PressingIronWatt = parseInt(loadPressingIron) * parseInt(PressingIronWatt);

//load prompts for fan
imag_1.onclick=function(){
    let itemSelectedDiv = document.getElementById('itemSelectedDiv');
    let itemSelected = document.createElement('img');
    itemSelected.setAttribute('src', './images/imag1.png');
    itemSelected.setAttribute('alt', 'bulb');
    itemSelected.style.width = '40px';
    itemSelected.style.height = '40px';
    itemSelectedDiv.appendChild(itemSelected);

    
    loadFan = prompt("Enter number of fan");
    fanWatt = prompt("Enter waltage");
    total_loadfan_fanWatt = loadFan * fanWatt;
    //total load div
   
    let totalLoadDiv = document.createElement('div');
    totalLoadDiv.textContent = total_loadfan_fanWatt + "W";
    itemSelectedDiv.appendChild(totalLoadDiv);

    
}

//load prompts for pressing Iron
imag_2.onclick=function(){
    let itemSelectedDiv = document.getElementById('itemSelectedDiv');
    let itemSelected = document.createElement('img');
    itemSelected.setAttribute('src', './images/imag2.png');
    itemSelected.setAttribute('alt', 'Pressing Iron');
    itemSelected.style.width = '40px';
    itemSelected.style.height = '40px';
    itemSelectedDiv.appendChild(itemSelected);

    
    loadPressingIron = prompt("Enter number of Pressing Iron");
    PressingIronWatt = prompt("Enter waltage");
    total_loadPressingIron_PressingIronWatt = loadPressingIron * PressingIronWatt;
    //total load div
   
    let totalLoadDiv = document.createElement('div');
    totalLoadDiv.textContent = total_loadPressingIron_PressingIronWatt  + "W";
    itemSelectedDiv.appendChild(totalLoadDiv);

}
 

    
 







/*
imag_2.onclick=function(){
    let itemSelectedDiv = document.getElementById('itemSelectedDiv');
    let itemSelected = document.createElement('img');
    itemSelected.setAttribute('src', './images/imag2.png');
    itemSelected.setAttribute('alt', 'bulb');
    itemSelected.style.width = '40px';
    itemSelected.style.height = '40px';
    itemSelectedDiv.appendChild(itemSelected);

    let table = document.createElement('table');
    let row = table.insertRow(0);
    let td = row.insertCell(0)

    let row1 = table.insertRow(-1);
    let td1 = row1.insertCell(-1)


    td.innerHTML = "hello";
    td1.innerHTML = "bello"
    itemSelectedDiv.appendChild(td);
    itemSelectedDiv.appendChild(td1);
    console.log(td);
    console.log(td1);
}

*/
let submitButton = document.getElementById('submitButton');
submitButton.onclick=function(){
let totaLoads = total_loadfan_fanWatt  + total_loadPressingIron_PressingIronWatt;


console.log(totaLoads);


let displayTotalLoad = document.getElementById('displayTotalLoad');
let displayTotalLoadFigure = document.createElement('p');
displayTotalLoadFigure.textContent = totaLoads + "W";
displayTotalLoad.appendChild(displayTotalLoadFigure);

    if(totaLoads <= 10000){
    
        let solarPanelDiv = document.getElementById('solarPanelDiv');
        let chargeControlerDiv = document.getElementById('chargeControlerDiv');
        let inverterDiv = document.getElementById('inverterDiv');
        let batteryDiv = document.getElementById('batteryDiv');
        
        //creating solar panels dom
        let solarPanel = document.createElement('img');
        solarPanel.setAttribute('src', './equipmentsImages/solarPanel5.jpg');
        solarPanel.setAttribute('alt', 'solar_panel');
        solarPanel.style.width = '70px';
        solarPanel.style.height = '70px';
        solarPanelDiv.appendChild(solarPanel);
        
        //creating solar panels figure
        let solarPanelFigure = document.createElement('p');
        solarPanelFigure.textContent = "150W Panel"
        solarPanelDiv.appendChild(solarPanelFigure);
    
        //creating charge controller dom
        let chargeController = document.createElement('img');
        chargeController.setAttribute('src', './equipmentsImages/solarChargeController.png');
        chargeController.setAttribute('alt', 'charge_controller');
        chargeController.style.width = '70px';
        chargeController.style.height = '70px';
        chargeControlerDiv.appendChild(chargeController);
        //creating solar panels figure
        let chargeControllerFigure = document.createElement('p');
        chargeControllerFigure.textContent = "MPPT charge controller"
        chargeControlerDiv.appendChild(chargeControllerFigure);
    
    
        //creating solar Inverter dom
        let inverter = document.createElement('img');
        inverter.setAttribute('src', './equipmentsImages/solarInverter2.png');
        inverter.setAttribute('alt', 'inverter');
        inverter.style.width = '70px';
        inverter.style.height = '70px';
        inverterDiv.appendChild(inverter);
        //creating solar inverter figure
        let inverterFigure = document.createElement('p');
        inverterFigure.textContent = "3.5Kva Inverter"
        inverterDiv.appendChild(inverterFigure);
        
        
        //creating solar battery dom
        let battery = document.createElement('img');
        battery.setAttribute('src', './equipmentsImages/solarBattery4.png');
        battery.setAttribute('alt', 'battery');
        battery.style.width = '70px';
        battery.style.height = '70px';
        batteryDiv.appendChild(battery);
        //creating solar battery figure
        let batteryFigure = document.createElement('p');
        batteryFigure .textContent = "200 arms 12V Battery"
        batteryDiv.appendChild(batteryFigure );
    }else{

        alert("Sorry no equipment recommended at this time")

    }

}