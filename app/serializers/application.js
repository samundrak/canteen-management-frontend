import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, modelClass, payload, id, requestType) {
    const newPayload = {
      _id: id,
      first_name: payload.first_name,
      last_name: payload.last_name,
      email: payload.email,
      created_at: payload.created_at,
    };
    return this._super(store, modelClass, { data: newPayload }, id, requestType);
  }
});
