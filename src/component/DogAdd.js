import axios from "axios";
import React, { useState } from "react";

const DogAdd = (props) =>{
    const [initialFormState] = useState({
        breed: "",
        imageUrl: ""
    })

    const [dog, setDog] = useState(initialFormState)

    const changeHandler = (e) => {
        setDog({
            ...dog, [e.target.name]: e.target.value
        })
    }

    const addDog = (e) => {
        e.preventDefault()
        axios.post(`${props.baseUrl}/dogs`, dog)
        .then(res => {
            props.refreshHandler()
            setDog(initialFormState)
        })
        .catch(err=>{
            console.log("error with addDog", err)
        })
    }
   
    return(
        <article>
        <h2>Add Breed</h2>
        <form onSubmit={addDog}>
            <label>Breed
                <input type="text" name="breed" value={dog.breed} onChange={changeHandler} >
                </input>
            </label>
            <label>Url to Image
                <input type="text" name="imageUrl" value={dog.imageUrl} onChange={changeHandler} >
                </input>
            </label>
            <button>Submit</button>
        </form>
        </article>
    )

}

export default DogAdd