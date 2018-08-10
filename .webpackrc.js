import { resolve } from 'path';
export default {
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }]
    ],
    "proxy": {
        "/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": { "^/api": "" }
        }
    },
    alias: {
        components: resolve(__dirname, "./src/components"),
        utils: resolve(__dirname, "./src/utils"),
        services: resolve(__dirname, "./src/services"),
        models: resolve(__dirname, "./src/models"),
        routes: resolve(__dirname, "./src/routes")
    }
}