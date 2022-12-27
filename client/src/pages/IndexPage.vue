<template>
  <q-page padding>
    <q-table
    title="Notas fiscais"
    :rows="rows"
    :columns="columns"
    row-key="name"
    >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn
        color="white"
        text-color="black"
        label="Dados do cedente"
        dense
        ></q-btn>
      </q-td>
    </template>
  </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import orderService from 'src/services/orders'
import { QTableProps } from 'quasar'
import { getMessageOrderStatusBuyer } from '../constants/enums/orderStatusBuyer'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const rows = ref([])
    const { list } = orderService()

    onMounted(() => {
      getOrders()
    })

    const getOrders = async () => {
      try {
        const data = await list()
        rows.value = data
      } catch (error) {
        console.error(error)
      }
    }

    const columns: QTableProps['columns'] = [
      {
        name: 'Nota fiscal', align: 'left', field: 'nNf', label: 'NOTA FISCAL'
      },
      {
        name: 'Sacado', align: 'left', field: (row) => row.buyer.name, label: 'SACADO'
      },
      {
        name: 'Cedente', align: 'left', field: (row) => row.provider.name, label: 'CEDENTE'
      },
      {
        name: 'Emissão', align: 'left', field: (row) => new Date(row.emissionDate).toLocaleDateString('pt-BR'), label: 'EMISSÃO'
      },
      {
        name: 'Valor',
        align: 'left',
        field: (row) => Number(row.value).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }),
        label: 'VALOR'
      },
      {
        name: 'Status',
        align: 'left',
        field: (row) => getMessageOrderStatusBuyer(row.orderStatusBuyer),
        label: 'Status'
      },
      {
        name: 'actions', align: 'right', field: 'actions', label: 'Ações'
      }
    ]

    return {
      rows,
      columns
    }
  }
})
</script>
