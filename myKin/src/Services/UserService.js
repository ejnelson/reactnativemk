export default class ListService {
    constructor() {
        this.registeredCallbacks = [];
    }

    register(callback) {
        this.registeredCallbacks.push(callback);
    }

    getContacts(userId, method) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    updateSetting(key, value) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }
}
