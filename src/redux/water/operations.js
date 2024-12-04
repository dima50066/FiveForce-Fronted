import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosConfig';

export const getDayWater = createAsyncThunk(
  'water/getDayWater',
  async (date, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/water/day/${date}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getMonthWater = createAsyncThunk(
  'water/getMonthWater',
  async (date, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/water/month/${date}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (newWater, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/water', newWater);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ id, updatedWater }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/water/${id}`, updatedWater);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`/water/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getSummaryAmount = createAsyncThunk(
  'water/getSummaryAmount',
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get('/water');
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);