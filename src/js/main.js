const name = "lucas perez"

const coder = {
  id: "c001",
  name: "pablo",
  lastname: "lopez",
  birthDate: new Date("2003/09/14"),
  identificationNumber: "1000874140",
  email: "pablitodahiana@gmail.com",
  clan: "dell",
  location: {
    country: "colombia",
    state: "antioquia",
    adress: "cr 127 #34 ad 66 int 104"
  },
  phoneNumber: "3235184062",
  codebt: "carolina osorio",
  adress: "cr 127 #34 ad 66 int 104",
  workingDay: "completa",
  saludar: function () {
    console.log(`Hola mundo soy ${this.name}`);
  },
  showFullName: function () {
    console.log(``)
  }
};

console.groupCollapsed("Show Data")


console.log(coder.name, coder.lastname)
console.log(coder["name"], coder["lastname"])
console.log(coder.name, coder["lastname"])
coder.saludar()
coder.showFullName

console.log(coder);
console.groupEnd()




console.groupCollapsed("add data")

coder.emergency={}
// coder.contactName = "maria lopez"
console.log(coder);
// coder["backupPhoneNumber"] = "3207151749"
coder.emergency.contactName = "maria lopez"
coder.emergency["backupPhoneNumber"] = "3207151749"

//Agregar propiedades con configurabes
Object.defineProperty(coder, "teamLeader",
 {
    value:"javier",
    writable: false,//Permite que se actualice
    enumerable: true,//Permite su visibilidad
    configurable: false,//Permite que sea eliminada
})

//delete coder.teamLeader

//para usar variables o algo que voy a eliminar pero la necesitare despues
coder.teamLeader = undefined

console.groupEnd()



console.group("Update data")

coder.id = "M001"
coder["phoneNumber"] = "305688898"
console.log(coder)

console.groupEnd()




console.group("assign objects")

const objetoA = {
    a: "alpha",
    b: "bravo",
    c: "charlie"
}

const objetoB = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

console.log(objetoB)
console.log(objetoA)

Object.assign(objetoA,objetoB)


console.log(objetoB)
console.log(objetoA)

console.groupEnd()


console.group("Sum objects")

const objetoC = {
    a: "alpha",
    b: "bravo",
    c: "charlie"
}

const objetoD = {
    d: "delta",
    e: "echo",
    f: "foxtrot"
}

const objetoResultado = {...objetoC, ...objetoD}
console.log(objetoC)
console.log(objetoD)
console.log(objetoResultado)

console.groupEnd()




console.group("destructuring")

const person = {
    nameCoder: "javier",
    lastNameCoder: "combita",
    birthDateCoder: new Date("1998-04-23 14:00:00"),
    identificationNumberCoder: "109624738486",
    location: {
        countryCoder: "colombia",
        state: "antioquia",
        city: "medellin",
        adress: "cl 14 # 58-43",
    },
    emailCoder: "jcomte@outlook.com"
}

//forma manual

// const name1 = person.nameCoder
// const documentId = person.identificationNumberCoder
// const email1 = person.emailCoder

 const {nameCoder:nombre,lastNameCoder:apellido, location:localizacion} = person

//forma dinamica

const { 
    nameCoder: name1,
    identificationNumberCoder: documentId,
    emailCoder: mail
} = person



console.log(nombre)
console.log(apellido)
console.log(localizacion["adress"]);
console.log(mail)


 

console.groupEnd()