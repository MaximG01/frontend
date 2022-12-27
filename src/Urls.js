import axios from 'axios';

const BASE_URL = "http://localhost:8080/gunLocker/"; //not usefull but just in case...
const GUN_DESCRIPTION_LIST = "http://localhost:8080/gunLocker/descriptions/"; //info
const GUNS = "http://localhost:8080/gunLocker/guns/"; //info
const USER = "http://localhost:8080/gunLocker/User/"; //to add info...
const LOADOUT = "http://localhost:8080/gunLocker/Loadout/";  //to add info...

class Urls{
    getGunInfo(){
        return axios.request(GUN_DESCRIPTION_LIST);
    }
    getGuns(){
        return axios.get(GUNS);
    }
    getUser(){
        return axios.get(USER);
    }
    postUser(){
        return axios.post(USER);
    }
    getLoadout(){
        return axios.get(LOADOUT);
    }
    postLoadout(){
        return axios.post(LOADOUT);
    }
    deleteLoadout(){
        return axios.delete(LOADOUT);
    }
    
}
export default new Urls();