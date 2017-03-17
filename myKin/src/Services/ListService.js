export default class ListService {
    constructor() {
        this.registeredCallbacks = [];
        this.lists = {
            'Shopping List': [
                
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
        return new Promise((resolve, reject) => {
            const item = this.lists['Kin Lists'][0].items.find(i => i.id === itemId);
            item.claimedBy = true;
            this.lists['Shopping List'].push(item);
            this.registeredCallbacks.forEach(callback => callback(this.lists));
            resolve();
        });
    }

    unclaimItem(itemId) {
        return new Promise((resolve, reject) => {
            const item = this.lists['Shopping List'].find(i => i.id === itemId);
            this.lists['Shopping List'].splice(this.lists['Shopping List'].indexOf(item), 1);
            item.claimedBy = null;
            this.registeredCallbacks.forEach(callback => callback(this.lists));
            resolve();
        });
    }

    removeList(id) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }

    purchaseItem(item, userId) {
        return new Promise((resolve, reject) => reject('unimplemented'));
    }
}
