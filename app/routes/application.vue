<template lang="html">
  <div class="">
    <nav class="nav">
      <div class="nav-left">
        <router-link :to="{ name: 'index' }" class="nav-item">Puppies</router-link>
      </div>
      <div class="nav-right">
        <router-link :to="{ name: 'index' }" class="nav-item">All Puppies</router-link>
        <router-link :to="{ name: 'new' }" class="nav-item">Add Puppy</router-link>
      </div>
    </nav>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <nav class="panel">
          <p class="panel-heading">Adopt a Pupper</p>

          <div class="panel-block" v-for="puppy in puppies">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img :src="puppy.image_url" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">{{ puppy.name }}</h2>
                <router-link class="is-primary" :to="{ name: 'detail', params: { id: puppy.id } }">Read More</router-link>
              </div>
            </div>
          </div>


        </nav>
      </div>

<div class="column is-8">

<router-view></router-view>

</div>

    </div>
  </div>
</div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';
export default {
  name: 'Application',

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
