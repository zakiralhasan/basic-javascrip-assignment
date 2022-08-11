/*Answer to the question number one.*/

function radianToDegree(radianNumber){

    if(typeof radianNumber != 'number'){
        // validation part. 
        return 'Please enter a numeric value.';
    }else{
        const degreeNumber = radianNumber * (180 / Math.PI);
        return parseFloat(degreeNumber.toFixed(2));
    };
};


/*Answer to the question number two.*/

function isJavaScriptFile(fileName){
    // for validation check.
    if(typeof fileName == 'string'){

        if(fileName.endsWith('.js')){
            return true;
        }else{
            return false;
        };
    }else{
        return 'Please enter a string value.';
    };
};


/*Answer to the question number three.*/

function oilPrice(dieselUnit, petrolUnit, octaneUnit){
    // for validation check.
    if((typeof dieselUnit == 'number' && dieselUnit >=0) && (typeof petrolUnit == 'number' && petrolUnit >=0) && (typeof octaneUnit == 'number' && octaneUnit >=0)){
            // per unit price. 
    const dieselPricePerUnit = 114;
    const petrolPricePerUnit = 130;
    const octanePricePerUnit = 135;

    // individual item price total.
    const totalDieselPrice = dieselPricePerUnit * dieselUnit;
    const totalPetrolPrice = petrolPricePerUnit * petrolUnit;
    const totalOctanePrice = octanePricePerUnit * octaneUnit;

    // total cost of purchase. 
    const totalCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    return totalCost;
    }else{
        return 'Please enter a positive numeric value.';
    };
};


/*Answer to the question number four.*/

function publicBusFare(numberOfPerson){
    // per person ticket price for the public bus.
    const perTicketPriceForPublicBus = 250;

    if(typeof numberOfPerson != 'number' || numberOfPerson < 0){
        // validation pert. 
        return 'Please enter a positive numeric value.';

    }else if(numberOfPerson >= 50){
        const extraPersonAfterBusFull = numberOfPerson % 50;

        if(extraPersonAfterBusFull >= 11){
            const extraPersonAfterMicrobusFull = extraPersonAfterBusFull % 11;
            return extraPersonAfterMicrobusFull * perTicketPriceForPublicBus;

        }else{
            return extraPersonAfterBusFull * perTicketPriceForPublicBus;
        };

    }else if(numberOfPerson >= 11){
        const extraPersonAfterMicrobusFull = numberOfPerson % 11;
        return extraPersonAfterMicrobusFull * perTicketPriceForPublicBus;

    }else{
        return numberOfPerson * perTicketPriceForPublicBus;
    };
};



/*Answer to the question number five.*/

function isBestFriend(parameter1,parameter2){
    // for validation check. 
    const datatype1 = typeof parameter1;
    const datatype2 = typeof parameter2;

    if(datatype1 == 'object' && datatype2 == 'object'){

        if(parameter1.name === parameter2.friend && parameter2.name === parameter1.friend){
            return true;
        }else{
            return false;
        };
    }else{
        return 'Please enter a pair of object values.'
    };   
};
