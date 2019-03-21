const formatTime = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n
};

//获取url中的字段
function getUrlParam(paramStr, name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = paramStr.match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//转成Promise
function wxPromisify(fn) {
    return function(obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function(res) {
                resolve(res)
            }
            obj.fail = function(res) {
                reject(res)
            }
            fn(obj)
        })
    }
}

//手机验证
function validatePhone(val) {
    const reg = /^[1][3-9][0-9]{9}$/;
    return reg.test(val)
}

function info(title, duration) {
    wx.showToast({
        title: title,
        icon: 'none',
        duration: duration || 1500
    })
}

function success(title, duration) {
    wx.showToast({
        title: title,
        icon: 'success',
        duration: duration || 1500
    })
}

//时间戳转日期
function toDate(time) {
    if (!time) {
        return '';
    }
    let date = new Date(time * 1000);
    Date.prototype.toLocaleString = function() {
        return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate();
    };
    return date.toLocaleString();
}

//时间戳转换日期精确到秒
function dateTime(time) {
    if (!time) {
        return '';
    }
    let date = new Date(time * 1000);
    Date.prototype.toLocaleString = function() {
        return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + "    " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
    };
    return date.toLocaleString();
}

//formatDate
const FORMAT_LONG = "yyyy-MM-dd hh:mm:ss";
const FORMAT_SHORT = "yyyy-MM-dd";

function switchDate(timestamp) {
	return this.formatDate(new Date(timestamp * 1000), FORMAT_SHORT)
}

function formatDateTimestamp(temestamp) {
    return this.formatDate(new Date(temestamp * 1000), FORMAT_LONG)
}

function formatDate(date, format) {
    var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "h+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

//获取当前日期
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
	return currentdate;
};

//数组查找元素位置
export function arrayIndexOf(arr, val) {
    if (!arr) {
        return 0;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return 0;
}

//返回值为null或者undefined时返回为空
export function filterNull(val) {
    if (val === null || val === undefined) {
        return '';
    }
    return val;
}

export function checkNull(val) {
    if (val === null || val === undefined) {
        return true;
    }
    return false;
}

export function Rad(d) {
    return d * Math.PI / 180.0;
}

export function getDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;
    s = Math.round(s * 10000) / 10000; //输出为公里
    return s;
}

//阻止连续点击事件
function buttonClicked(self) {
	self.setData({
		buttonClicked: true
	})
	setTimeout(() => {
		self.setData({
			buttonClicked: false
		})
	}, 1000)
};

//删除无用参数
function deleteNullData(data) {
	if (data && data !== null) {
		for (var key in data) {
			if (data[key] === null || data[key] === undefined) {
				delete data[key];
			} else {
				if (typeof data[key] === 'string') {
					data[key] = data[key].trim();
				}
			}
		}
	}
}

//数组去重
function uniq(array) {
	var temp = {}, r = [], len = array.length, val, type;
	for (var i = 0; i < len; i++) {
		val = array[i];
		type = typeof val;
		if (!temp[val]) {
			temp[val] = [type];
			r.push(val);
		} else if (temp[val].indexOf(type) < 0) {
			temp[val].push(type);
			r.push(val);
		}
	}
	return r;
}

module.exports = {
    validatePhone: validatePhone,
    toDate: toDate,
    dateTime: dateTime,
    info: info,
    success: success,
    arrayIndexOf: arrayIndexOf,
	filterNull: filterNull,
    formatDate: formatDate,
    formatTime: formatTime,
    getDistance: getDistance,
    checkNull: checkNull,
    getUrlParam: getUrlParam,
    wxPromisify: wxPromisify,
    formatDateTimestamp: formatDateTimestamp,
	switchDate: switchDate,
	buttonClicked: buttonClicked,
	getNowFormatDate: getNowFormatDate,
	deleteNullData: deleteNullData,
	uniq: uniq
};