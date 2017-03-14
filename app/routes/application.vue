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
        <nav class="panel">
          <p class="panel-heading">Adopt a Pupper</p>

          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
              </div>
            </div>
          </div>
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
              </div>
            </div>
          </div>
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
              </div>
            </div>
          </div>
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
              </div>
            </div>
          </div>
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
              </div>
            </div>
          </div>
          <div class="panel-block">
            <div class="media">
              <div class="media-left">
                <span class="image is-64x64">
                  <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/Bernese-Mountain-Dog-600x600.jpg" alt="">
                </span>
              </div>
              <div class="media-right">
                <h2 class="name">Lola</h2>
                <router-link class="is-primary" to="/detail">Read More</router-link>
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
