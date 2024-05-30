import * as types from './actionTypes';


export const createEntryActionCreator = (data) => ({
  type: types.CREATE_ENTRY,
  payload: data,
});

export const createTitle = (data) => ({
  type: types.CREATE_TITLE,
  payload: data,
});

export const createDescription = (data) => ({
  type: types.CREATE_DESCRIPTION,
  payload: data,
});

export const clear = () => ({
  type: types.CLEAR,
  payload: undefined,
})