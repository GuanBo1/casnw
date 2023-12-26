export interface IMenuBar {
    title:string,
    id:number|string,
    children?:Array<IMenuBar>
}