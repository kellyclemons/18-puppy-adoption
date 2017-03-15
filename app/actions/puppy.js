const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/ryan';

// Export a named 'findAllComplete' function that returns an action object
// for 'PUPPY@FINDALL_COMPLETE'
export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

// Export a named 'findAll' function that returns a thunk
export function findAll() {
  // make a get request to the 'apiUrl'
  return dispatch => fetch(apiUrl)
    // Parse json from the server response
    .then(r => r.json())
    // Dispatch findAllComplete with the data sent by the server
    .then(puppies => dispatch(findAllComplete(puppies)));
}
