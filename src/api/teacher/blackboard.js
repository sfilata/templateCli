/**
 * api文件模板
 */

import http from '../../utils/http'

export default {
    handleSomething
}


/**
 * 接口简介
 * http://101.201.42.116:29100/project/29/interface/api/508
 * @param params
 * @returns {*|Promise}
 */
export const handleSomething = (params) => {
    return http.get('/api/something', params)
}