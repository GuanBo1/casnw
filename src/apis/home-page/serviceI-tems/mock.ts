


import { RequestData } from "@/apis/type";
import { MockMethod } from "vite-plugin-mock";
import { IServiceItem } from "./type";

// “成分分析”、“表面分析”、“微区分析”、“性能分析”、“元素分析”
// “同位素技术”、“年代学分析”、“基因组分析”、“光谱学观测”、“探空与测绘”
const serviceItemMock: Array<MockMethod>  = [
    {
        url:`/dev-api/getServiceItems`,
        method:'get',
        response:():RequestData<Array<IServiceItem>> =>{
            return {
                code:0,
                message:'dddd',
                data:[
                    {
                        title:'成分分析',
                        id:0,
                    },
                    {
                        title:'表面分析',
                        id:1,
                    },
                    {
                        title:'微区分析',
                        id:2,
                    },
                    {
                        title:'性能分析',
                        id:3,
                    },
                    {
                        title:'元素分析',
                        id:4,
                    },
                    {
                        title:'同位素技术',
                        id:5,
                    },
                    {
                        title:'年代学分析',
                        id:6,
                    },
                    {
                        title:'基因组分析',
                        id:7,
                    },
                    {
                        title:'光谱学观测',
                        id:8,
                    },
                    {
                        title:'探空与测绘',
                        id:9,
                    },
                ],
            }
        }
    },
]
export default serviceItemMock;