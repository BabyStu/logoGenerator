
const Shape = require('./shape'); // Import your Shape class here

describe('Shape', () => {
    describe('buildShape', () => {
        it('should render a yellow square with green text', () => {
            const newShape = new Shape();
            const result = newShape.buildShape('Square', 'yellow', 'bum', 'green');
            const expected = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            <rect x="50" y="50" width="200" height="200" fill="none" stroke="black" stroke-width="4" />
            
            <rect x="50" y="50" width="200" height="200" fill="Yellow" />
            
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="Green">YIP</text>`;
            expect(result).toEqual(expected);
        });

        it('should render a blue circle with purple letters', () => {
            const newShape = new Shape();
            const result = newShape.buildShape('Circle', 'blue', 'bum', 'purple');
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="none" stroke="black" stroke-width="4" />

            <circle cx="150" cy="100" r="80" fill= "Blue" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="Purple">BUM</text>`;
            expect(result).toEqual(expected);
        });

        it('should render a purple triangle with red letters', () => {
            const newShape = new Shape();
            const result = newShape.buildShape('Triangle', 'Purple', 'AAR', 'Red');
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,20 280,180 20,180" fill="none" stroke="black" stroke-width="4" />

            <polygon points="150,20 280,180 20,180" fill= "Purple" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="Red">AAR</text>`;
            expect(result).toEqual(expected);
        });
    });
});
