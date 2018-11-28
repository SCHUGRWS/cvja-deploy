import { ConfigAPI } from '../../awsConfig';
import axios from 'axios';

export default class Experience {
    constructor(idCurriculum) {
        this.idCurriculum = idCurriculum;
    }
    
    create() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'post',
                url: configApi.getCvPersistenceUrl()+"experiences",
                data: Object.assign({},this)
            })
                .then((data) => {
                    if (data.data.errMessage!=undefined){
                        rej(data)
                    }else{
                        res(data)
                    }
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
                url: configApi.getCvPersistenceUrl()+"experiences/"+this.idCurriculum,
            })
                .then((data) => {
                    res(data)
                })
                .catch((err) => {
                    rej(err)
                });
        })
    }

    delete() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'delete',
                url: configApi.getCvPersistenceUrl()+"experiences/"+this.idCurriculum+"/"+this.idExperience
            })
                .then((data) => {
                    if (data.data.errMessage!=undefined){
                        rej(data)
                    }else{
                        res(data)
                    }
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
                let firstExperience=response.data.Items[0]
                if (firstExperience){
                    res(firstExperience)
                }else{
                    rej(false)
                }
            })

        })
    }
}