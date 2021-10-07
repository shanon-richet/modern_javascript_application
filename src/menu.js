export const food = [
    {
        name: 'Bruschetta',
        description: 'Tomato, picked garlic, parmesan',
        picture: './images/antipasto/bruschetta.jpg',
        price: 11,
        filters:  {
            vegan: false,
            antipasto: true
         }
    },
    {
        name: 'Warm marinated olives',
        description: 'rosemary, citrus',
        picture: './images/antipasto/warm-marinated-olives.jpg',
        price: 8,
        filters:  {
        vegan: true,
        antipasto: true
        }
    },
    {
        name: 'Fried roman artichoke',
        description: 'rosemary, citrus',
        picture: './images/antipasto/fried-roman-artichoke.jpg',
        price: 8,
        filters:  {
            vegan: true,
            antipasto: true
         }
    },
    {
        name: 'Vongole bianco',
        description: 'rosemary, citrus',
        picture: './images/antipasto/vongole-bianco.jpg',
        price: 8,
        filters: {
            vegan: false,
            antipasto: true
        }
    },
    {
        name: 'Fettuccine Carbonara',
        description: 'Pancetta bacon with shallots in a parmesan cream sauce over fettuccine',
        picture: './images/pasta/fettuccine-carbonara.jpg',
        price: 13,
        filters:  {
            vegan: false,
            pasta: true
         }
    },
    {
        name: 'Pumpkin',
        description: 'Sautéed mushrooms, garlic and herbs',
        picture: './images/pasta/pumpkin.jpg',
        price: 13,
        filters: {
            vegan: true,
            pasta: true
        }
    },
    {
        name: 'Squash Ravioli',
        description: 'House-made ravioli stuffed with butternut squash in a browned-butter sage sauce',
        picture: './images/pasta/squash-ravioli.jpg',
        price: 16,
        filters:  {
            vegan: false,
            pasta: true
         }
    },
    {
        name: 'Marinara',
        description: 'Tomato, garlic, oregano, and extra-virgin olive oil',
        picture: './images/pizza/marinara.jpg',
        price: 9,
        filters:  {
            vegan: true,
            pizza: true
         }
    },
    {
        name: 'Florentine',
        description: 'Tender roast chicken, spinach and cherry tomato in a ricotta cream sauce',
        picture: './images/pizza/florentine.jpg',
        price: 14,
        filters:  {
            vegan: false,
            pizza: true
         }
    },
    {
        name: 'Sicilian',
        description: 'Sweet Italian sausage, spicy Capicola ham, fontina, mozzarella and basil',
        picture: './images/pizza/sicilian.jpg',
        price: 14,
        filters:  {
            vegan: false,
            pizza: true
         }
    },
    {
        name: 'Vegetariana',
        description: 'Loaded with red onion, tomato, bell pepper, mushrooms and black olives, with tomato sauce and fresh mozzarella',
        picture: './images/pizza/vegetariana.jpg',
        price: 11,
        filters:  {
            vegan: true,
            pizza: true
         }
    },
    {
        name: 'Tiramisu',
        description: 'espresso-soaked lady fingers layered with cocoa and sweet Italian mascarpone',
        picture: './images/desserts/tiramisu.jpg',
        price: 6,
        filters:  {
            vegan: true,
            dessert: true
         }
    },
    {
        name: 'Lemon Meringue Pie',
        description: 'made fresh daily with lemon curd filling and topped with baked Italian meringue',
        picture: './images/desserts/lemon-meringue-pie.jpg',
        price: 5.5,
        filters:  {
            vegan: true,
            dessert: true
         }
    },
    {
        name: 'Double Chocolate Walnut Brownie',
        description: 'a rich fudge brownie, served with French Vanilla bean ice cream',
        picture: './images/desserts/double-chocolate-walnut-brownie.jpg',
        price: 6.5,
        filters:  {
            vegan: true,
            dessert: true
         }
    },
    {
        name: 'Baked pears with sirup',
        description: 'Baked pears w. cinnamon, pecan and maple syrup',
        picture: './images/desserts/baked-pears.jpg',
        price: 6.5,
        filters:  {
            vegan: true,
            dessert: true
         }
        }
]
export const main = document.querySelector('main')

export const grid = document.createElement('div');
grid.setAttribute('class', 'grid')
main.appendChild(grid)

export function createMenu(){
for (const item of food){
    console.log(item)

    const div = document.createElement('article');

    const foodName = document.createElement('h2');
    foodName.innerHTML = item.name;
    
    const foodDescription = document.createElement('p');
    foodDescription.textContent = item.description;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = item.price + '$';

    const foodPicture = document.createElement('img');
    foodPicture.setAttribute('class', 'image')
    foodPicture.src = item.picture;

    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.textContent = "Add to cart";

    grid.appendChild(div)
    div.appendChild(foodName)
    div.appendChild(foodDescription)
    div.appendChild(foodPrice)
    div.appendChild(foodPicture);
    div.appendChild(addBtn);
    }   
}



