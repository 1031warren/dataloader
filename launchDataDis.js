//a class for setting up the data from dataloader 
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eC02,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magenticY,
        magenticZ,
        gyroX,
        gyroY,
        gyroZ,

     ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magenticX = magenticX;
        this.magenticY = magenticY;
        this.magenticZ = magenticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY; 
        this.gyroX = gyroZ;

     }

}

//the getData function extacts the data from the dataloader.js file 
function getData(){
    var loadedData = loadData();
    return loadedData;

}

//function to setup data in the table 
function dataRow(legend, value, units){
     msg = "<td>";
     msg += legend; 
     msg += ": </td><td>";
     msg += value;
     msg += " " + units;
     msg += "</td>";
     return msg; 

}

function updateDisplay(){
    console.log("updateDisplay()started")
    //record and displaytime data
    theTime = new Date();

    //new if then statement style cond ? ifTrue : ifFalse
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" +  theTime.getMinutes() : thweTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
      //update the on screen time
      document.getElementById("clocktime").innerHTML = theTime.getMinutes()) +":" + (theTime.getMinutes() <10 ? "0" +

     //update table 
    var timeRead = data[index].time_seconds;

    if (timeRead >=10){
        document.getElementById("dataTable").rows["seconds"].innerHTML =
           dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("datatable").rows["latitude"].innerHTML =
           dataRow("Latitude", data[index].latitude,"");
        document.getElementById("datatable").rows["longitude"].innerHTML =
          dataRow("gps altitude", data[index].longitude,"");  
        document.getElementById("datatable").rows["bmp_altitude"].innerHTML =
          dataRow("bmp_altitude", data[index].bmpSensor_pressure,"");
        document.getElementById("datatable").rows["bmp_pressure"].innerHTML =
          dataRow("bmp pressure", data[index].latitude,"");
        document.getElementById("datatable").rows["bmp_temprature"].innerHTML =
          dataRow("bmp_temperature", data[index].bmpSensor_temp,"");
        document.getElementById("datatable").rows["dig_temperature"].innerHTML =
          dataRow("dig_temperature", data[index].digSensor_temp,"");
        document.getElementById("datatable").rows["css_temperature"].innerHTML =
          dataRow("css_temperature", data[index].cssSensor_temp,"");
        document.getElementById("datatable").rows["css.eCO2"].innerHTML =
          dataRow("css.eCO2", data[index].cssSensor_eC02,"");
        document.getElementById("datatable").rows["css_TVOC"].innerHTML =
          dataRow("css_TVOC", data[index].cssSensor_TVOC,"");
        document.getElementById("datatable").rows["UV"].innerHTML =
          dataRow("UV", data[index].UV,"");
        document.getElementById("datatable").rows["accelX"].innerHTML =
          dataRow("accelX", data[index].accelX,"");
        document.getElementById("datatable").rows["accelY"].innerHTML =
          dataRow("accelY", data[index].accelY,"");
        document.getElementById("datatable").rows["accelZ"].innerHTML =
          dataRow("accelZ", data[index].accelZ,"");
        document.getElementById("datatable").rows["magneticX"].innerHTML =
          dataRow("magneticX", data[index].magneticX,"");
        document.getElementById("datatable").rows["magneticY"].innerHTML =
          dataRow("magneticY", data[index].magneticY,"");
        document.getElementById("datatable").rows["magneticZ"].innerHTML =
          dataRow("magneticZ", data[index].magneticZ,"");
        document.getElementById("datatable").rows["gyroX"].innerHTML =
          dataRow("gyroX", data[index].gyroX,"");
        document.getElementById("datatable").rows["gyroY"].innerHTML =
          dataRow("gyroY", data[index].gyroY,"");
        document.getElementById("datatable").rows["gyroZ"].innerHTML =
          dataRow("gyroZ", data[index].gyroZ,"");
    
} 

if(index < 500){
     index++;
}

}