// Jquery adds inline styles and these need to be overwritten. 
// HeadStyle writes styles to the head tag and destorys them as well
var envVar = function(obj) {
    if (process.env.NODE_ENV === 'development') {
        return obj.development;

    }
    if (process.env.NODE_ENV === 'production') {
        return obj.production;

    }
}
module.exports = envVar;