
const products = {
    1: {
        id: 1,
        name: 'Кросовки',
        description: 'Беговые кросовки',
        sizes: ['S', 'M', 'L'],
        price: 2500,
        available: true
    },
    2: {
        id: 2,
        name: 'Шорты',
        description: 'Пляжные шорты',
        sizes: ['XS', 'L', 'XXL'],
        price: 500,
        available: true
    },
    3: {
        id: 3,
        name: 'Футболка',
        description: 'Полиэстер 100%',
        sizes: ['M', 'L', 'XL'],
        price: 1000,
        available: true
    },
    4: {
        id: 4,
        name: 'Скальные туфли',
        description: 'Для боулдеринга',
        sizes: ['41', '42', '44.5'],
        price: 4000,
        available: true
    },
    5: {
        id: 5,
        name: 'Пуховик',
        description: 'Наполнитель гуссинный пух',
        sizes: ['46', '52', '56'],
        price: 35000,
        available: false
    },    
}

let basket = [
    {
        good: 1,
        amount: 1,
    },
    {
        good: 2,
        amount: 4,
    },
    {
        good: 3,
        amount: 5,
    },      
]


// Функция добавления товара в корзину
function addProductBasket (good, amount) {
    basket.push({
        'good': Number(good),
        'amount': Number(amount),
    })
    return basket
}
console.log(addProductBasket(process.argv[2], process.argv[3]));
 

// Функция удаления товара из корзины
function deleteProductBasket(good) {
    basket.splice(2, 1)    // первое число - какой элемент в массиве, второе - сколько элементов
    return basket
}
// console.log(deleteProductBasket(process.argv[2]))


// Функция удаления всех товаров из корзины
function deleteAllProductsBasket() {
    basket.splice(0, basket.length);
    return basket
}
// console.log(deleteAllProductsBasket());


// Функция общей стоимости товаров в корзине
function totalBasket() {
    let totalSumm = 0;
    let totalAmount = 0;
    for (let basketProduct = 0; basketProduct < basket.length; basketProduct++) {
        totalSumm += basket[basketProduct].amount * products[basket[basketProduct].good].price;
        totalAmount += basket[basketProduct].amount; 
    }
    let total = {
        'totalSumm': totalSumm,
        'totalAmount': totalAmount,
    }
    return total
}
// console.log(totalBasket())
