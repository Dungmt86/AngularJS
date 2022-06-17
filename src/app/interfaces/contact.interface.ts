import {user} from "./user.interface";


export interface contact{
  title: string;
  hiredate: string;
  address: string;
  city: string;
  phone: string;
}
export interface IData1 {
  user: user[];
  contact: contact[];
}
export interface IDataJSON1 {
  status: number;
  message: string;
  data: IData1;
}
