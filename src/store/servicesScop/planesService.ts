// Импорт Axios для HTTP запросов
import axios from 'axios';

import { ReviewId } from 'types/reviewId';
import { Reviews } from 'types/reviews';
import { ServiceId } from 'types/serviceId';
import { Services } from 'types/services';
import { TeamId } from 'types/teamId';
import { Teams } from 'types/teams';

// URL базы данных
const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error('VITE_API_KEY is not defined');
}

// Функция для получения всех команд
export const getTeams = async (): Promise<Teams[]> => {
  const response = await axios.get(`${database_uri}/api/team`);
  return response.data;
};

// Функция для получения всех команд
export const getTeamId = async (id: string): Promise<TeamId> => {
  const response = await axios.get(`${database_uri}/api/team/${id}`);
  return response.data;
};

// Функция для получения всех команд
export const getReviews = async (): Promise<Reviews[]> => {
  const response = await axios.get(`${database_uri}/api/reviews`);
  return response.data;
};

// Функция для получения всех команд
export const getReviewId = async (id: string): Promise<ReviewId> => {
  const response = await axios.get(`${database_uri}/api/reviews/${id}`);
  return response.data;
};

// Функция для получения всех команд
export const getServices = async (): Promise<Services[]> => {
  const response = await axios.get(`${database_uri}/api/services`);
  return response.data;
};

// Функция для получения всех команд
export const getServiceId = async (id: string): Promise<ServiceId> => {
  const response = await axios.get(`${database_uri}/api/services/${id}`);
  return response.data;
};

// Экспорт всех функций сервиса
const planesService = {
  getTeams,
  getReviews,
  getServices,
  getTeamId,
  getReviewId,
  getServiceId,
};

export default planesService;
