import getPlaces from './places.service';

describe('place test', () => {
    test('call function', () => {

        const myMock = jest.fn();
        myMock();
        expect(myMock).toHaveBeenCalled();

        
        
    });
});