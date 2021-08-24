import React from 'react';
export const calculatePrice = (date: React.ChangeEvent<HTMLInputElement>, price : number) => {
    const april = 4;
    const july = 7;
    const november = 9;
    const december = 12;
    const increment = 0.2;
    const disc = 0.15;
    const dateLocale = date.target.value;
    let message = 'plus';
    let newPrice = 0;


    const reservationDate = new Date(date.target.value);
    const mon = reservationDate.getMonth() + 1;

    if (mon >= april && mon <= july) {
        const plus = price * increment;
        const newP = price + plus;
        message = 'plus';
        newPrice = newP;
      } else if (mon >= november && mon <= december) {
        const discount = price * disc;
        const newP = price - discount;
        message = 'discount';
        newPrice = newP;
      } else {
        newPrice = price;
      }


    return { dateLocale, message, newPrice,  }
}