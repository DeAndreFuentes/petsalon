
class Pet{      //<------- OBJECT CLASS
    constructor(
        nameA,
        animalTypeA,
        ageA,genderA,
        breedA,
        serviceA,
        ownerA,
        phoneA,
        paymentMethodA){     //<------- THESE INPUTS COME FROM THE FORM ON THE HTML PAGE example next line
        
        this.name=nameA;
        this.animalType=animalTypeA;
        this.age=ageA;
        this.gender=genderA;
        this.breed=breedA; 
        this.service=serviceA;                            //<-------   <label for ="services">Services</label>  ,   <label for="paymentMethod">Payment type</label> ,   <label for="name">Name</label>
        this.owner=ownerA;
        this.phone=phoneA;
        this.paymentMethod=paymentMethodA
        this.price=0
       
        
    }
}

