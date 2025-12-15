import { createSlice } from '@reduxjs/toolkit'

interface BalanceState {
  balance: number
}

const initialState: BalanceState = {
  balance: 50,
}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance: (state, action: { payload: number }) => {
      state.balance = action.payload
    }
  }
})

export const { setBalance } = balanceSlice.actions
export const balanceReducer = balanceSlice.reducer
