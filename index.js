const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
} 
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
const selectingDrivers = 
[
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]; 
function createFareMultiplier (fare) {

   return function multiplier (fare) {
   return  fare * fare
    }
} 
const fareDoubler = function(fare){
 createFareMultiplier(fare);

 return fare*2;

}


const fareTripler = function(fare){
createFareMultiplier(fare);

return fare*3;
}
function selectDifferentDrivers (drivers, selectFunction)
  { return selectFunction(drivers); 
  }
