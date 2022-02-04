//problem: 01
function anaToVori(ana) {
    //error handling
    if (isNaN(ana) || ana < 0) {
        return ("Please Insert A Valid  Number. For Example: 13,45,78 etc");
    }
    let vori = 0;
    // 16 ana = 1 vori
    vori = ana / 16 + vori;
    return vori;
}
let finalVori = anaToVori(32);
console.log(finalVori);



//problem: 02 
function pandaCost(quantityOfSingara, quantityOfSamusa, quantityOfJilapi) {
    //error handling
    if (isNaN(quantityOfSingara) || isNaN(quantityOfSamusa) || isNaN(quantityOfJilapi) || quantityOfSingara < 0 || quantityOfSamusa < 0 || quantityOfJilapi < 0) {
        return ("Please Insert A Valid  Number. For Example: 13,45,78 etc");
    }
    const perSingaraPrice = 7;
    const perSamusaPrice = 10;
    const perJilapiPirce = 15;
    let totalSingaraPrice = quantityOfSingara * perSingaraPrice;
    let totalSamusaPrice = quantityOfSamusa * perSamusaPrice;
    let totalJilapiPrice = quantityOfJilapi * perJilapiPirce;
    const totalCost = totalSingaraPrice + totalSamusaPrice + totalJilapiPrice;
    return totalCost;

}
const pandaPrice = pandaCost(2, 2, 3);
console.log(pandaPrice);


//problem: 03

function picnicBudget(participantNumber) {
    //error handling
    if (isNaN(participantNumber) || participantNumber < 0) {
        return ("Please Insert A Valid  Number. For Example: 100,145,208 etc");
    }

    if (participantNumber <= 100) {
        let totalPicnicCost = participantNumber * 5000;
        return totalPicnicCost;
    }
    else if (participantNumber <= 200) {
        let firstRangePrice = 100 * 5000;
        let secondRangePrice = (participantNumber - 100) * 4000;
        let totalPicnicCost = firstRangePrice + secondRangePrice;
        return totalPicnicCost;
    }
    else {
        let firstRangePrice = 100 * 5000;
        let secondRangePrice = (200 - 100) * 4000;
        let thirdRangePrice = (participantNumber - 200) * 3000;
        let totalPicnicCost = firstRangePrice + secondRangePrice + thirdRangePrice;
        return totalPicnicCost;
    }
}

let totalPicnicCost = picnicBudget(400);
console.log(totalPicnicCost);

//problem: 04

function oddFriend(friendsArray) {

    //error handling
    for (let i = 0; i < friendsArray.length; i++) {
        if (typeof friendsArray[i] == 'number') {
            return ("Please Enter Right Array; For Example:['mehedi','rubel','hasan']");
        }
    }
    if (typeof friendsArray == 'number') {
        return ("Please Enter Right Array; For Example:['mehedi','rubel','hasan']");
    }


    let finalOddFriend = '';
    for (let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].length % 2 != 0) {
            finalOddFriend = finalOddFriend + friendsArray[i];
            return finalOddFriend;
        }
    }
}

let searchOddName = oddFriend(['mehedi', 'rubel', 'hasan', 'khan']);
console.log(searchOddName);
