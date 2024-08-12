// Импорт Axios для HTTP запросов
import axios from 'axios';

import { ReviewIdType } from 'types/api/reviewId';
import { ReviewsType } from 'types/api/reviews';
import { ServiceIdType } from 'types/api/serviceId';
import { ServicesType } from 'types/api/services';
import { TeamIdType } from 'types/api/teamId';
import { TeamsType } from 'types/api/teams';
import { AdvantagesType } from 'types/api/advantages';
import { BenefitsType } from 'types/api/benefits';

// URL базы данных
const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error('VITE_API_KEY is not defined');
}

// Функция для получения всех команд
export const getBenefits = async (): Promise<BenefitsType[]> => {
  const response = await axios.get(`${database_uri}/api/benefits`);
  return response.data;
};

// Функция для получения всех команд
export const getAdvantages = async (): Promise<AdvantagesType[]> => {
  const response = await axios.get(`${database_uri}/api/advantages`);
  return response.data;
};

// Функция для получения всех команд
export const getTeams = async (): Promise<TeamsType[]> => {
  const response = await axios.get(`${database_uri}/api/team`);
  return response.data;
};

// Функция для получения всех команд
export const getTeamId = async (id: string): Promise<TeamIdType> => {
  const response = await axios.get(`${database_uri}/api/team/${id}`);
  return response.data;
};

// Функция для получения всех команд
export const getReviews = async (): Promise<ReviewsType[]> => {
  const response = await axios.get(`${database_uri}/api/reviews`);
  return response.data;
};

// Функция для получения всех команд
export const getReviewId = async (id: string): Promise<ReviewIdType> => {
  const response = await axios.get(`${database_uri}/api/reviews/${id}`);
  return response.data;
};

// Функция для получения всех команд
export const getServices = async (): Promise<ServicesType[]> => {
  const response = await axios.get(`${database_uri}/api/services`);
  return response.data;
};

// Функция для получения всех команд
export const getServiceId = async (id: string): Promise<ServiceIdType> => {
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
