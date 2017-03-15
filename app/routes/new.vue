<template lang="html">
  <div class="">

  <div class="control">
    <h2 class="headline">Found a Pupper? We Can Help!</h2>
  </div>
  <form @submit.prevent="submit" class="puppy-form">

    <label for="puppy-name" class="label">Name</label>
    <p class="control">
      <input type="text" class="input" v-model="formValues.name" id="puppy-name">
    </p>

    <label for="puppy-age" class="label">Age</label>
    <p class="control">
      <input type="text" class="input" v-model="formValues.age" id="puppy-age">
    </p>

    <label for="puppy-sex" class="label">Sex</label>
    <p class="control">
      <span class="select">
        <select v-model="formValues.sex" id="puppy-sex">
          <option>Please select an option</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </span>
    </p>

    <label for="puppy-color" class="label">Color</label>
    <p class="control">
      <input type="text" class="input" v-model="formValues.color" id="puppy-color">
    </p>

    <label for="puppy-breed" class="label">Breed</label>
    <p class="control">
      <input type="text" class="input" v-model="formValues.breed" id="puppy-breed">
    </p>

    <label for="puppy-image" class="label">Image Url</label>
    <p class="control">
      <input type="text" class="input" v-model="formValues.image_url" id="puppy-image">
    </p>

    <label for="puppy-description" class="label">Description</label>
    <p class="control">
      <textarea type="text" class="textarea" v-model="formValues.description" id="puppy-description"></textarea>
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
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        image_url: '',
        description: '',
      }
    };
  },

  methods: {

  },
};
</script>
