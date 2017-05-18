if (localStorage.usData === undefined) {
    localStorage.usData = JSON.stringify({
        counter: 0,
    })
}



function fanEveryone(data) {
    var relationship = require('app/models/TheUserModel');
    if (relationship.getRelationship(data.id) < 2) {
        var fan = require('app/services/user/UserFanService');
        fan = new fan(true, data.id);
          var totalCount = JSON.parse(localStorage.usData);
        ++totalCount.counter;
        console.log('Fanned new user: ' + data.username + '. Total number fanned: ' + totalCount.counter);
        localStorage.usData = JSON.stringify(totalCount);
    }
}
API.on(API.USER_JOIN, fanEveryone);

//This is code to fan people who join the room