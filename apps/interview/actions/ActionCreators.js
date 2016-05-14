const AppDispatcher = require('AppDispatcher');
const AppConstants = require('interview/constants/AppConstants');

module.exports = {
  create(data) {
    AppDispatcher.dispatch({
      actionType: AppConstants.CREATE,
      data: data
    });
  },
  update(data) {
    AppDispatcher.dispatch({
      actionType: AppConstants.UPDATE,
      data: data
    });
  },
  delete(data) {
    AppDispatcher.dispatch({
      actionType: AppConstants.DELETE,
      data: data
    });
  }
}
