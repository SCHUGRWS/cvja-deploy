export default class User {
    constructor(email) {
        this._email = email;
        Object.freeze(this._email);
    }

    get email() {
        return new String("").concat(this._email);
    }
}