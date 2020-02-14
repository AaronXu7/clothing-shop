const path = require('path');

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'common-cpn':'@/components/common',
                'content-cpn':'@/components/content'
            }
        }
    }
}

function addStyleResource (rule) {
rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
    patterns: [
        path.resolve(__dirname,'./src/common/less/base.less')
    ],
    })
}