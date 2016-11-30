/*jslint node: true */
"use strict";

//exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;


exports.storage = 'sqlite';


exports.hub = 'byteball.org/bb';
exports.deviceName = 'Headless';
exports.permanent_paring_secret = 'randomstring';
exports.control_addresses = ['DEVICE ALLOWED TO CHAT'];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';
//Wallet uses first address if bSingleAddress == true or you have to tell it what address to use with dataFeedAddress parameter
exports.bSingleAddress = true;
exports.dataFeedAddress = "";
exports.minAvailableDataFeedings = 2;

exports.KEYS_FILENAME = 'keys.json';

console.log('finished headless conf');
