
class Shape {
    buildShape (shape, shapeColor, acronym, textColor ) {
        let logo;
        if (shape === 'Square') {
            logo = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

            <rect x="50" y="50" width="200" height="200" fill="none" stroke="black" stroke-width="4" />
            
            <rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />
            
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${acronym}</text>
        </svg>`;
        } else if (shape === 'Circle') {
            logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="none" stroke="black" stroke-width="4" />

            <circle cx="150" cy="100" r="80" fill= "${shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${acronym}</text>
          
          </svg>`;
        } else if (shape === 'Triangle') {
            logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150,20 280,180 20,180" fill="none" stroke="black" stroke-width="4" />

            <polygon points="150,20 280,180 20,180" fill= "${shapeColor}" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${acronym}</text>
          
          </svg>`;
        }
        return logo;
    }
}

module.exports = Shape;

