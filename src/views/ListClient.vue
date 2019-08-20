<template>
  <DataTable :value='clients'>
    <Column v-for='col of columns' :field='col.field' :header='col.header' :key='col.field'></Column>
  </DataTable>
</template>

<script>
import ClientsService from '../services/ClientServices'
export default {
  data () {
    return {
      columns: null,
      clients: null
    }
  },
  ClientsService: null,
  created () {
    this.clientsService = new ClientsService()

    this.columns = [
      { field: 'id', header: 'id' },
      { field: 'document', header: 'document' },
      { field: 'clientName', header: 'name' },
      { field: 'clientLastName', header: 'lastname' },
      { field: 'username', header: 'username' }
    ]
  },
  mounted () {
   this.clientsService.getAllClients().then(data => this.clients = data.data)
  }
}
</script>
