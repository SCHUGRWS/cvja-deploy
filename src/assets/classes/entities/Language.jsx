import { ConfigAPI } from '../../awsConfig';
import axios from 'axios';

export default class Language {
    constructor(idCurriculum) {
        this.idCurriculum = idCurriculum;
    }
    
    create() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'post',
                url: configApi.getCvPersistenceUrl()+"languages",
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
                url: configApi.getCvPersistenceUrl()+"languages/"+this.idCurriculum,
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
                url: configApi.getCvPersistenceUrl()+"languages/"+this.idCurriculum+"/"+this.idLanguage
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
                let firstLanguage=response.data.Items[0]
                if (firstLanguage){
                    res(firstLanguage)
                }else{
                    rej(false)
                }
            })

        })
    }
}