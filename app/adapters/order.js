import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  headers: {
    Authorization: `JWT ${window.token}`,
  },
});
