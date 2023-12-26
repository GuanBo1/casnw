import request from "@/utils/requests";
import { IAndAnnouncements, INews } from "./type";

export enum API {
    NEWS = '/getNews',
    ANNOUNCEMENT = '/getAnnouncements',
}

export const requestNews = () => request.get<any,Array<INews>>(API.NEWS);
export const requestAnnouncement = () => request.get<any,Array<IAndAnnouncements>>(API.ANNOUNCEMENT)