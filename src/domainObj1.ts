export interface RootObject {
    user_company_case_study: Usercompanycasestudy;
  }
  
  interface Usercompanycasestudy {
    _id: Id;
    assessor_id: Id;
    company_case_study_id: Id;
    company_id: Id;
    completed_at: string;
    created_at: string;
    redirect_url?: any;
    reset_at?: any;
    started_at: string;
    status: string;
    time_elapsed: number;
    total_score: number;
    updated_at: string;
    user_id: Id;
    company_case_study: Companycasestudy;
  }
  
  interface Companycasestudy {
    _id: Id;
    company_id: Id;
    created_at: string;
    description?: any;
    is_integrated: boolean;
    name: string;
    pages: Page[];
    parent_id?: any;
    passkey: string;
    status: string;
    time: number;
    token: string;
    updated_at: string;
    questions: Question[];
  }
  
  interface Question {
    _id: Id;
    behavior: string;
    body: string;
    company_case_study_id: Id;
    created_at: string;
    trait_ids: Id[];
    updated_at: string;
  }
  
  interface Page {
    _id: Id;
    body: string;
    created_at: string;
    updated_at: string;
  }
  
  interface Id {
    '$oid': string;
  }