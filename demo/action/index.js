import * as schoolApi from 'src/api/manager/school.js'

const api = {}

export default {

    /**
     * 示例api
     */
    getCodeLst(context, params) {
        return schoolApi.codeLst(params)
    }
}