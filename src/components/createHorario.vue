<template>
  <div>
    <h1>Crear Horarios</h1>
    <form @submit.prevent="addHorario">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>laboratorio:</label>
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
      addHorario(){
        let uri = 'http://localhost:3000/labs';
        this.axios.post(uri, this.lab).then(() => {
        this.$router.push({name: 'labs'});
    });
      }
    }
  }
</script>