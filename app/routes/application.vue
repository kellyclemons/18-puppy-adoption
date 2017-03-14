<template lang="html">
  <div class="">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-item">Puppies</router-link>
      </div>
      <div class="nav-right">
        <router-link to="/" class="nav-item">All Puppies</router-link>
        <router-link to="/new" class="nav-item">Add Puppy</router-link>
      </div>
    </nav>

<div class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <nav class="column-top">
          <p class="column-top__heading">Adopt a Pupper</p>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
            </div>
          </div>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
            </div>
          </div>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
            </div>
          </div>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
            </div>
          </div>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
            </div>
          </div>

          <div class="row">
            <div class="left">
              <span class="image is-64x64">
                <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
              </span>
            </div>
            <div class="right">
              <h2 class="name">Luna</h2>
              <router-link class="is-primary" to="/detail">Read More</router-link>
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
import Index from './index.vue';
export default {

  components: {
    Index,
  },

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
