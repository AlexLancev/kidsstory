interface StateProps {
  isError: boolean;
  isLoading: boolean;
  message: string;
}

type ErrorResponse = {
  message: string;
};

type AdvantagesType = {
  _id: string;
  icon: string;
  head: string;
  text: string;
};

type BenefitsType = {
  _id: string;
  icon: string;
  head: string;
};

type ReviewsType = {
  _id: string;
  image: string;
  whoseReview: string;
  sity: string;
  description: string;
  linkToReview: string;
};

type ServicesType = {
  _id: string;
  icon: string;
  imagePromo: string;
  imageBg: string;
  imagePreview: string;
  title: string;
  description: string;
};

type TeamsType = {
  _id: string;
  image: string;
  imagePreview: string;
  title: string;
  speciality: string;
  experience: string;
  description: string;
  name: string;
};
