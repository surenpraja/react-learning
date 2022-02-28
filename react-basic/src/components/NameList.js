import React from "react";
import Person from "./Person";

function NameList()
{
    const nameLists = [
        {
            id: 1010,
            age: 30,
            name: 'Suren',
            skill: 'python',
            salary: 100000
        },
        {
            id: 1011,
            age: 29,
            name: 'Sajana',
            skill: 'RN',
            salary: 80000
        },
        {
            id: 1012,
            age: 20,
            name: 'Sanju',
            skill: 'CA',
            salary: 40000
        }
    ]
    // const personList = nameLists.map(person =>
    //         <div>
    //             <h4>Name: {person.name}</h4>
    //             <h4>id: {person.id}</h4>
    //             <h4>age: {person.age}</h4>
    //             <h4>skill: {person.skill}</h4>
    //             <h4>salary: {person.salary}</h4>
    //         </div>)

    // return (<div>{personList}</div>)
    const personlist =  nameLists.map(nameInfo => <Person key ={nameInfo.id} personInfo ={nameInfo}/> )
    return (<div>{personlist}</div>)
}
export default NameList