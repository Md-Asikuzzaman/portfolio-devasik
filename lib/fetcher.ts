import axios from 'axios';

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error('Something wrong!', error);
  }
};

export default fetcher;
