<template>
  <div>
      <h1>Laboratorios</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'createl' }" class="btn btn-primary">Crear Lab</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="lab in labs" :key="lab._id">
                  <td>{{ lab.nombre }}</td>
                  <td>{{ lab.descripcion }}</td>
                  <td><router-link :to="{name: 'editl', params: { id: lab._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteLab(lab._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          labs: []
        }
      },
      created() {
      let uri = 'http://localhost:3000/labs';
      this.axios.get(uri).then(response => {
        this.labs = response.data;
      });
    },
    methods: {
      deleteLab(id)
      {
        let uri = `http://localhost:3000/labs/${id}`;
        this.axios.delete(uri).then(response => {
          this.labs.splice(this.labs.indexOf(id), 1);
        });
      }
    }
  }
</script>