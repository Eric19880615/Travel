import config from '../config.js';
import {
    deleteNullData
} from './util.js';

class HTTP {
    request({
        url,
        data = {},
        method = 'GET'
    }) {
        return new Promise((resolve, reject) => {
            this._request(url, data, method, resolve, reject)
        })
    }
    _request(url, data = {}, method = 'GET', resolve, reject) {
		deleteNullData(data);
        wx.request({
            url: config.base_url + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: (res) => {
                if (res && res.statusCode === 200 && res.data) {
                    if (res.data.code === 1) {
                        resolve(res.data);
                    } else {
                        reject(res.data.error);
                    }
                } else {
                    reject(res.data.error)
                }
            },
            fail: (err) => {
                reject("服务器异常，请稍后重试")
            }
        })
    }
}

export default HTTP;