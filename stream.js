const JsonStreamStringify = require("@crypto.com/json-stream-stringify");

var givenBigObject = function () {
    return { randomKeyName: new Array(1024 * 1024 * 200) };
};

var serialiseBigObject = async function (sourceObject) {
    return await new Promise((resolve, reject) => {
        const jsonStream = new JsonStreamStringify(sourceObject);
        jsonStream.once("error", () => console.log("Error at path", jsonStream.stack.join(".")));
        var index = 0;
        jsonStream
			.on("data", (data) => index += data.toString().length)
			.on("end", () => resolve(index))
            .on("error", (error) => reject(error));
    })
};

(async () => {
    const label = "label";
    console.time(label);
    await serialiseBigObject(givenBigObject());
    console.log("done stringify an object with length of ");
    console.timeEnd(label);
})();
