import apiClient from './apiClient';
// import { config } from '@/config/config';

export default {
  getTodos() {
    return apiClient.get('/todos');
  },
  getTodo(id) {
    const todo = apiClient.get(`/todos/${id}`);
    return todo;
  },
};
