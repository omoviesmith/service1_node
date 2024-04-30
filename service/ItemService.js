'use strict';


/**
 * List all items
 * Returns a list of items
 *
 * returns List
 **/
exports.itemsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "price" : 6.0274563,
  "name" : "name",
  "id" : 0
}, {
  "price" : 6.0274563,
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an item
 * Deletes an item
 *
 * itemId Long 
 * no response value expected for this operation
 **/
exports.itemsItemIdDELETE = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find item by ID
 * Returns a single item
 *
 * itemId Long ID of item to return
 * returns Item
 **/
exports.itemsItemIdGET = function(itemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : 6.0274563,
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing item
 * Updates an existing item
 *
 * body Item Updated item object
 * itemId Long 
 * no response value expected for this operation
 **/
exports.itemsItemIdPUT = function(body,itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new item
 * Creates a new item
 *
 * body Item Item object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.itemsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

