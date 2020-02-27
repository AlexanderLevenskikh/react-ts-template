import fs from 'fs';

let config: IConfig = {
    isProdApi: false,
};

// TODO разобраться почему это не работает
if (fs.existsSync('./config.json')) {
    config = require('./config.json');
}

export interface IConfig {
    isProdApi: boolean;
}

const configTypescriptBridge: IConfig = {
    isProdApi: config.isProdApi,
};

export default configTypescriptBridge;
