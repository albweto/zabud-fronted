<template>
      <div class="p-cardialog-content" >
        <div class="p-grid" >
          <div class="p-col-4">
            <label for="document">Document</label>
          </div>
          <div class="p-col-8">
            <InputText id="document" v-model="client.document" />
          </div>
          <div class="p-col-4">
            <label for="name">Name</label>
          </div>
          <div class="p-col-8">
            <InputText id="name" v-model="client.clientName"/>
          </div>
          <div class="p-col-4">
            <label for="lastname">Lastname</label>
          </div>
          <div class="p-col-8">
            <InputText id="lastnale" v-model="client.clientLastName" />
          </div>
          <div class="p-col-4">
            <label for="username">Username</label>
          </div>
          <div class="p-col-8">
            <InputText id="username" v-model="client.username" />
          </div>
          <div class="p-col-4">
            <label for="password">Password</label>
          </div>
          <div class="p-col-8">
            <Password id="password" v-model="client.password" />
          </div>
          <div class="p-col-4">
            <label for="email">Email</label>
          </div>
          <div class="p-col-8">
            <InputText id="email" v-model="client.email"/>
          </div>
        </div>
        <Button label="Save" icon="pi pi-check" @click="save" class="p-button-success" />
      </div>
</template>

<script>
import ClientsService from '../services/ClientServices'
export default {
  data () {
    return {
      client: ''
    }
  },
  ClientsService: null,
  methods: {
    save () {
      this.clientsService = new ClientsService()
      this.client = {
        document: 0,
        clientName: '',
        clientLastName: '',
        username: '',
        password: '',
        email: ''
      }
      this.clientsService.addNewClient(this.client)
    }
  }
}
</script>
