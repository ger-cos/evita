import {db}  from './firebase'

export const savePet = (pet) => {
    db.collection("pet").doc().set(pet)
}