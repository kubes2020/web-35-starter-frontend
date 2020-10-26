import React from 'react';
import axios from 'axios';

const DogCard = (props) => {
    console.log(props)

    const onDelete = (e) =>{
        e.preventDefault()
        console.log("delete button on", props.dog.id)
        axios.delete(`${props.baseUrl}/dogs/${props.dog.id}`)
        .then(res => {
            console.log("delete worked", res)
            props.refreshHandler()
        })
        .catch(err =>{
            console.log("delete didn't work", err)
        })
    }

    return(
        <>
        <article className="dogcard">
            <h3>{props.dog.breed}</h3>
            {
            props.dog.imageUrl != "" ? <img src={props.dog.imageUrl} alt={props.dog.breed} /> : <p>No image available</p>
            }
        <button onClick={onDelete}>Delete Dog</button>
        </article>
        </>
    )
}

export default DogCard