import React from 'react'; 
export const onSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueSpain = 3000000;
    const valueEEUU = 2000000;
    const valueColombia = 1800000;
    
    let cityOrigin = '';
    let cityDestination = '';
    let price = 0;

    switch (e.target.name) {
        case 'origin':
            cityOrigin = e.target.value;
            break;
        case 'destination':
            cityDestination = e.target.value;

            switch (e.target.value) {
                case 'Madrid':
                  price = valueSpain;
                 break;
                case 'Barcelona':
                  price = valueSpain;
                 break;
                case 'Marbella':
                  price = valueSpain;
                 break;
                case 'Galicia':
                  price = valueSpain;
                 break;
                case 'Ibiza':
                  price = valueSpain;
                 break;
                case 'Miami':
                  price = valueEEUU;
                break;
                case 'Chicago':
                  price = valueEEUU;
                break;
                case 'Los Angeles':
                  price = valueEEUU;
                break;
                case 'Boston':
                  price = valueEEUU;
                break;
                case 'Washington':
                  price = valueEEUU;
                break;
                case 'Medellín':
                  price = valueColombia;
                  break;
                case 'Bogotá':
                  price = valueColombia;
                  break;
                case 'Cali':
                  price = valueColombia;
                  break;
                case 'Bucaramanga':
                  price = valueColombia;
                  break;
                case 'Cartagena':
                  price = valueColombia;
                  break;
              }
        break;
    }


    return { price , cityOrigin , cityDestination };


};