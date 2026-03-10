import api from '@/api/axios';

export interface Category {
  id: number;
  name: string;
  description: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const res = await api.get('/api/v1/type-documents');
  return res.data;
};
