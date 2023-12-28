import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//-------имитируем запрос на получение данных с сервера
export const getCities = createAsyncThunk('city/get', async () => {
  const response = await new Promise<any[]>((res) => {
    setTimeout(() => {
      res([
        {
          id: 'b9e8f64c-e362-4279-917b-59e213506aec',
          name: 'Только в приложении!',
          description: 'Скидка -12% на Kosmoteros',
          image:
            'https://drive.google.com/uc?export=view&id=1Yk2nKhbrdz78jvDrXq1K31_flOrXJhSf',
          availableFor: 'SPECIALIST',
        },
        {
          id: '0d69ad17-3995-46ea-b1d2-de2c9c1fbf60',
          name: 'Промоцена на филлеры MiraLine',
          description: '1500 рублей только в приложении',
          image:
            'https://drive.google.com/uc?export=view&id=1f_sEJXACkrbRf3gQ2mf3DEi1fL8Qsk16',
          availableFor: 'SPECIALIST',
        },
        {
          id: 'a5091321-0453-40cc-83fc-51ba5224583c',
          name: 'Скидка 10% на всю продукцию Vec cosmetic',
          description:
            'Только в мобильном приложении скидки на профессиональную пептидную косметику, пептидные комплексы и нутрицевтическую продукцию',
          image:
            'https://drive.google.com/uc?export=view&id=1xuG4aI6WB07AhGlpYd6h9Mhrkm1imccT',
          availableFor: 'SPECIALIST',
        },
        {
          id: '70327936-64a2-4452-a9bb-f70357a41ddc',
          name: 'Филлеры QT FILL N со скидкой 10%',
          description: 'Акция доступна только в приложении',
          image:
            'https://drive.google.com/uc?export=view&id=1Tb_-QgoyHoy85x9LLP7WujkI_F5qYQK6',
          availableFor: 'SPECIALIST',
        },
      ]);
    }, 500);
  });
  return response;
});

export const fetchCities = createAsyncThunk('city/fetch', async () => {
  const response = await axios.get('https://');
  return response.data;
});
//-------имитируем запрос на добавление города на сервер
export const addCity = createAsyncThunk(
  'city/add',
  async (data: { id: string; name: string; address: string }) => {
    const response = await new Promise<{
      id: string;
      name: string;
      address: string;
    }>((res) => {
      setTimeout(() => {
        res(data);
      }, 500);
    });
    return response;
  }
);

export const deleteCity = createAsyncThunk(
  'city/delete',
  async (id: string) => {
    const response = await new Promise<string>((res) => {
      setTimeout(() => {
        res(id);
      }, 500);
    });
    return response;
  }
);
