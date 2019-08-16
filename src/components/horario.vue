<template>
  <div>
      <h1>Laboratorios</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'createh' }" class="btn btn-primary">Crear Horario</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Laboratorios</th>
              <th>Docente</th>
              <th>Materia</th>
              <th>hora Entrada</th>
              <th>Hora Salida</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="horario in horarios" :key="horario._id">
                  <td>{{ horario.laboratorio }}</td>
                  <td>{{ horario.docente }}</td>
                  <td>{{ horario.materia }}</td>
                  <td>{{ horario.horaEntrada }}</td>
                  <td>{{ horario.horaSalida }}</td>
                  <td><router-link :to="{name: 'edith', params: { id: horario._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteLab(horario._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          horarios: []
        }
      },
      created() {
      let uri = 'http://localhost:3000/horarios';
      this.axios.get(uri).then(response => {
        this.horarios = response.data;
      });
    },
    methods: {
      deleteLab(id)
      {
        let uri = `http://localhost:3000/horarios/${id}`;
        this.axios.delete(uri).then(response => {
          this.horarios.splice(this.horarios.indexOf(id), 1);
        });
      }
    }
  }
</script>