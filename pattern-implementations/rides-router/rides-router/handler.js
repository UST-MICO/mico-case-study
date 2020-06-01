"use strict"
// {"id": 1, "time": 11111, "source": "someSource", "data": { "timestamp": 1111, "customerRating": 9, "customerName": "Chris", "serviceType": "standard"}}
module.exports = async (functionInput, callback) => {

    const cloudEvent = JSON.parse(functionInput)
    const eventData = cloudEvent.data;

    let result = []
    
    if (eventData.serviceType === 'standard') {
        cloudEvent["routingslip"] = [['standard-in']];
        result.push(cloudEvent);
    } else if (eventData.serviceType === 'premium') {
        cloudEvent["routingslip"] = [['premium-in']];
        result.push(cloudEvent);
    }

    return result;
}