import React from 'react'; 
export const onSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueSpain = 3000000;
    const valueEEUU = 2000000;
    const valueColombia = 1800000;
    
    let cityOriginLocale = '';
    let cityDestinationLocale = '';
    let priceLocale = 0;

    switch (e.target.name) {
        case 'origin':
            cityOriginLocale = e.target.value;
            break;
        case 'destination':
            cityDestinationLocale = e.target.value;

            switch (e.target.value) {
                case 'Madrid':
                  priceLocale = valueSpain;
                 break;
                case 'Barcelona':
                  priceLocale = valueSpain;
                 break;
                case 'Marbella':
                  priceLocale = valueSpain;
                 break;
                case 'Galicia':
                  priceLocale = valueSpain;
                 break;
                case 'Ibiza':
                  priceLocale = valueSpain;
                 break;
                case 'Miami':
                  priceLocale = valueEEUU;
                break;
                case 'Chicago':
                  priceLocale = valueEEUU;
                break;
                case 'Los Angeles':
                  priceLocale = valueEEUU;
                break;
                case 'Boston':
                  priceLocale = valueEEUU;
                break;
                case 'Washington':
                  priceLocale = valueEEUU;
                break;
                case 'Medellín':
                  priceLocale = valueColombia;
                  break;
                case 'Bogotá':
                  priceLocale = valueColombia;
                  break;
                case 'Cali':
                  priceLocale = valueColombia;
                  break;
                case 'Bucaramanga':
                  priceLocale = valueColombia;
                  break;
                case 'Cartagena':
                  priceLocale = valueColombia;
                  break;
              }
        break;
    }


    return { priceLocale , cityOriginLocale , cityDestinationLocale };


};