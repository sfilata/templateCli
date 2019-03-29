<template>
    <div class="blackground-root">
    </div>
</template>
<script>
import header from './header'
import {mapActions} from 'vuex'
export default {
    name: 'blackground', // Notice: 业务组件的名称
    directives: {},
    components: {
        header,
    },
    mixins: [],
    data() {
        return {
            data: {}
        }
    },
    props: {},
    computed: {},
    filters: {},
    methods: {
        ...mapActions({
            modifyData: 'actions/modifyData', // vuex Action 改写此处
        }),
        handleFetchData() {

        }
    },
    watch: {
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    activated() {
    },
    deactivated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    errorCaptured() {
    }
}
</script>
<style lang="scss" scoped>
    .blackground-root {
      background: #fff;
    }
</style>