import axios from 'axios';

const database_uri = import.meta.env.VITE_API_KEY;

if (!database_uri) {
  throw new Error('VITE_API_KEY is not defined');
}

export const getBenefits = async (): Promise<BenefitsType[]> => {
  const response = await axios.get(`${database_uri}/api/benefits`);
  return response.data;
};

export const getAdvantages = async (): Promise<AdvantagesType[]> => {
  const response = await axios.get(`${database_uri}/api/advantages`);
  return response.data;
};

export const getTeams = async (): Promise<TeamsType[]> => {
  const response = await axios.get(`${database_uri}/api/team`);
  return response.data;
};

export const getTeamId = async (id: string): Promise<Omit<TeamsType, 'name'>> => {
  const response = await axios.get(`${database_uri}/api/team/${id}`);
  return response.data[0];
};

export const getReviews = async (): Promise<ReviewsType[]> => {
  const response = await axios.get(`${database_uri}/api/reviews`);
  return response.data;
};

export const getReviewId = async (id: string): Promise<Omit<ReviewsType, 'linkToReview'>> => {
  const response = await axios.get(`${database_uri}/api/reviews/${id}`);
  return response.data[0];
};

export const getServices = async (): Promise<ServicesType[]> => {
  const response = await axios.get(`${database_uri}/api/services`);
  return response.data;
};

export const getServiceId = async (id: string): Promise<ServicesType> => {
  const response = await axios.get(`${database_uri}/api/services/${id}`);
  return response.data[0];
};

export const planesService = {
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
