module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/calculator/'
        : '/',
    indexPath: '../index.html',
    filenameHashing: false,
}