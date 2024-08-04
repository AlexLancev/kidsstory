import axios from 'axios';
// eslint-disable-next-line no-undef
const database_uri = process.env.REACT_APP_API_KEY;

const getTeams = async () => {
  const planes = await axios.get(`${database_uri}/api/team`);
  return planes.data;
};

const getTeam = async (id) => {
  const planes = await axios.get(`${database_uri}/api/team/${id}`);
  return planes.data;
};

const getReviews = async () => {
  const planes = await axios.get(`${database_uri}/api/reviews`);
  return planes.data;
};

const getReview = async (id) => {
  const planes = await axios.get(`${database_uri}/api/reviews/${id}`);
  return planes.data;
};

const getServices = async () => {
  const planes = await axios.get(`${database_uri}/api/services`);
  return planes.data;
};

const getService = async (id) => {
  const planes = await axios.get(`${database_uri}/api/services/${id}`);
  return planes.data;
};

const planesService = {
  getTeams,
  getTeam,
  getReviews,
  getReview,
  getServices,
  getService,
};

export default planesService;
