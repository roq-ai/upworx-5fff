import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerProfileInterface {
  id?: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FreelancerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
}
