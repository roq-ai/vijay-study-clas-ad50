import { EnrollmentInterface } from 'interfaces/enrollment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  tutor_id?: string;
  created_at?: any;
  updated_at?: any;
  enrollment?: EnrollmentInterface[];
  user?: UserInterface;
  _count?: {
    enrollment?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  tutor_id?: string;
}
