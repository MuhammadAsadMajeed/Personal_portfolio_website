console.log('VITE_API_URL =', import.meta.env.VITE_API_URL);
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: string[];
}

export const contactAPI = {
  // Submit contact form
  submit: async (formData: ContactFormData): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }

      return data;
    } catch (error: any) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get all contacts (for admin)
  getAll: async (): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/all`);
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },
};