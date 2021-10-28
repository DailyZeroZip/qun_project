import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "/testIp/mock/84b732ed8dbb779a79838da0826c6788/api/api"

export default{
    getListAPI(params){
        console.log(`${resquest}/getList`)
    	return http.get(`${resquest}/getList`,params)
	},
    getTable(params){
        console.log(`https://www.fastmock.site/mock/84b732ed8dbb779a79838da0826c6788/api/api/gettable`)
    	return http.get(`https://www.fastmock.site/mock/84b732ed8dbb779a79838da0826c6788/api/api/gettable`,params)
    }
}
