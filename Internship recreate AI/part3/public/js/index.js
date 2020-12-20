

const main = document.querySelector('.main');
const notSearched = document.querySelector('.not-searched');
const searchBox = document.getElementById('search-box');

function searchClick(){
    main.style.display = "block";
    notSearched.style.display = "none";
    console.log('clicked',searchBox.value)
    const id = searchBox.value;
    const url = `https://cricapi.com/api/playerStats?apikey=FvaHvGs4pKgVWXtmNaNaCadQqOv2&pid=${id}`;
fetchFunction(url)
// 359200

    
}










const playerImage = document.querySelector('.player-image');
const playerName = document.querySelector('.player-name');
const countryImage = document.querySelector('.country-image');
const playerAge = document.querySelector('.player-age');
const playerBorn = document.querySelector('.player-born');
const playerBattingStyle = document.querySelector('.player-batting-style');
const playerBowlingStyle = document.querySelector('.player-bowling-style');


const middleP = document.querySelector('.middle').querySelectorAll('p');
console.log(middleP);
const bottomP = document.querySelector('.bottom').querySelectorAll('p');
console.log(bottomP);

const middle2P = document.querySelector('.middle2').querySelectorAll('p');
const bottom2P = document.querySelector('.bottom2').querySelectorAll('p');



function fetchFunction(url){




    fetch(url).then(response=> response.json()).then(result => {


        playerImage.src = result.imageURL;
        playerName.innerHTML = result.name;
        playerAge.innerHTML = result.currentAge;
        playerBorn.innerHTML = result.born;
        playerBattingStyle.innerHTML = result.battingStyle;
        playerBowlingStyle.innerHTML = result.bowlingStyle;
       
    
    // batting code start here
    
        const batting = result.data.batting;
        const firstClass = batting.firstClass;
        const listA = batting.listA;
        const firstClassValue = Object.values(firstClass);
        const listAValue = Object.values(listA);
        console.log(listAValue)
    
    
      firstClassValue.forEach((element ,index ) => {
            let i = index + 1;
            middleP[i].innerHTML = element;
    
      });
    
    
      listAValue.forEach((element2 ,index2 ) => {
        let i = index2 + 1;
        console.log(bottomP[i])
       bottomP[i].innerText = element2;
    
    });
    
    
    // bating code end here
    
    
    
    const bowling = result.data.bowling;
    const firstClass2 = bowling.firstClass;
    const listA2 = bowling.listA;
    const firstClassValue2 = Object.values(firstClass2);
    const listAValue2 = Object.values(listA2);
    
    
    firstClassValue2.forEach((element ,index ) => {
        let i = index + 1;
        middle2P[i].innerHTML = element;
    
    });
    
    
    listAValue2.forEach((element2 ,index2 ) => {
    let i = index2 + 1;
    bottom2P[i].innerText = element2;
    
    });
    
    
    // bowling code start here 
    
    
    
    
    
    
    
    
        
    
    
    });



}


