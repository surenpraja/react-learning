import React from "react";

function Person({personInfo})
{
    return(
        <div>
            <h4>Name: {personInfo.name}</h4>
            <h4>id: {personInfo.id}</h4>
            <h4>age: {personInfo.age}</h4>
            <h4>skill: {personInfo.skill}</h4>
            <h4>salary: {personInfo.salary}</h4>
        </div>
        )
}
export default Person