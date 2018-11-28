export default class User {
    constructor(email) {
        this.email = email;
    }

    create() {
        return new Promise((res, rej) => {

            let configApi = new ConfigAPI();

            axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('sessionKey')
            axios({
                method: 'post',
                url: configApi.getUserPersistenceUrl()+"users",
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
}