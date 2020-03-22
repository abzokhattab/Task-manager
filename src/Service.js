import axios from axios;
const url ='https://abzo-user-task-api.herokuapp.com/'

class Service {

    static getPosts(){
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data; 
                resolve(data.map);
            }catch(e){

            }
        })
    }

    static signup(name,email,age){
        return axios.post(url,{
            name,email,age
        })
    }


    static deleteUser()
}