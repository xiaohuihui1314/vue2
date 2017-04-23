export default {
    install(Vue){
        Vue.jsonData = (o) => {
            if (typeof  o === "object" && o instanceof Object) {
                const params = [];
                let k, hasOp = Object.hasOwnProperty;
                for (k in o) {
                    if (hasOp.call(o, k)) {
                        const v = o[k] === undefined ? "" : o[k];
                        params.push(`${k}=${v}`);
                    }
                }
                return params.join("&");
            } else {
                return false;
            }
        };
        // fetch请求
        Vue.prototype.fetch = {
            get: (url, data) => {
                const urlParameter = Vue.jsonData(data);
                url = urlParameter ? url + "?" + urlParameter : url;
                return fetch(url).then(response => response.json())
            },
            post: (url, data) => {
                const urlParameter = Vue.jsonData(data);
                // mode属性用来决定是否允许跨域请求，以及哪些response属性可读。可选的mode属性值为same-origin，no-cors（默认）以及cors。
                const obj = {
                    method: "POST",
                    mode: "no-cors",
                    body: urlParameter ? urlParameter : "",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        // "Authorization": token
                    }
                };
                return fetch(url, obj).then(response => response.json())
            }
        };
    }
}