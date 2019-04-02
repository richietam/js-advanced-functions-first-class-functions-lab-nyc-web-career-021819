// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {

  return [drivers[drivers.length-2], drivers[drivers.length-1]]

}

selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value
    };
};

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2
}


const fareTripler = function (createFareMultiplier) {
  return createFareMultiplier * 3
}

const fetchSpecifiedDrivers = function(arrayOfDrivers, thing) {
  return thing(arrayOfDrivers)
};
