
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { tasks as tasksData } from '../data/tasks';


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks', 
  async () => {
   
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasksData);  
      }, 1000);  
    });
  }
);


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],       
    loading: false,   
    error: null,      
  },
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true; 
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;       
        state.tasks = action.payload; 
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;        
        state.error = action.error.message; 
      });
  },
});

export default tasksSlice.reducer;
