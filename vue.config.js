module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/calculator/'
        : '/',
    filenameHashing: false,
}