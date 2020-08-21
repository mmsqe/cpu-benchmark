const fast = require("fast-json-stringify");

var givenBigObject = function () {
    return { randomKeyName: new Array(1024 * 1024 * 200) };
};

var serialiseBigObject = async function (sourceObject) {
    return await new Promise((resolve, reject) => {
        fast(sourceObject, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

(async () => {
    var result = await serialiseBigObject(givenBigObject());
    console.log("done stringify an object with length of " + result.length);
})();
