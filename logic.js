
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



//load prompts
imag_1.onclick=function(){
    let itemSelectedDiv = document.getElementById('itemSelectedDiv');
    let itemSelected = document.createElement('img');
    itemSelected.setAttribute('src', './images/imag1.png');
    itemSelected.setAttribute('alt', 'bulb');
    itemSelected.style.width = '40px';
    itemSelected.style.height = '40px';
    itemSelectedDiv.appendChild(itemSelected);

    
    let loadBuld = prompt("Enter number of buld");
    let bulbWatt = prompt("Enter waltage");
    let toal_loadBulb_bulbWatt = loadBuld * bulbWatt;
    //total load div
   
    let totalLoadDiv = document.createElement('div');
    totalLoadDiv.textContent = toal_loadBulb_bulbWatt + "W";
    itemSelectedDiv.appendChild(totalLoadDiv);

    
    if(toal_loadBulb_bulbWatt <= 80){
    
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

        prompt("Sorry no equipment recommended at this time")

    }
 
}







imag_2.onclick=function(){
    let itemSelectedDiv = document.getElementById('itemSelectedDiv');
    let itemSelected = document.createElement('img');
    itemSelected.setAttribute('src', './images/imag2.png');
    itemSelected.setAttribute('alt', 'bulb');
    itemSelected.style.width = '40px';
    itemSelected.style.height = '40px';
    itemSelectedDiv.appendChild(itemSelected);
/*
    //table element to be revisited
    let table = document.createElement('Table');
    let tblBody = document.createElement('tbody');
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    let cellContent = document.createTextNode(itemSelected)

    table.appendChild(tblBody);
    tblBody.appendChild(row);
    row.appendChild(cell);
    cell.appendChild(cellContent);
*/

}


