export interface User 
{
    id?:number,
    userName: string,
    userEmail: string,
    dob:Date
}

export interface Url
{
    id?:number,
    longURL:string,
    shortenURL:string,
    click_count:number
}

export interface chartData
{
    name:string,
    value:number
}