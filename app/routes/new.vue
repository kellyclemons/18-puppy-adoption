<template lang="html">
  <div class="">

  <div class="control">
    <h2 class="headline">Found a Pupper? We Can Help!</h2>
  </div>
  <form @submit.prevent class="puppy-form">

    <label for="puppy-name" class="label">Name</label>
    <p class="control">
      <input type="text" class="input" id="puppy-name">
    </p>

    <label for="puppy-age" class="label">Age</label>
    <p class="control">
      <input type="text" class="input" id="puppy-age">
    </p>

    <label for="puppy-sex" class="label">Sex</label>
    <p class="control">
      <span class="select">
        <select id="puppy-sex">
          <option>Please select an option</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </span>
    </p>

    <label for="puppy-colour" class="label">Colour</label>
    <p class="control">
      <input type="text" class="input" id="puppy-colour">
    </p>

    <label for="puppy-breed" class="label">Breed</label>
    <p class="control">
      <input type="text" class="input" id="puppy-breed">
    </p>

    <label for="puppy-image" class="label">Image Url</label>
    <p class="control">
      <input type="text" class="input" id="puppy-image">
    </p>

    <label for="puppy-description" class="label">Description</label>
    <p class="control">
      <textarea type="text" class="textarea" id="puppy-description"></textarea>
    </p>

    <p class="control">
      <a href="/" class="button">Back</a>
      <button class="button is-primary">Submit</button>
    </p>

  </form>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
