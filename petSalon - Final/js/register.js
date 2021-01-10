var salon={                    //<------- How to create an object array
    name:"The Fashion Pet",     //<------- EACH PROPERTY MUST HAVE A COLEN : THE VALUE NEED A COMMA
    address:{                    //<------- CREATING AN OBJECT INSIDE OF AN OBJECT USE PROERTY,:,{}&, //<------- 
        number:  "23",
        street: "University Rd.",
        city:"Silver Back",
        state:"Ny",
        zip: "20001",

    },
    hours:{
        open:"9:00 a.m.",
        close: "5:00 p.m",
    },
    pets: [],               //<-------THIS IS A BLANK ARRAY INSIDE AN OBJECT; OBJECTS ARE PUSHED INSDE HERE FOR THE  FOR LOOP INSIDE THE REGIISTER FUNCTION 
    // let clientName = [];
    // for(let i=0;i<salon.pets.length;i++){
    //     clientName.push(salon.pets[i].name);
    // }
};



function displayOfficeInfo(){
    var {name,
        hours:{open,close},
        address:{number,street,city,state,zip},
    }=salon;      //<------- THIS IS A DYNAMIC WAY TO DISPLAY THE OBJECT
document.getElementById("footer-info").innerHTML= `                                         
<p>
    ${name} opens at ${open} and it close at ${close} from Monday to Friday <br>  
    ${number}  ${street} ${city} ${state} ${zip} 
</p>`;                                                                            //<-------USE THIS TO CHANGE THE HTML id tag html Text on the webpage
}


function getPetsFromServer(){
var scooby = new Pet(" Scooby","dog",50, "Male", "Dane", "Full Service", "Shaggy","555-555-555" , "cash");


var kilo = new Pet(" Kilo","bird",50, "Male", "Dane", "Full Service", "Shaggy","555-555-5555" , "cash");
  
                                                       //<------- THESE ARE STATIC PETS THE OBJECT CONSTRUCTOR WILL COMPLETE THIS TASK     
var mike = new Pet(" Mike","horse",50, "Male", "Dane", "Full Service", "Shaggy", "555-555-555", "cash");


salon.pets.push(scooby);
salon.pets.push(kilo);
salon.pets.push(mike);
}


function register(){    //<-------  THIS CREATS THE PET AUTOMATICALLY  USING VERABLES (var) TO STORE THE INPUT REQUESTED FROM THE USER ON THE FROM ON THE HTML SIDE.
    var inputName=document.getElementById("petName").value;
    var inputAnimalType=document.getElementById("animalType").value
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputService=document.getElementById("petService").value;
    var inputOwner=document.getElementById("ownerName").value;
    var inputPhone=document.getElementById("contactPhone").value;
    var inputPaymentMethod=document.getElementById("paymentType").value;
    console.log(inputAnimalType);

    var thePet = new Pet(inputName, inputAnimalType, inputAge, inputGender, inputBreed, inputService, inputOwner, inputPhone, inputPaymentMethod,); 
    
    //<------- THE INPUT WILL BE COMPILED AS A GROUP IN A (var) TO CREATE THE NEW (thePET)  


    salon.pets.push(thePet);    //<------- THIS WILL PUSH THE INFORMATION TO THE ARRAY ABOVE LINE (15)
    console.log(thePet);
    console.log(salon.pets);
    displayPets();
    profitCalculation();
    countPetsByType();
}

function search(){
     var text = document.getElementById("textSearch").value;
     document.getElementById("pets").innerHTML = "";
     
     for (let i = 0; i < salon.pets.length; i++){
         var pet = salon.pets[i];
     

     if(
         pet.name.toLowerCase().includes(text.toLowerCase()) ||
         pet.owner.toLowerCase().includes(text.toLowerCase()) ||
         pet.phone.includes(text.toLowerCase())
     ){
         displayPet(pet);
     }
 }
}

function searchByType(animalType){
    console.log("searching by: " + animalType);
    
}



function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++)
    sum=sum+salon.pets[i].price;{

    }
     document.getElementById("profits").innerHTML = 
     `<h4> Profits:$ ${sum}; </h4>`;

}

function countPetsByType(){
    let dog = 0;
    let cat = 0;
    let bird = 0;
    let horse = 0;

    for (let i = 0 ; i < salon.pets.length; i++){
        switch (salon.pets[i].animalType) {
            case "dog":
                dog++;
                break;
            case "cat":
                cat++;
                break;
            case "bird":
                bird++;
                break;
            case "horse":
                horse++;
                break;
        }
    }

    document.getElementById("dog-count").innerText = dog;
    document.getElementById("cat-count").innerText = cat;
    document.getElementById("bird-count").innerText = bird;
    document.getElementById("horse-count").innerText = horse;
}

function initMap(){


}

function init() {
console.log("Document ready!!");

displayOfficeInfo();
getPetsFromServer();
countPetsByType();
displayPets();
profitCalculation();


}

window.onload = init;





