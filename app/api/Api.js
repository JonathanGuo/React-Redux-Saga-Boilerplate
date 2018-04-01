import axios from 'axios';
import Constants from '../config/Constants';

export default class Api {
    constructor () {
        this.axios = axios.create({
            baseURL: Constants.baseURL,
        });
    }
}
