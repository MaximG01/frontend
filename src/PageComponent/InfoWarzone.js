
import GunButtons from '../Component/GunButtons';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function InfoWarzone(){
    const [gunData, setGunData] = useState(null);

  const [mounted, setMounted] = useState(false);
  const {weaponId} = useParams();

  // Fetch the gun data when the component mounts
    useEffect(() => {
      setMounted(true);
  },[])

useEffect(()=>
    {
      if (!mounted)
      return;
      axios.get(`http://localhost:8080/gunLocker/descriptions/${weaponId}` ) // /1 /2 /3 /4 /5 /6
    .then(function (response) {
      if (response.status === 200) {
          console.log(response);
          
          setGunData(response.data);
      }
  })
  .catch(function (error) {
      // handle error
      console.log(error);

  })
    },[mounted])

    return(
        <div>
            <div className='Title'>
                <h1>InfoWarzone</h1>
            </div>
            <div>
                <GunButtons gunData={gunData}></GunButtons> 
                {/* so children have access to gunData prop  */}
            </div>
            <div className='slide-show-container'>
                <AwesomeSlider className='slide-show'>
                    {gunData?Object.entries(gunData).filter(x=>x[0]!="id").map(x=>
                        <div>
                            {/* to remove the id  */}
                            <div className='InfoContent'>
                            {(x[0]).charAt(0).toUpperCase()+(x[0]).slice(1)}
                            </div>

                            <div className='InfoContent'>
                            {x[1]}
                            </div>
                            
                        </div>) :null}
                </AwesomeSlider>
            </div>
        </div>
    );
}
export default InfoWarzone;