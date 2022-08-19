// Code your solution in this file! 

function distanceFromHqInBlocks(pickupPoint){
    if (pickupPoint >42){
        return pickupPoint - 42;
    }
    else{
        return Math.abs(pickupPoint - 42)
    }
    
}
function distanceFromHqInFeet(pickupPoint){
    return distanceFromHqInBlocks(pickupPoint) *264;
}

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination-start)*264
    }
    else{
        return(start-destination) *264;
    }
}
function calculatesFarePrice(start,destination){
    const distanceTocharge = distanceTravelledInFeet(start,destination);
    if (distanceTocharge <= 400){
        return 0;
    }
    else if (distanceTocharge > 400 && distanceTocharge <= 2000){
        return 0.02 *(distanceTocharge - 400);
    }
    else if (distanceTocharge >2000 && distanceTocharge <= 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }

}

