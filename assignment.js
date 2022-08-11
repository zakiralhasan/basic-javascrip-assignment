/*Answer to the quiestion number one.*/

function radianToDegree(radianNumber){

    if(isNaN(radianNumber)){
        return 'Please enter a numeric value.';
    }else{
        const degreeNumber = radianNumber * (180 / Math.PI);
        return parseFloat(degreeNumber.toFixed(2));
    }
};

const x = radianToDegree(199);
console.log(x);
console.log(typeof x);


/*Answer to the quiestion number two.*/

function isJavaScriptFile(fileName){
    if(fileName.endsWith('.js')){
        return true;
    }else{
        return false;
    }
};

const y = isJavaScriptFile('ram.js');
console.log(y);

/*Answer to the quiestion number three.*/

function oilPrice(dieselUnit, petrolUnit, octaneUnit){
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
};

const z = oilPrice(0,2,3);
console.log(z);


/*Answer to the quiestion number four.*/

function publicBusFare(numberOfPerson){

    const perTicketPriceForPublicBus = 250;

    if(isNaN(numberOfPerson)){
        // validation pert 
        return 'Please enter a numaric value.';

    }else if(numberOfPerson >= 50){
        const extraPersonAfterBusFull = numberOfPerson % 50;

        if(extraPersonAfterBusFull >= 11){
            const extraPersonAfterMicrobusFull = extraPersonAfterBusFull % 11;

            return extraPersonAfterMicrobusFull * perTicketPriceForPublicBus;

        }else{
            return extraPersonAfterBusFull * perTicketPriceForPublicBus;
        }

    }else if(numberOfPerson >= 11){
        const extraPersonAfterMicrobusFull = numberOfPerson % 11;

        return extraPersonAfterMicrobusFull * perTicketPriceForPublicBus;

    }else{
        return numberOfPerson * perTicketPriceForPublicBus;
    }
};

const w = publicBusFare(365);
console.log(w);


/*Answer to the quiestion number five.*/


const object1 = { name: 'monir', friend: 'sujon'};
// const object2 = { name: 'sujon', friend: 'monir'};
// const object2 = {name: 'zakir', friend: 'monir'};
const object2 = ['sujon', 'monir'];

console.log(Array.isArray(object2));


function isBestFriend(parameter1,parameter2){

    const datatype1 = typeof parameter1;
    const datatype2 = typeof parameter2;

    if(datatype1 == 'object' && datatype2 == 'object'){

        if(parameter1.name === parameter2.friend && parameter2.name === parameter1.friend){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Please enter a pair of object values.'
    }
    
};

const v = isBestFriend(object1, object2);
console.log(v);





