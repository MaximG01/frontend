import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GunButtons from '../Component/GunButtons';
import axios from 'axios';
import User from './User';


function LoadoutPage(){

    const [userId, setUserId] = useState('');
    const [weapon1, setWeapon1] = useState();
    

    function handleSubmit(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/gunLocker/Loadout`,{weapon:weapon1, userid:userId} )
        .then(function (response) {
        if (response.status === 201) {
            console.log(response);
            
            //(response.data);
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);

    })

    }

    



    return(
        <div className="slide-show">
            <div className='Title'>
                <h1>InfoWarzone</h1>
            </div>
            

            <br></br>
            <br></br>
                

            <div>
                
            <form 
             onSubmit={handleSubmit}
            >
            <label>
                User id:
                <input value={userId} onChange={(e)=>setUserId(e.target.value)} type="text" required/>
                </label>
                

                <label>
                First Weapon of Choice:
                </label>
                <select value={weapon1} onChange={(e)=>setWeapon1(e.target.value)} required >
                    <option value="Ak-47">Ak-47</option>
                    <option value="M4">M4</option>
                    <option value="Glock-17">Glock-17</option>
                    <option value="RPG-7">RPG-7</option>
                    <option value="Combat Knife">Combat Knife</option>
                    <option value="Riot Shield">Riot Shield</option>

                </select>
                

                <button>Submit</button>
                
            </form>
                <br></br>
                <div>
            <a href='/infowarzone/1'>
                <button
                type="button"
                className='gun-button'>
                    Go Back 
                </button>
                </a>
         
          <a href='/infowarzone/Display'>
          <button
            type="button"
            className='gun-button'>User Display
          </button>
          </a>
          <a href='/infowarzone/DisplayLoadouts'>
          <button
            type="button"
            className='gun-button'>Loadout Display
          </button>
          </a>
            </div>
            
                
            </div>

            
            
        </div>

    );
}
export default LoadoutPage;