'use server'
import axios from 'axios'
import { apiUrls } from '@/lib/constants/urls'
import { TileType } from '@/lib/model/tile'

export async function getTiles(spaceUUID: string): Promise<{ status: number, data: TileType[] }> {
  try {
    const res = await axios.get(apiUrls().private.tile, {
      params: {
        space_uuid: spaceUUID
      }
    })
    return { status: 200, data: res.data }
  } catch {
    return { status: 500, data: [] }
  }
}