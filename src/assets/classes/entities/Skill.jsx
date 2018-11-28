import { ConfigAPI } from '../../awsConfig';
import axios from 'axios';

export default class Skill {
    constructor(idCurriculum) {
        this.idCurriculum = idCurriculum;
    }
    
    create() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'post',
                url: configApi.getCvPersistenceUrl()+"skills",
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
                url: configApi.getCvPersistenceUrl()+"skills/"+this.idCurriculum,
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
                url: configApi.getCvPersistenceUrl()+"skills/"+this.idCurriculum+"/"+this.idSkill
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
                let firstSkill=response.data.Items[0]
                if (firstSkill){
                    res(firstSkill)
                }else{
                    rej(false)
                }
            })

        })
    }
}