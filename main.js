let icon =document.getElementById("icon");
let inputSearch = document.querySelector('[type="search"]');
icon.addEventListener("click",function(){
    if(inputSearch.style.visibility == "visible")
        {
            inputSearch.style.visibility="hidden";
        }
        else{
            inputSearch.style.visibility="visible"
        }
    })  

let upButton = document.getElementById("up");

window.onscroll = function(){
    if(window.scrollY>400)
        {
            upButton.style.display="inline";
        }
    else{
        upButton.style.display="none";
    }   
}
upButton.onclick = function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
}
let iPhone_14_Pro = document.querySelector("[name='iPhone 14 Pro']");
let iPhone_12_Pro = document.querySelector("[name='iPhone 12 Pro']");
let iPhone_12 = document.querySelector("[name='iPhone 12']");
let Realme_10 = document.querySelector("[name='Realme 10']");
let Realme_C58 = document.querySelector("[name='Realme C58']");
let Realme_9i = document.querySelector("[name='Realme 9i']");
let Samsung_A30 = document.querySelector("[name='Samsung A30']");
let Samsung_S24Ultra = document.querySelector("[name='Samsung S24Ultra']");
let Samsung_A20 = document.querySelector("[name='Samsung A20']");
let buttonArray = [iPhone_14_Pro,iPhone_12_Pro,iPhone_12,Realme_10,Realme_C58,Realme_9i,Samsung_A30,Samsung_S24Ultra,Samsung_A20];
let buysArray;

if(window.localStorage.getItem("Buys"))
    {
        buysArray = JSON.parse(window.localStorage.getItem("Buys"));
        showData();
    }
else{
    buysArray = [];
}

for(let i=0;i<buttonArray.length;i++)
    {
        buttonArray[i].addEventListener("click",function(ele){let newBuys ={
            Name:ele.target.name,
            Price:ele.target.value
        };
        buysArray.push(newBuys);
        window.localStorage.setItem("Buys",JSON.stringify(buysArray));
        showData();
    })       
}
function showData(){
    let table = '';
    for(let i=0;i<buysArray.length;i++){
    table +=`<table >
                <tr>
                    <td>${buysArray[i].Name}</td>
                    <td>${buysArray[i].Price}</td>
                    <td><button onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            </table>`
    }
    document.getElementById("tableOfBuys").innerHTML=table;
        let countOfItem = document.getElementById("countOfItem");
        countOfItem.innerHTML="";
        if(buysArray.length==0)
            {
                countOfItem.appendChild(document.createTextNode(`You are No buy any Item`))
            }
            else{
            countOfItem.appendChild(document.createTextNode(`You Will Buy (${buysArray.length})`));
            }   
}
function deleteData(i){
    buysArray.splice(i,1);
    window.localStorage.setItem("Buys",JSON.stringify(buysArray));
    showData();
}
let moveImage = document.getElementById("moveImage");
let ImageArray = ["Images/i phone images/download one.jpeg","Images/i phone images/download one.jpeg","Images/i phone images/download two.jpeg",
"Images/i phone images/download three.jpeg","Images/realme images/download realme one.jpeg","Images/realme images/download realme two.jpeg",
"Images/realme images/download realme three.jpeg","Images/samsung images/download samsung one.jpeg","Images/samsung images/download samsung two.jpeg",
"Images/samsung images/download samsung three.jpeg"];
let i=0;
function showImage(){
    moveImage.src = ImageArray[i];
    if(i==ImageArray.length-1)
        {
            i=0;
        }
    else{
        i++;
    }
    setTimeout(function(){
        showImage()
    },2000)    
}
showImage();

