import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

function DisplayLoadout(){
    const [loadouts, setloadouts] = useState([]);
const[LoadoutId, setLoadoutId]= useState([]);
  const [mounted, setMounted] = useState(false);
const[weapon1, setWeapon1]= useState([]);
const [userId, setUserId]= useState([]);



    useEffect(() => {
        setMounted(true);
    },[])
  
  useEffect(()=>
      {
        if (!mounted)
        return;
        axios.get(`http://localhost:8080/gunLocker/Loadout`  ) 
      .then(function (response) {
        if (response.status === 200) {
            console.log(response);
            
            setloadouts(response.data);
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
  
    })
      },[mounted])

      function edit()
      {
        axios.put(`http://localhost:8080/gunLocker/Loadout/${LoadoutId}`,{userid:userId, weapon:weapon1} )
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                
                setloadouts(response.data);
            }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
  
    })
    }

        function deleteG()
      {
        axios.delete(`http://localhost:8080/gunLocker/Loadout/${LoadoutId}`)
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                
                setloadouts(response.data);
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
      
        })
      }
    return(
        <div className="backgrd">
            {loadouts.map(x=>
                <div>
                    {x.id}:{x.weapon}
                </div>)}
                <form>
                <label>
                What userId would you like to change:
                <input value={userId} onChange={(e)=>setUserId(e.target.value)} type="text" required/>
                </label>
                 <label>
                What weapon would you like to change:
                <input value={weapon1}onChange={(e)=>setWeapon1(e.target.value)} type="text" required/>
                </label> 
                <label>
                What weaponId would you like to change:
                <input value={LoadoutId} onChange={(e)=>setLoadoutId(e.target.value)} type="text" required/>
                </label>
               
                </form>
                <div className='gun-container'>
                    <button onClick={edit} 
                    type="button"
                    className='gun-button'>
                        Edit Loadout
                    </button>
                </div>
                <br></br>

                <div className='gun-container'>
                    <button onClick={deleteG}
                    type="button"
                    className='gun-button'>
                        Delete Loadout
                    </button>
                </div>
                
            <a href='/infowarzone/1'>
            <button
            type="button"
            className='gun-button'>Go Back
            </button>
            </a>

        </div>
    )
}
export default DisplayLoadout;