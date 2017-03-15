<template lang="html">
  <div class="">
    <div class="is-flex">
      <div class="nav-left">
        <h2 class="title">Puppies for Adoption</h2>
      </div>
      <div class="nav-right">
        <router-link class="button is-primary" :to="{ name: 'new' }">Add a Pupper</router-link>
      </div>
    </div>

    <table class="table">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </thead>
      <tbody>

        <tr v-for="puppy in puppies">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age}}</td>
          <td>
            <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
          </td>
        </tr>
      </tbody>
    </table>

  <div class="adopted">
    <h2 class="title">Adopted Puppers</h2>
  </div>

    <table class="table">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </thead>
      <tbody>

        <tr v-for="puppy in puppies">
          <td>{{ puppy.name }}</td>
          <td>{{ puppy.age }}</td>
          <td>
            <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';
export default {
  name: 'Index',

  data() {
    return {
      // Use 'this.$select' to attach the local 'puppies' data to the 'puppies' propety in the state
      puppies: this.$select('puppies'),
    };
  },

  // When the app component loads, dispatch the 'findAll' function
  created() {
    store.dispatch(findAll());
  },

  methods: {
  },
};
</script>
