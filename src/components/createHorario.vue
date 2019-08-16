<template>
  <div>
    <h1>Crear Horarios</h1>
    <form @submit.prevent="addHorario">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Laboratorio:</label>
            <input type="text" class="form-control" v-model="horario.laboratorio">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Docente:</label>
            <input type="text" class="form-control" v-model="horario.docente">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Materia:</label>
            <input type="text" class="form-control" v-model="horario.materia">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Hora de Entrada:</label>
            <input type="text" class="form-control" v-model="horario.horaEntrada" placeholder="hh:mm">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Hora de Salida:</label>
            <input type="text" class="form-control" v-model="horario.horaSalida" placeholder="hh:mm">
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
          horario:{}
        }
    },
    methods: {
      addHorario(){
        let uri = 'http://localhost:3000/horarios';
        this.axios.post(uri, this.horario).then(() => {
        this.$router.push({name: 'horarios'});
    });
      }
    }
  }
</script>