var ApiBuilder = require('claudia-api-builder'),
    api = new ApiBuilder(),
    superb = require('superb');
    fs = require('fs');
    util = require('util');

module.exports = api;

api.get('/greet', function (request) {
    return request.queryString.name + ' is ' + superb();
});

// pass some arguments using the query string or headers to this
// method and see that they're all in the request object
api.get('/echo', function (request) {
    return request;
});

// use {} for dynamic path parameters
api.get('/people/{name}', function (request) {
    'use strict';
    return request.pathParams.name + ' is ' + superb();
});

// Return a promise for async processing
api.get('/packagejson', function () {
    'use strict';
    var read = util.promisify(fs.readFile);
    return read('./package.json')
        .then(JSON.parse)
        .then(function (val) {
            return val;
        });
});

// use .post to handle a post; or .delete, .put
api.post('/echo', function (request) {
    'use strict';
    return request;
});

api.delete('/echo', function (request) {
    'use strict';
    return request;
});

api.put('/echo', function (request) {
    'use strict';
    return request;
});