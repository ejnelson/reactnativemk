import moment from 'moment';

export default class KinService {
    constructor() {
        this.registeredCallbacks = [];
        this.kin = [
            {
                name: 'Alexander Lee Smith',
                relation: 'Brother',
                birthDay: moment('2014-12-30'),
                imageUrl: 'https://images.moviepilot.com/image/upload/c_fill,h_470,q_auto:good,w_620/jdrlitljl0789ggree1z.jpg',
                details: [
                    { type: 'Color', value: 'Green' },
                    { type: 'Food', value: 'Spaghetti & Meatballs' },
                    { type: 'Activity', value: 'Hunting & Fishing' }
                ]
            },
            {
                name: 'Jenna Ann Smith',
                relation: 'Sister',
                birthDay: moment('1988-03-17'),
                imageUrl: 'https://s-media-cache-ak0.pinimg.com/564x/5a/79/e2/5a79e2d05dc83e9ce61605698a85d098.jpg',
                details: []
            },
            {
                name: 'Susan Lynn Smith',
                relation: 'Grandmother',
                birthDay: moment('1975-10-03'),
                imageUrl: 'https://specials-images.forbesimg.com/imageserve/df361e11e6d0b9d998928530d04e5b12/320x486.jpg?fit=scale&background=000000',
                details: []
            },
            {
                name: 'Robert Lucas Smith',
                relation: 'Father',
                birthDay: moment('1973-06-26'),
                imageUrl: 'https://img.discogs.com/sA0F8e57oB3_CQ6XwfxCv5tywv8=/538x676/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-807083-1456336962-1985.jpeg.jpg',
                details: []
            }
        ];
    }

    register(callback) {
        callback(this.kin);
        this.registeredCallbacks.push(callback);
    }

    createKin(newKin) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    setRelationship(kin, relationship) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    updateKin(kin) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    removeKin(id) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }
}
