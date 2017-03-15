<template lang="html">
  <div class="">
    <div v-if="currentPuppy">
      <h2 class="title has-text-centered">{{ currentPuppy.name }}
        <a @click="adopt" class="button is-primary" v-bind:class="{ 'is-success': currentPuppy.adopeted }">
          <span class="icon is-small fa fa-paw" aria hidden="true"></span>
          <span v-if="currentPuppy.adopted">I'm Adopted!</span>
          <span v-else>Adopt Me!</span>
        </a>
      </h2>
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <span class="image">
            <img v-bind:src="currentPuppy.image_url" alt="">
          </span>
        </div>
      </div>
      <nav class="level is-mobile">

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Age</p>
            <p class="title">{{ currentPuppy.age }}</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Breed</p>
            <p class="title">{{ currentPuppy.breed }}</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Color</p>
            <p class="title">{{ currentPuppy.color }}</p>
          </div>
        </div>

        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Sex</p>
            <p class="title">{{ currentPuppy.sex }}</p>
          </div>
        </div>

      </nav>

      <div class="card">
        <div class="card-content">
          <h2 class="subtitle">About Me</h2>
          <p>{{ currentPuppy.description }}</p>
        </div>
      </div>

  </div>
</template>

<script>
import store from '../store';
import { findOne } from '../actions/puppy';
import { toggleAdopted } from '../actions/puppy';
export default {
  name: 'Detail',

  data() {
    return {
      currentPuppy: null,
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  watch: {
    puppies: 'getPuppy',
    '$route.params.id': 'getPuppy',
  },

  adopt() {
    store.dispatch(toggleAdopted(this.currentPuppy));
  },

  methods: {
    getPuppy() {
      this.currentPuppy = this.puppies.find(puppy => puppy.id === this.$route.params.id);
    },
  },

};
</script>
