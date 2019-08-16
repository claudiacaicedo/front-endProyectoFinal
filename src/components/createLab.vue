<template>
  <div>
    <h1>Create A Lab</h1>
    <form @submit.prevent="addLab">
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
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          lab:{}
        }
    },
    methods: {
      addLab(){
        let uri = 'http://localhost:3000/labs';
        this.axios.post(uri, this.lab).then(() => {
        this.$router.push({name: 'labs'});
    });
      }
    }
  }
</script>