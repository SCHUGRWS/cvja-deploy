class ConfigAPI {
    getUserPersistenceUrl() {
        return "https://cvjaapi.appjs.com.br/userdata/";
    }
    getCvPersistenceUrl() {
        return "https://cvjaapi.appjs.com.br/cvdata/";
    }
}

class ConfigCognito {
    getUserPoolData() {
        return {
            UserPoolId: 'us-east-1_e6UnH2cE6',
            ClientId: '4qulqi9pmfngblthlqgkcnd4mt'
        }
    };
}

class ConfigS3 {
    //url="https://s3.amazonaws.com/justbuyitimages/"
}

export { ConfigAPI };
export { ConfigCognito };
export { ConfigS3 };