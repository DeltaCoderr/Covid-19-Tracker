let btn = document.getElementById("btn");
        
        btn.addEventListener("click",()=>{
        let text = document.getElementById("getText").value;
        //Credits to the API
            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
            })
           //Fetches the Information from the API in JSON format
            .then((getData)=>{
                console.log(getData);
                var content = document.querySelector(".data"); 

                var box = content.lastElementChild;  
                while (box) { 
                    content.removeChild(box); 
                    box = content.lastElementChild; 
                } 

                var index = 0;
              //Loop for testing purposes.     
                for(var i=0;i<185;i++){
                    if(getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        index = i;
                        break;
                    }
                }
                    //HTML starts here
                let data = document.querySelector(".data");
                data.innerHTML = `<div class="box">
                                <div class="head">
                                    <span>Covid-19 Cases in ${getData.Countries[index].Country}</span>
                                </div>
                                <div class="total">
                                    <div><p class='tag'>Total Confirmed</p> ${getData.Countries[index].TotalConfirmed}</div>
                                    <div><p class='tag'>Total Deaths</p> ${getData.Countries[index].TotalDeaths}</div>
                                    <div><p class='tag'>Total Recovered</p> ${getData.Countries[index].TotalRecovered}</div>
                                </div>
                                <div class="new">
                                    <div><p class='tag'>New Confirmed</p> ${getData.Countries[index].NewConfirmed}</div>
                                    <div><p class='tag'>New Deaths</p> ${getData.Countries[index].NewDeaths}</div>
                                    <div><p class='tag'>New Recovered</p> ${getData.Countries[index].NewRecovered}</div>
                                    </div>
                                </div>`;
            })
        })
