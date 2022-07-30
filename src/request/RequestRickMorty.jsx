export class RequestRickMorty {
    constructor(){
        this.request = new XMLHttpRequest();
    }

    // se crea un numero al azar que no exceda los límites de los personajes (de 1 a 826)
    aleatorio(){
        return Math.floor(Math.random() * (826) + 1);
    }

    // objeto base de los personajes
    crearBase(personaje){
        return {
            created: personaje.created,
            gender: personaje.gender,
            id: personaje.id,
            image: personaje.image,
            location: personaje.location.name,
            name: personaje.name,
            origin: personaje.name,
            species: personaje.species,
            status: personaje.status,
            type: personaje.type
        }
    }

    sendPeticion(sendPersonaje){
        let personaje = null;
        this.request.open("GET", "https://rickandmortyapi.com/api/character/" + this.aleatorio());
        this.request.send();
        this.request.addEventListener("load", e => {
            sendPersonaje(JSON.parse(this.request.response));
        });
    }
}