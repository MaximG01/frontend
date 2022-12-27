import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function GunButtons({gunData}) {
  // Declare a state variable to store the selected button
  const [selectedButton, setSelectedButton] = useState(null);
  // Declare a state variable to store the gun description
  
  const [gunsData, setGunsData] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])
  
  useEffect(()=>
      {
        if (!mounted)
        return;
        axios.get(`http://localhost:8080/gunLocker/guns` ) // /1 /2 /3 /4 /5 /6
      .then(function (response) {
        if (response.status === 200) {
            console.log(response);
            
            setGunsData(response.data);
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
  
    })
      },[mounted])



  return (

   

    <div>
       

      <div className='gun-container'>
      {gunsData?.map(x=>
        <a key={x.id} href={`/infowarzone/${x.id}`}>
          <button 
            type="button"
              className='gun-button'>{x.name}

          </button>
          </a>)}
         

          <a href='/infowarzone/User'>
          <button
            type="button"
            className='gun-button'>User
          </button>
          </a>
          
      </div>
     
    </div>
  );
}

export default GunButtons;