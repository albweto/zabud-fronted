<template>
  <DataTable :value="products" class="p-datatable-responsive">
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
  </DataTable>
</template>

<script>
import  ProductService  from '../services/ProductService'
export default {
  data() {
    return {
      columns: null,
      products: null
    }
  },
  ProductService: null,
  created() {
    this.productService = new ProductService();

    this.columns = [
      { field: 'id', header: 'id' },
      { field: 'price', header: 'document' },
      { field: 'name', header: 'name' },
      {field: 'stock',header:'stock'}
    ]
  },
  mounted() {
    this.productService.getAllProducts()
      .then(data => (this.products = data.data))
  }
}
</script>

<style>
    .p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
        display: none;
    }

@media screen and (max-width: 40em) {
    .p-datatable-responsive .p-datatable-thead > tr > th,
    .p-datatable-responsive .p-datatable-tfoot > tr > td {
        display: none !important;
    }

.p-datatable-responsive .p-datatable-tbody > tr > td {
    text-align: left;
    display: block;
    border: 0 none;
    width: 100% !important;
		float: left;
		clear: left;
    }

    .p-datatable-responsive .p-datatable-tbody > tr > td .p-column-title {
        padding: .4em;
        min-width: 30%;
        display: inline-block;
        margin: -.4em 1em -.4em -.4em;
        font-weight: bold;
    }
}

</style>