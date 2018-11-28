import { ConfigAPI } from '../../awsConfig';
import axios from 'axios';

export default class Curriculum {
    constructor(email, idCurriculum) {
        this.email = email;
        this.idCurriculum = idCurriculum;
    }
    
    create() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'post',
                url: configApi.getUserPersistenceUrl()+"curriculum",
                data: {
                    email:this.email
                }
            })
                .then((data) => {
                    res(data)
                })
                .catch((err) => {
                    rej(err)
                });
        })
    }

    list(){
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'get',
                url: configApi.getUserPersistenceUrl()+"curriculum/"+this.email,
            })
                .then((data) => {
                    res(data)
                })
                .catch((err) => {
                    rej(err)
                });
        })
    }

    getFirst(){
        return new Promise((res, rej) => {
            
            this.list()
            .then((response) => {
                let firstCurriculo=response.data.Items[0]
                if (firstCurriculo){
                    res(firstCurriculo)
                }else{
                    rej(false)
                }
            })

        })
    }
}