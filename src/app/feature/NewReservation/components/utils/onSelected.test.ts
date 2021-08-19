import { string } from 'prop-types';
import {onSelected} from './onSelected';

describe('On Selected Test', () => {
    test('Test ;)', () => {
        expect(true).toBeTruthy();
    });

    test('function', () => {

        const obj = {
            price: '',
            cityOrigin: '',
            cityDestination: '', 
        };

        expect(onSelected).toBeTruthy();
    });

    
});