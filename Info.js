const infoP = JSON.parse();



function getPets() {



    const parent = document.getElementById('parent');


    let firstH = document.createElement("h1");
    firstH.innerText = 'Name'

    firstH.id = 'nameH'

    let firstP = document.createElement("p");

    firstP.innerText = infoP[firstName] + infoP[lastName];

    firstP.id = 'nameP'

    parent.append(firstH);
    parent.append(firstP);

    const { pets } = infoP;





    for (let pet of pets) {

        const { name, birthDate, type } = pet;


        const {name:animal} = type;
        let petDiv = document.createElement("div");

        petDiv.className = 'classdivs';

        let petNameH = document.createElement('h2');
        
        petNameH.innerText = 'Name: '+ name;


        let petbirthDateH = document.createElement('h2');

        petbirthDateH.innerText = 'Birthday: '+ birthDate;

        let petType = document.createElement('h2');

        petType.innerText = animal;


        



        parent.append(petDiv);











    }


}



// {
//     "id": 6,
//         "firstName": "Jean",
//             "lastName": "Coleman",
//                 "address": "105 N. Lake St.",
//                     "city": "Monona",
//                         "telephone": "6085552654",
//                             "pets": [
//                                 {
//                                     "id": 8,
//                                     "name": "Max",
//                                     "birthDate": "2012/09/04",
//                                     "type": {
//                                         "id": 1,
//                                         "name": "cat"
//                                     },
//                                     "owner": 6,
//                                     "visits": [
//                                         {
//                                             "id": 3,
//                                             "date": "2013/01/03",
//                                             "description": "neutered",
//                                             "pet": 8
//                                         },
//                                         {
//                                             "id": 2,
//                                             "date": "2013/01/02",
//                                             "description": "rabies shot",
//                                             "pet": 8
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "id": 7,
//                                     "name": "Samantha",
//                                     "birthDate": "2012/09/04",
//                                     "type": {
//                                         "id": 1,
//                                         "name": "cat"
//                                     },
//                                     "owner": 6,
//                                     "visits": [
//                                         {
//                                             "id": 4,
//                                             "date": "2013/01/04",
//                                             "description": "spayed",
//                                             "pet": 7
//                                         },
//                                         {
//                                             "id": 1,
//                                             "date": "2013/01/01",
//                                             "description": "rabies shot",
//                                             "pet": 7
//                                         }
//                                     ]
//                                 }
//                             ]
// }