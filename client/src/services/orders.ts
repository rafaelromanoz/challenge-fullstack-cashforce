import useApi from 'src/composables/UseApi'

export default function orderService () {
  const { list } = useApi('/orders')
  return {
    list
  }
}
