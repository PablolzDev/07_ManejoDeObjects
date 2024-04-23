const pet = {

    name: "myke",
    age: new Date("2018/05/14"),
    weight: "32kg",
    race: "bulldog",
    owner: {
        name: "pablo",
        lastName: "lopez",
        DocumentType: "cc",
        documentId: "1000874140",
    },
    showNamePet: function () {
        console.log(`El nombre es: ${this.name} Y su edad es: ${this.age}`)
    },
    dataOwner: function() {
        return `los datos del propietario son : ${this.owner.name}
        ${this.owner.lastName}
        ${this.owner.DocumentType}
        ${this.owner.documentId}`
    }



}

console.log(pet.dataOwner())
pet.showNamePet()