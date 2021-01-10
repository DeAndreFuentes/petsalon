function displayPets(){
       // clear the field
       document.getElementById("pets").innerHTML = "";
       document.getElementById("textSearch").value = "";
      //travel the array
        for(var i=0;i<salon.pets.length;i++){
              //create the template
              displayPet(salon.pets[i]);
        }
    }

            //  console.log(salon.pets[i]);
        function displayPet(pet){
            if(pet.service === "Full Service"){
                 pet.price=20.00;
            }else if(pet.service === "Shower"){
                pet.price=10.00;
            }else if(pet.service ==="Nails cut"){
                pet.price=08.00;
            }else if(pet.service === "Hair cut"){
                pet.price=12.00;
            
            }
                    
             var icon = '';
             //var aType = pet.animalType;
               if(pet.animalType === "dog"){
                icon = '<i class="animal-icon fas fa-dog"></i>';

             } else if (pet.animalType === "cat"){
                 icon = '<i class="animal-icon fas fa-cat"></i>';

             }else if (pet.animalType === "bird"){
                 icon = '<i class="animal-icon fas fa-kiwi-bird"></i>'; 

             }else if (pet.animalType === "horse"){
                 icon = '<i class="animal-icon fas fa-horse"></i>'; 
             }

         
             
                    var syntax = `
                        <div class="pet">
                        <h3> ${pet.name} </h3>
                         <label>  ${icon} ${pet.animalType}  </label> 
                         <p>Age:  ${pet.age} </p>
                         <p>Gender:  ${pet.gender} </p>
                         <p>Breed:  ${pet.breed} </p>
                         <p>Service:  ${pet.service} </p>
                         <p>Price:  ${pet.price} </p>
                         <p>Owner:  ${pet.owner} </p>
                         <p>Phone:  ${pet.phone} </p>
                         <p>Payment Type:  ${pet.paymentMethod} </p>
                         <p><button id="${id}" onclick="deleteItem(id)">  Delete </button></p>
                         
                 </div>`;

                 

                 document.getElementById("pets").innerHTML +=`<li id="${id}">${syntax}</li>`;

                 id ++;
            }

            let id = 1;
            function deleteItem(id) {
   
                document.getElementById(`${id}`).style.display="none";
            }
            
      

      // display the template in the html

      // profitCalculation();


// display();
//use the function 