import { useEffect, useState } from 'react'

export const baseUrl = 'https://api.pixelswapcoin.com/api/v1'

/* eslint-disable camelcase */

export interface ApiTvlResponse {
  update_at: string
  '24h_total_volume': number
  total_value_locked: number
  total_value_locked_all: number
}

export const useGetStats = () => {
  const [data, setData] = useState<ApiTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/tvl`)
        const responsedata: ApiTvlResponse = await response.json()

        setData(responsedata)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
