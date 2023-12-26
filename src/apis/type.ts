// 定义一些公共的接口

/** 公共的 rest 返回数据 */
export interface RequestData<T> {
    code: number
    message: string
    data?: T
}