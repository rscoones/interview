const AppDispatcher = require('AppDispatcher');
const BaseStore = require('./BaseStore');
const AppConstants = require('interview/constants/AppConstants');
const assign = require('object-assign');

let _data = [];

const Store = assign({}, BaseStore, {
  get() {
    return _data;
  }
});

AppDispatcher.register((action) => {
  const {actionType, data} = action;

  switch (actionType) {
    case AppConstants.CREATE:
      create(data);
      return Store.emitChange();
    case AppConstants.DELETE:
      remove(data);
      return Store.emitChange();
    case AppConstants.UPDATE:
      update(data);
      return Store.emitChange();
  }
});

module.exports = Store;

function create(data) {
  _data.push(data);
}

function remove(data) {
  // to do
}

function update(data) {
  // to do
}
