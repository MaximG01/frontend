import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Display(){
    const [users, setUsers] = useState([]);

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])
  
  useEffect(()=>
      {
        if (!mounted)
        return;
        axios.get(`http://localhost:8080/gunLocker/User` ) 
      .then(function (response) {
        if (response.status === 200) {
            console.log(response);
            
            setUsers(response.data);
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
  
    })
      },[mounted])

    return(
        <div className="slide-show">
          <div className='Title'>
                <h1>InfoWarzone</h1>
            </div>
            <div></div>
            {users.map(x=>
                <div>
                    {x.id}:{x.firstName} {x.lastName}
                </div>)}
        <br></br>
        <div>
        <a href='/infowarzone/Loadout'>
          <button
            type="button"
            className='gun-button'>Back
          </button>
          </a>
          </div>    
        </div>
        
    )
}
export default Display;