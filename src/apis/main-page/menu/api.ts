import request from "@/utils/requests";
import { IMenuBar } from "./type";

export enum API {
    MENU_BAR = '/getMenuBars',
}

export const requestMenuBars = () => request.get<any,Array<IMenuBar>>(API.MENU_BAR);