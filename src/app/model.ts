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

export let config={
    API_KEY:"AIzaSyBUA09rx6BkvokHLcEmPuAhGZ2PnM3oY2k"
}

export interface AuthResponse
{
        idToken:string;
        email:string;
        refreshToken:string;
        expiresIn:string;
        localId:string;
        registerd?:boolean;
}