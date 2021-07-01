import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    scan: true,
}
export const isCode = createAction('QRCODE');

export default createReducer(INITIAL_STATE,{
    [isCode.type]: (state, action)=> ({...state, scan: !action.payload})
})