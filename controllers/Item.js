'use strict';

var utils = require('../utils/writer.js');
var Item = require('../service/ItemService');

module.exports.itemsGET = function itemsGET (req, res, next) {
  Item.itemsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsItemIdDELETE = function itemsItemIdDELETE (req, res, next, itemId) {
  Item.itemsItemIdDELETE(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsItemIdGET = function itemsItemIdGET (req, res, next, itemId) {
  Item.itemsItemIdGET(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsItemIdPUT = function itemsItemIdPUT (req, res, next, body, itemId) {
  Item.itemsItemIdPUT(body, itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.itemsPOST = function itemsPOST (req, res, next, body) {
  Item.itemsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
