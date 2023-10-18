import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { JobOfferInterface } from 'interfaces/job-offer';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  application_status?: string;
  application_notes?: string;
  freelancer_id: string;
  company_id: string;
  job_offer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  job_offer?: JobOfferInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  application_status?: string;
  application_notes?: string;
  freelancer_id?: string;
  company_id?: string;
  job_offer_id?: string;
}
