window.onload = function() {
  function Train(name, stations) {
    this.name = name;
    this.stations = stations;
  }

  Train.prototype.distance = function(board, exit) {
    board = this.stations.indexOf[board];
    exit = this.stations.indexOf[exit];
    return Math.abs(board - exit);
  };

  var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
  var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
  var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
  var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

  var lTrain = new Train('The L Train', lStations);
  var nTrain = new Train('The N Train', nStations);
  var sixTrain = new Train('The Six Train', sixStations);
  var gTrain = new Train('The G Train', gStations);

  var trains = [lTrain, nTrain, sixTrain, gTrain];

  function displayLines() {
    var trainNames = "";
    for ( var i = 0; i < trains.length; i++ ) {
      trainNames += trains[i].name + '\n';
    }
    return trainNames.trim();
  }

  var getOnTrain = prompt("(Give me a number) Which train do you want to take?" + displayLines());
  console.log(getOnTrain);

  // function displayStations(train) {
  //   var stationNames = "";
  //   var pickedTrain = trains[train];
  //   for ( var i = 0; i < pickedTrain.stations.length; i++ ) {
  //     stationNames += pickedTrain.stations[i] + '\n';
  //   }
  //   return stationNames.trim();
  // }

  function displayStations() {
    var train = null;
    for ( var j = 0; j < trains.length; j++ ) {
      if (trains[j].name === getOnTrain) {
        train = trains[j];
      }
    }
    var trainStations = "";
    for ( var k = 0; k < train.stations.length; k++ ) {
      trainStations += train.stations[k] + '\n';
    }
    return trainStations.trim();
  }

  var firstStop = prompt("(Give me a number) Which station are you at?" + displayStations());
  var secondStop = prompt("(Give me a number) Where are you getting off?" + displayStations());

  console.log(firstStop);
  console.log(secondStop);

  // all the outputs are string, lets calculate the distance!!!!
  function displayDistance() {
    var trainIndex = trains.indexOf(getOnTrain);
    console.log(trainIndex);
    var firstIndex = trains[getOnTrain].stations[firstStop];
    var secondIndex = trains[getOnTrain].stations[secondStop];
    var diff = Math.abs(firstIndex - secondIndex);
    console.log("From " + firstIndex + " to " + secondIndex + " takes " + diff + " stations.");
  }

  displayDistance();
}