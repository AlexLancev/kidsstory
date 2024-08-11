// Импорт Axios для HTTP запросов
import axios from 'axios';

import { ReviewId } from 'types/api/reviewId';
import { Reviews } from 'types/api/reviews';
import { ServiceId } from 'types/api/serviceId';
import { Services } from 'types/api/services';
import { TeamId } from 'types/api/teamId';
import { Teams } from 'types/api/teams';
import { Advantages } from 'types/api/advantages';
import { Benefits } from 'types/api/benefits';

// URL базы данных
const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error('VITE_API_KEY is not defined');
}

// Функция для получения всех команд
export const getBenefits = async (): Promise<Benefits[]> => {
  const response = await axios.get(`${database_uri}/api/benefits`);
  return response.data;
};

// Функция для получения всех команд
export const getAdvantages = async (): Promise<Advantages[]> => {
  const response = await axios.get(`${database_uri}/api/advantages`);
  return response.data;
};

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
  getAdvantages,
  getBenefits,
};

export default planesService;
