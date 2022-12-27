import { useState } from "react";
import axios from "axios";
function User(){

const [familyName, setFamilyName] = useState('');
const [name, setName] = useState('');

    

    function handleSubmit(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/gunLocker/User`,{firstName:name, lastName:familyName} )
        .then(function (response) {
        if (response.status === 200) {
            console.log(response);
            
            setName(response.data);
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
            <div>
            

            </div>

            <br></br>
            <br></br>
                

            <div>
                
            <form 
             onSubmit={handleSubmit}
            >
            <label>
                Name:
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required/>
                </label>
                <br></br>
                <br></br>
                <label>
                Family Name:
                <input value={familyName} onChange={(e)=>setFamilyName(e.target.value)} type="text" required/>
                </label>
                <br></br>
                
                <button type="submit">Submit</button>
                
            </form>
            <br></br>
            <a href='/infowarzone/Loadout'>
          <button
            type="button"
            className='gun-button'>Loadout
          </button>
          </a>
          
            <a href='/infowarzone/1'>
                <button
                type="button"
                className='gun-button'>
                    Go Back 
                </button>
                </a>
            </div>

            
            
        </div>

    );
}
    export default User;