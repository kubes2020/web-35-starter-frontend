import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DogCard from './component/DogCard';
import DogAdd from './component/DogAdd';

function App() {
  const [baseUrl] = useState("https://dogs-api-web-35.herokuapp.com")
  const [data, setData] = useState([
    {
      id: 1,
      breed: "not a dog", 
      imageUrl: "https://images.unsplash.com/photo-1603583784497-92c259021fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
    }
  ])

  const [refresh, setRefresh] = useState(true)

  const refreshHandler = () => {
    setRefresh(!refresh)
  }

  useEffect(()=> {
    axios.get(`${baseUrl}/dogs`)
    .then(res =>{
        console.log(res.data)
        setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[refresh])

  return (
    <>
    <DogAdd baseUrl={baseUrl} refreshHandler={refreshHandler} /> 
    {
      data.map(dog => (
        <DogCard key={dog.id} dog={dog} refreshHandler={refreshHandler} baseUrl={baseUrl}/>
  ))
    }

    </>
  );
}

export default App;
