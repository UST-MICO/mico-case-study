"use strict"
// { "cloudEvent": {"id": 1, "time": 11111, "source": "someSource", "data": { "timestamp": 1111, "customerRating": 9, "customerName": "Chris"}}, "patternConfig": { "key": "customerName", "comparison_
// {"id": 1, "source": "someSource", "data": { "timestamp": 1111, "customerRating": 9, "customerName": "Chris"}}
module.exports = async (functionInput, callback) => {

    const cloudEvent = JSON.parse(functionInput)
    const eventData = cloudEvent.data;

    let result = []


    if (eventData.customerRating > 9) {
        result.push(cloudEvent);
    }

    return result;
}