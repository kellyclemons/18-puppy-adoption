const apiUrl = 'https://tiy-tn-class-api-fall-16.herokuapp.com/puppies/kellyclemons';
const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function parseJson(r) {
  return r.json();
}

// Export a named 'findAllComplete' function that returns an action object
// for 'PUPPY@FINDALL_COMPLETE'
export function findAllComplete(data = []) {
  return {
    type: 'PUPPY@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  // make a get request to the 'apiUrl'
  return dispatch => fetch(apiUrl)
  // Parse json from the server response
  .then(r => r.json())
  // Dispatch findAllComplete with the data sent by the server
  .then(puppies => dispatch(findAllComplete(puppies)));
}


// Export a function that returns an action object for 'PUPPY@CREATE_COMPLETE'
export function createComplete(data = []) {
  return {
    type: 'PUPPY@CREATE_COMPLETE',
    data,
  };
}

// Export a named 'create' function that takes in an argument 'formData' and returns a thunk
export function create(formData) {
  return dispatch => fetch(apiUrl, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  })
  .then(parseJson)
  .then((puppy) => {
    dispatch(createComplete(puppy));
  });
}

// ******* NEED TO LISTEN FOR NEW PUPPY SUBMIT *******

// Export a named 'findAll' function that returns a thunk

export function findOneComplete(data = {}) {
  return {
    type: 'PUPPY@FINDONE_COMPLETE',
    data,
  };
}

export function findOne(id) {
  return dispatch => fetch(`${apiUrl}/${id}`)
  .then(parseJson)
  .then((response) => {
    dispatch(findOneComplete(response));
  });
}

export function updateComplete(data = {}) {
  return {
    type: 'PUPPY@UPDATE_COMPLETE',
    data,
  };
}

export function update(id, formData) {
  return dispatch => fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: jsonHeaders,
    body: JSON.stringify(formData),
  })
  .then(parseJson)
  .then((puppy) => {
    dispatch(updateComplete(puppy));
  });
}

export function toggleAdopted(puppy) {
  return update(puppy.id, { ...puppy, adopted: !puppy.adopted });
}
