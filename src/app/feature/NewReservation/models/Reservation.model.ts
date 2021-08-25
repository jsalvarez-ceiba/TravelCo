export default interface Reservation {
    id:string;
    flightNumber:string;
    cityOrigin:string;
    cityDestination:string;
    datetime: string;
    hour: string;
    price:string;
    name:string;
    lastname:string;
    birthdate:string;
    active:boolean;
}