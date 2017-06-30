var userInfoList = [
    {
        id: 0,
        name: "John Smith",
        email: "jsmith@gmail.com",
        password: "jSm1th"
    },
    {
        id: 1,
        name: "rekhasharma0809@gmail.com",
        email: "rekhasharma0809@gmail.com",
        password: "Rekha1"
    },
    {
        id: 2,
        name: "test@gmail.com",
        email: "test@gmail.com",
        password: "Test12"
    }
];

var _offerListCount = 10;
var offerList = [];

for (var i = 0; i < _offerListCount; i++) {
    offerList.push({
        id: i,
        name: ("Bank of America " + (i == 0 ? "" : i)).trim(),
        shortenName: "BA",
        description: "",
        issuePrice: "A$2.36",
        offerSize: "Up to $10 Million",
        minAmount: 1000,
        allocation: 1000,
        status: "OPENED",
        open: 1493234417617,
        payBy: 1499584417617
    });
}

module.exports = {
    userInfoList: userInfoList,
    offerList: offerList    
};
