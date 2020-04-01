import { Observable, from, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as people from './people.json'
import * as pets from './pets.json'

type Person = {
    age: number
    firstName: string
    lastName: string
    id: number
}

export type Pet = {
    id: number
    name: string
    type: string
    color: string
}

export const listPeople = async (searchTerm?: string): Promise<Person[]> => {

    return timer(1000).pipe(map(_ => {
        if(searchTerm && searchTerm !== ''){
            return people.filter(person => {
                let names = person.firstName + ' ' + person.lastName
                return names.toLowerCase().includes(searchTerm.toLowerCase())
            })
        }

        return people
    })).toPromise()
};

export const listPets = async (searchTerm?: string): Promise<Pet[]> => {
    return timer(1500).pipe(map(_ => {
        if(searchTerm && searchTerm !== '') {
            return pets.filter(pet => {
                return pet.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
        }

        return pets
    })).toPromise()
};