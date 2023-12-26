import request from "@/utils/requests";
import { IServiceItem } from "./type";

export enum API {
    SERVICE_ITEMS = '/getServiceItems',
}

export const requestServiceItems = () => request.get<any,Array<IServiceItem>>(API.SERVICE_ITEMS);





