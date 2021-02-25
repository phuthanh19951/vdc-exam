export interface ResponseSuccess{
  status: boolean;
  code: number;
  message: string;
  data: any
}

export interface ResponseFail{
  status: boolean;
  code: number;
  message: string;
}