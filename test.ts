import { listPeople, listPets } from "./api"
import { createLogger } from "bunyan"

async function run() {
    console.log('Starting')

    let people = await listPeople();
    console.log(people);

    let pets = await listPets();
    console.log(pets)
}

run()