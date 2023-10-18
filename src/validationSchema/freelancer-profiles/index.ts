import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  freelancer_id: yup.string().nullable().required(),
});
