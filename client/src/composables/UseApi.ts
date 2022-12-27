import { api } from 'boot/axios'

export default function useApi (url: string) {
  const list = async () => {
    try {
      const { data } = await api.get(url)
      return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return {
    list
  }
}
