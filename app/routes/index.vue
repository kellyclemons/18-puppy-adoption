<template lang="html">
  <div class="">
    <div class="is-flex">
      <div class="nav-left">
        <h2 class="title">Puppies for Adoption</h2>
      </div>
      <div class="nav-right">
        <router-link class="button is-info" to="/new">Add a Pupper</router-link>
      </div>
    </div>

    <table class="table">
      <thead>
        <th>Name</th>
        <th>Age</th>
        <th></th>
      </thead>
      <tbody>

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
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

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
          </td>
        </tr>

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
          </td>
        </tr>

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
          </td>
        </tr>

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
          </td>
        </tr>

        <tr>
          <td>Lola</td>
          <td>10</td>
          <td>
            <router-link class="is-primary" to="detail">Read More</router-link>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
