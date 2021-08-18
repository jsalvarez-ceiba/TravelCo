export default interface Reservation {
    /* id:string; */
    flightNumber:string;
    cityOrigin:string;
    cityDestination:string;
    datetime: string;
    price:number;
    name:string;
    lastname:string;
    birthdate:string;
    active:boolean;
}