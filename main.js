const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

function ParseCustomers(){
  //go through all customers in JSON
  var TopMargins      = 36;  // 0.5  inches
  var SideMargins     = 14;  // 0.19 inches
  var VerticalPitch   = 72;  // 1    inch
  var HorizontalPitch = 198; // 2.75 inches
  var LabelHeight     = 72;  // 1    inch
  var LabelWidth      = 190; // 2.63 inches
  var LabelsPerPage   = 30;
  var LabelRows       = 10;
  var LabelCols       = 3;
  var LabelCounter    = 0;
  var strLines = str.split("\n");
  for (var i in strLines){
    var obj = JSON.parse(strLines[i]);
    CreateLabels(LabelCounter,obj);
    if(LabelCounter => (LabelRows * LabelCols)-1){
      LabelCounter = 0;
    }
  }
}

function AddCustomer(){
  
}

function CreateLabels(LabelCounter, CustomerObj){

}