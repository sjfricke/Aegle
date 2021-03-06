var require = meteorInstall({"client":{"main.html":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// client/main.html                                                                         //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
module.exports = require("./template.main.js");                                             // 1
                                                                                            // 2
//////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// client/template.main.js                                                                  //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
                                                                                            // 1
Template.body.addContent((function() {                                                      // 2
  var view = this;                                                                          // 3
  return [ HTML.Raw("<h1>Welcome to Meteor!</h1>\n\n  "), Spacebars.include(view.lookupTemplate("hello")), "\n  ", Spacebars.include(view.lookupTemplate("info")) ];
}));                                                                                        // 5
Meteor.startup(Template.body.renderToDocument);                                             // 6
                                                                                            // 7
Template.__checkName("hello");                                                              // 8
Template["hello"] = new Template("Template.hello", (function() {                            // 9
  var view = this;                                                                          // 10
  return [ HTML.Raw("<button>Click Me</button>\n  "), HTML.P("You've pressed the button ", Blaze.View("lookup:counter", function() {
    return Spacebars.mustache(view.lookup("counter"));                                      // 12
  }), " times.") ];                                                                         // 13
}));                                                                                        // 14
                                                                                            // 15
Template.__checkName("info");                                                               // 16
Template["info"] = new Template("Template.info", (function() {                              // 17
  var view = this;                                                                          // 18
  return HTML.Raw('<h2>Learn Meteor!</h2>\n  <ul>\n    <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>\n    <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>\n    <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>\n    <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>\n  </ul>');
}));                                                                                        // 20
                                                                                            // 21
//////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"lib.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// client/lib/lib.js                                                                        //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
if (typeof web3 !== 'undefined') {                                                          // 1
  web3 = new Web3(web3.currentProvider);                                                    // 2
} else {                                                                                    // 3
  // set the provider you want from Web3.providers                                          // 4
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));                // 5
}                                                                                           // 6
//////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
// client/main.js                                                                           //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////
                                                                                            //
var Template = void 0;                                                                      // 1
module.watch(require("meteor/templating"), {                                                // 1
  Template: function (v) {                                                                  // 1
    Template = v;                                                                           // 1
  }                                                                                         // 1
}, 0);                                                                                      // 1
var ReactiveVar = void 0;                                                                   // 1
module.watch(require("meteor/reactive-var"), {                                              // 1
  ReactiveVar: function (v) {                                                               // 1
    ReactiveVar = v;                                                                        // 1
  }                                                                                         // 1
}, 1);                                                                                      // 1
module.watch(require("./main.html"));                                                       // 1
Template.hello.onCreated(function () {                                                      // 6
  function helloOnCreated() {                                                               // 6
    // counter starts at 0                                                                  // 7
    this.counter = new ReactiveVar(0);                                                      // 8
  }                                                                                         // 9
                                                                                            //
  return helloOnCreated;                                                                    // 6
}());                                                                                       // 6
ABI = [{                                                                                    // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "_faucetAddress",                                                                 // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "address"                                                                       // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": false,                                                                        // 11
  "inputs": [{                                                                              // 11
    "name": "to",                                                                           // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "value",                                                                        // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "perscribe",                                                                      // 11
  "outputs": [],                                                                            // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "name",                                                                           // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "string"                                                                        // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": false,                                                                        // 11
  "inputs": [{                                                                              // 11
    "name": "_spender",                                                                     // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "approve",                                                                        // 11
  "outputs": [{                                                                             // 11
    "name": "success",                                                                      // 11
    "type": "bool"                                                                          // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "totalSupply",                                                                    // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": false,                                                                        // 11
  "inputs": [{                                                                              // 11
    "name": "_from",                                                                        // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_to",                                                                          // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "transferFrom",                                                                   // 11
  "outputs": [{                                                                             // 11
    "name": "success",                                                                      // 11
    "type": "bool"                                                                          // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "decimals",                                                                       // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "uint8"                                                                         // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "version",                                                                        // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "string"                                                                        // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [{                                                                              // 11
    "name": "_owner",                                                                       // 11
    "type": "address"                                                                       // 11
  }],                                                                                       // 11
  "name": "balanceOf",                                                                      // 11
  "outputs": [{                                                                             // 11
    "name": "balance",                                                                      // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [],                                                                             // 11
  "name": "symbol",                                                                         // 11
  "outputs": [{                                                                             // 11
    "name": "",                                                                             // 11
    "type": "string"                                                                        // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": false,                                                                        // 11
  "inputs": [{                                                                              // 11
    "name": "_receiver",                                                                    // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_completed",                                                                   // 11
    "type": "bool"                                                                          // 11
  }],                                                                                       // 11
  "name": "rewardReceiver",                                                                 // 11
  "outputs": [{                                                                             // 11
    "name": "success",                                                                      // 11
    "type": "bool"                                                                          // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": false,                                                                        // 11
  "inputs": [{                                                                              // 11
    "name": "_to",                                                                          // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "transfer",                                                                       // 11
  "outputs": [{                                                                             // 11
    "name": "success",                                                                      // 11
    "type": "bool"                                                                          // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "constant": true,                                                                         // 11
  "inputs": [{                                                                              // 11
    "name": "_owner",                                                                       // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "name": "_spender",                                                                     // 11
    "type": "address"                                                                       // 11
  }],                                                                                       // 11
  "name": "allowance",                                                                      // 11
  "outputs": [{                                                                             // 11
    "name": "remaining",                                                                    // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "payable": false,                                                                         // 11
  "stateMutability": "view",                                                                // 11
  "type": "function"                                                                        // 11
}, {                                                                                        // 11
  "inputs": [],                                                                             // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "constructor"                                                                     // 11
}, {                                                                                        // 11
  "payable": false,                                                                         // 11
  "stateMutability": "nonpayable",                                                          // 11
  "type": "fallback"                                                                        // 11
}, {                                                                                        // 11
  "anonymous": false,                                                                       // 11
  "inputs": [{                                                                              // 11
    "indexed": true,                                                                        // 11
    "name": "_from",                                                                        // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": true,                                                                        // 11
    "name": "_to",                                                                          // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": false,                                                                       // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "Transfer",                                                                       // 11
  "type": "event"                                                                           // 11
}, {                                                                                        // 11
  "anonymous": false,                                                                       // 11
  "inputs": [{                                                                              // 11
    "indexed": true,                                                                        // 11
    "name": "_owner",                                                                       // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": true,                                                                        // 11
    "name": "_spender",                                                                     // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": false,                                                                       // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "Approval",                                                                       // 11
  "type": "event"                                                                           // 11
}, {                                                                                        // 11
  "anonymous": false,                                                                       // 11
  "inputs": [{                                                                              // 11
    "indexed": true,                                                                        // 11
    "name": "_from",                                                                        // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": true,                                                                        // 11
    "name": "_to",                                                                          // 11
    "type": "address"                                                                       // 11
  }, {                                                                                      // 11
    "indexed": false,                                                                       // 11
    "name": "_value",                                                                       // 11
    "type": "uint256"                                                                       // 11
  }],                                                                                       // 11
  "name": "Exercise",                                                                       // 11
  "type": "event"                                                                           // 11
}];                                                                                         // 11
ContractAddress = "0x6c26271c1996954b437456b9b62543ec63bce5b0";                             // 14
myAddress = "0x8f215bf78d61d45b0d2055dcd60e7c37651ce0ab";                                   // 15
otherAddress = "0xaD07635Bd5ef027C4bbc44AEe2E7679CdE469998"; // StandardTokenABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
// AegleABI = [{"constant":true,"inputs":[],"name":"_faucetAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"_exercise","type":"string"},{"name":"_reps","type":"uint256"},{"name":"_value","type":"uint256"}],"name":"perscribe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_value","type":"uint256"},{"name":"_completed","type":"bool"}],"name":"rewardReceiver","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"issuedTo","type":"address"},{"indexed":true,"name":"issuedBy","type":"address"},{"indexed":false,"name":"exercise","type":"string"},{"indexed":false,"name":"reps","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
// bytecode = "60606040526040805190810160405280600581526020017f4165676c650000000000000000000000000000000000000000000000000000008152506003908051906020019062000051929190620001ab565b506000600460006101000a81548160ff021916908360ff1602179055506040805190810160405280600481526020017f4145474c0000000000000000000000000000000000000000000000000000000081525060059080519060200190620000bb929190620001ab565b506040805190810160405280600281526020017f41310000000000000000000000000000000000000000000000000000000000008152506006908051906020019062000109929190620001ab565b50620f424060075534156200011d57600080fd5b5b6007546000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b6200025a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001ee57805160ff19168380011785556200021f565b828001600101855582156200021f579182015b828111156200021e57825182559160200191906001019062000201565b5b5090506200022e919062000232565b5090565b6200025791905b808211156200025357600081600090555060010162000239565b5090565b90565b6110aa806200026a6000396000f300606060405236156100c3576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063068df69c146100d257806306fdde0314610127578063095ea7b3146101b65780630de264581461021057806318160ddd1461029e57806323b872dd146102c7578063313ce5671461034057806354fd4d501461036f57806370a08231146103fe57806395d89b411461044b578063a8da6267146104da578063a9059cbb1461053f578063dd62ed3e14610599575b34156100ce57600080fd5b5b5b005b34156100dd57600080fd5b6100e5610605565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013257600080fd5b61013a61062b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017b5780820151818401525b60208101905061015f565b50505050905090810190601f1680156101a85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101c157600080fd5b6101f6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106c9565b604051808215151515815260200191505060405180910390f35b341561021b57600080fd5b61029c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919080359060200190919080359060200190919050506107bc565b005b34156102a957600080fd5b6102b1610896565b6040518082815260200191505060405180910390f35b34156102d257600080fd5b610326600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061089c565b604051808215151515815260200191505060405180910390f35b341561034b57600080fd5b610353610b1a565b604051808260ff1660ff16815260200191505060405180910390f35b341561037a57600080fd5b610382610b2d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103c35780820151818401525b6020810190506103a7565b50505050905090810190601f1680156103f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561040957600080fd5b610435600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bcb565b6040518082815260200191505060405180910390f35b341561045657600080fd5b61045e610c14565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561049f5780820151818401525b602081019050610483565b50505050905090810190601f1680156104cc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104e557600080fd5b610525600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919080351515906020019091905050610cb2565b604051808215151515815260200191505060405180910390f35b341561054a57600080fd5b61057f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e8b565b604051808215151515815260200191505060405180910390f35b34156105a457600080fd5b6105ef600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ff6565b6040518082815260200191505060405180910390f35b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106c15780601f10610696576101008083540402835291602001916106c1565b820191906000526020600020905b8154815290600101906020018083116106a457829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f470a68fafe0cac5f799db0deb56c6a60faed35e0743f3547272bde22baca217b85856040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156108545780820151818401525b602081019050610838565b50505050905090810190601f1680156108815780820380516001836020036101000a031916815260200191505b50935050505060405180910390a35b50505050565b60075481565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610968575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156109745750600082115b15610b0957816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610b13565b60009050610b13565b5b9392505050565b600460009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bc35780601f10610b9857610100808354040283529160200191610bc3565b820191906000526020600020905b815481529060010190602001808311610ba657829003601f168201915b505050505081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610caa5780601f10610c7f57610100808354040283529160200191610caa565b820191906000526020600020905b815481529060010190602001808311610c8d57829003601f168201915b505050505081565b60008115610e835782600080600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610d2a5750600083115b15610e795782600080600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508373ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019050610e84565b60009050610e84565b5b5b9392505050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610edb5750600082115b15610fe657816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610ff0565b60009050610ff0565b5b92915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b929150505600a165627a7a72305820237bb66925c4075da7620665c087e5e8997f11d7d35e0974e47725a80afaaf390029";
                                                                                            //
Template.hello.helpers({                                                                    // 24
  counter: function () {}                                                                   // 25
});                                                                                         // 24
Template.hello.events({                                                                     // 30
  'click button': function (event, instance) {                                              // 31
    var myContract = web3.eth.contract(ABI).at(ContractAddress);                            // 32
    myContract.rewardReceiver(otherAddress, 10, true, callback = function (error, result) {
      if (!error) console.log("success");                                                   // 34
    }); //   myContract.perscribe(myAddress, 10, callback = function(error, result) {       // 35
    //     console.log("running here: " + result);                                          // 38
    //   }).then(function() {                                                               // 39
    //   let myEvent = myContract.Exercise({}, {fromBlock: 0, toBlock: 'latest'});          // 40
    //   console.log(myEvent);                                                              // 41
    //   myEvent.watch(callback = function(error, result) {                                 // 42
    //     console.log("Watching event maybe . . .");                                       // 43
    //     console.log(result);                                                             // 44
    //   });                                                                                // 45
    // })})                                                                                 // 46
  }                                                                                         // 47
});                                                                                         // 30
//////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./client/template.main.js");
require("./client/lib/lib.js");
require("./client/main.js");