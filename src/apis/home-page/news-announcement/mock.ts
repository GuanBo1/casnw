import { RequestData } from "@/apis/type";
import { MockMethod } from "vite-plugin-mock";
import { INews } from "./type";

const newsAnnouncementMock: Array<MockMethod>  = [
    {
        url:`/dev-api/getNews`,
        method:'get',
        response:():RequestData<Array<INews>> =>{
            return {
                code:0,
                message:'dddd',
                data:[
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'0'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'1'
                    },
                    {
                        title:'甘肃省副省长陈得信调研中国科XXXXXXX学院兰州分院XXXXXXXXsddda的我二十二',
                        time:'12.13',
                        id:'2'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'3'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'4'
                    },
                    {
                        title:'甘肃省副省长陈得信调研中国科学院兰州分院',
                        time:'12.13',
                        id:'5'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'6'
                    },
                ],
            }
        }
    },
    {
        url:`/dev-api/getAnnouncements`,
        method:'get',
        response:():RequestData<Array<INews>> =>{
            return {
                code:0,
                message:'dddd',
                data:[
                    {
                        title:'XXX中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'0'
                    },
                    {
                        title:'YYY中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'1'
                    },
                    {
                        title:'YY甘肃省副省长陈得信调研中国科XXXXXXX学院兰州分院XXXXXXXXsddda的我二十二',
                        time:'12.13',
                        id:'2'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'3'
                    },
                    {
                        title:'YY中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'4'
                    },
                    {
                        title:'甘肃省副省长陈得信调研中国科学院兰州分院',
                        time:'12.13',
                        id:'5'
                    },
                    {
                        title:'中国科学院党组召开2023年冬季扩大会议',
                        time:'12.12',
                        id:'6'
                    },
                ],
            }
        }
    }
]
export default newsAnnouncementMock;