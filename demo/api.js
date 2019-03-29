/**
 * api文件模板
 */

import http from '../../utils/http'

export default {
    handleSomething
}


/**
 * 接口简介
 * @param params
 * @returns {*|Promise}
 */
export const handleSomething = (params) => {
    return http.get('/api/something', params)
}