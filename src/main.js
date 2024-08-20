import * as cartSercice from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []
const myWhishList = []

console.log("Hello to the your Shopee Cart!")

//criando dois itens
const item1 = await createItem("ferrari", 20.99, 1)
const item2 = await createItem("lamborghini", 39.99, 3)

//adicionar itens no carrinho
await cartSercice.addItem(myCart, item1)
await cartSercice.addItem(myCart, item2)

//removi itens do carrinho
await cartSercice.removeItem(myCart, item2)
await cartSercice.removeItem(myCart, item2)
await cartSercice.removeItem(myCart, item2)


 
await cartSercice.displaycart(myCart)


//deletei 2 itens no carrinho
//await cartSercice.deleteItem(myCart, item2.name)
//await cartSercice.deleteItem(myCart, item1.name)


await cartSercice.calculateTotal(myCart)
