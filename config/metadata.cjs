const { author, version, description } = require('../package.json')

/**
 * This is the tampermonkey headers used to match which webpage to run the script on
 */

module.exports = {
    name: 'webpack-userscript-template',
    namespace: '',
    description: description,
    version: version,
    author: author,
    match: [
        'https://mysite'
    ],
    require: [
        `http://code.jquery.com/jquery-3.6.0.min.js`,
        'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js',
    ],
    grant: [
        'GM.xmlHttpRequest'
    ],
    'run-at': 'document-end'
}