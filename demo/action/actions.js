/**
 * 
 */

import http from '../../utils/http'

export default {
    exampleApi
}


/**
 * 接口简介
 * @param params
 * @returns {*|Promise}
 */
export const exampleApi = (params) => {
    return http.get('/example', params)
}