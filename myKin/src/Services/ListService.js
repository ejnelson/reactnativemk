export default class ListService {
    constructor() {
        this.registeredCallbacks = [];
        this.lists = {
            'Shopping List': [
                {
                    id: 1,
                    name: 'Skateboard',
                    purchaseUrl: 'www.amazon.com'
                },
                {
                    id: 2,
                    name: "Dickie's Overalls",
                    purchaseUrl: 'www.amazon.com'
                },
                {
                    id: 3,
                    name: 'Floral Blouse',
                    purchaseUrl: 'www.amazon.com'
                }
            ],
            'Kin Lists': [
                {
                    id: 1,
                    for: { name: 'Alexander' },
                    name: 'Birthday List',
                    items: [
                        {
                            id: 1,
                            name: 'Skateboard',
                            purchaseUrl: 'www.amazon.com',
                            claimedBy: true
                        },
                        {
                            id: 2,
                            name: "Dickie's Overalls",
                            purchaseUrl: 'www.amazon.com'
                        },
                        {
                            id: 3,
                            name: 'Floral Blouse',
                            purchaseUrl: 'www.amazon.com'
                        }
                    ]
                }
            ]
        };
    }

    register(callback) {
        callback(this.lists);
        this.registeredCallbacks.push(callback);
    }

    createList(newList) {
        return new Promise(resolve => {
            this.lists['Kin Lists'].push(newList);
            this.registeredCallbacks.forEach(callback => callback(this.lists));
            resolve();
        });
    }

    createItem(newItem) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    removeItemFromList(itemId, listId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    claimItem(itemId, userId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    unClaimItem(itemId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    removeList(id) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    purchaseItem(item, userId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }
}
