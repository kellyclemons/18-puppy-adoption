import _ from 'lodash';

export default function puppies(state = [], action) {
  switch (action.type) {
    case 'PUPPY@FINDALL_COMPLETE':
      return _.unionBy(action.data, state, 'id');
    case 'PUPPY@FINDONE_COMPLETE':
    case 'PUPPY@CREATE_COMPLETE':
    case 'PUPPY@UPDATE_COMPLETE':
      return _.unionBy([action.data], state, 'id');

    default:
      return state;
  }
}
