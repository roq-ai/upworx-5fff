import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  application_status: yup.string().nullable(),
  application_notes: yup.string().nullable(),
  freelancer_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
  job_offer_id: yup.string().nullable().required(),
});
