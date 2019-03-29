/**
 * 
 */

import http from '../../utils/http'

export default {
    exampleApi
}


/**
 * 接口简介
 * http://101.201.42.116:29100/project/29/interface/api/508
 * @param params
 * @returns {*|Promise}
 */
export const exampleApi = (params) => {
    return http.get('/example', params)
}