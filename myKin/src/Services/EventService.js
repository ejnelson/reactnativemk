export default class EventService {
    constructor() {
        this.registeredCallbacks = [];
    }

    register(callback) {
        this.registeredCallbacks.push(callback);
    }

    createEvent(newEvent) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    rsvp(eventId, userId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    unRsvp(eventId, userId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    updateEvent(event) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    removeEvent(id) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    createComment(comment, eventId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    editComment(comment, eventId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    removeComment(commendId, eventId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }
}
