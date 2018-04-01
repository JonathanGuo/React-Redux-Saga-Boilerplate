import Api from './Api';

export default class Data extends Api {
    constructor() {
        super();

        this.fetch = this.fetch.bind(this);

        this.data = 'Hello World.';
    }

    fetch () {
        return new Promise(resolve => resolve({ data: this.data }));
    }
}
