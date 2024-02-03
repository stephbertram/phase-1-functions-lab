// Returns the number of blocks from Scuber's headquarters to the pickup location.

function distanceFromHqInBlocks (pickupLocation) {
    return Math.abs(42-pickupLocation)
}

// Returns the number of feet from Scuber's headquarters to the pickup location.

function distanceFromHqInFeet (pickupLocation) {
    return distanceFromHqInBlocks (pickupLocation) * 264
}

// Customers want Scuber to calculate the number of feet travelled based on the distance

function distanceTravelledInFeet (pickupLocation, destination) {
    return Math.abs(pickupLocation - destination) * 264
}

// Customer fare

function calculatesFarePrice (pickupLocation, destination) {
    const distance = distanceTravelledInFeet (pickupLocation, destination)
    if (distance < 400) {
        return 0;
     } else if (distance <2000) {
        return ((distance-400) * 0.02);
     } else if (distance <2500) {
        return 25;
     } else {
        return 'cannot travel that far';
     } 
}