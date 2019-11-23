import { PayloadAction } from '../types'
import { HomeActionTypes } from './types'

export interface SetNameType {
    name: string
}
export const setName = (name: string): PayloadAction<SetNameType> => {
    return {
        type: HomeActionTypes.SET_NAME,
        payload: { name }
    }
}

export type HomeActions = PayloadAction<SetNameType>
