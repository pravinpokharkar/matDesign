export interface RootCase {
    id: string;
    name: string;
    description: string;
    order: string[];
    folders_order: any[];
    folders: any[];
    owner: number;
    hasRequests: boolean;
    requests: Request[];
  }
  
  interface Request {
    id: string;
    headers: string;
    headerData: HeaderDatum[];
    url: string;
    queryParams: QueryParam[];
    events?: any[];
    pathVariables: PathVariables;
    pathVariableData: any[];
    method: string;
    data: Datum[];
    dataMode: string;
    auth?: any;
    time?: number;
    name: string;
    description: string;
    collectionId: string;
    responses: any[];
    currentHelper?: any;
    helperAttributes?: any;
    rawModeData?: string;
    collection_id?: string;
  }
  
  interface Datum {
    key: string;
    value: string;
    type: string;
  }
  
  interface PathVariables {
  }
  
  interface QueryParam {
    key: string;
    value: string;
    equals: boolean;
    description: string;
    enabled: boolean;
  }
  
  interface HeaderDatum {
    key: string;
    value: string;
    description?: string;
    enabled?: boolean;
  }