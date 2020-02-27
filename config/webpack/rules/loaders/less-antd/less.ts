import * as fs from 'fs';
import lessToJs from 'less-vars-to-js';
import * as path from 'path';

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './antd-customization.less'), 'utf8'));

export const webpackLessAntdLoader = () => ({
    loader: 'less-loader',
    options: {
        modifyVars: themeVariables,
        javascriptEnabled: true,
    }
});
