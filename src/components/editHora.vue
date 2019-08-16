<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updateLab">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre Lab:</label>
            <input type="text" class="form-control" v-model="lab.nombre">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Lab Descripcion:</label>
              <input tyte="text" class="form-control" v-model="lab.descripcion">
            </div>
          </div>
        </div><br />
        <div class="form-group">
    <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          lab: {}
        }
      },
      created() {
        let uri = `http://localhost:3000/labs/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.lab = response.data;
        });
      },
      methods: {
        updateLab() {
          let uri = `http://localhost:3000/labs/${this.$route.params.id}`;
          this.axios.post(uri, this.lab).then(() => {
          this.$router.push({name: 'labs'});
          });
        }
      }
    }
</script>