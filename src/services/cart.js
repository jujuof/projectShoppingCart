//quais açoes meu carrinho pode fazer?

// CASOS DE USO
// ✅>>adicionar item do carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// ✅>>deletar um item do carrinho
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem)
    
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// ✅>>remover um item do carrinho
async function removeItem(userCart, item) { 
//transformando o valor do usuário no valor real do backend
//    const deleteItem = index - 1

//verificando se o index é maior q 0 e menor que o carrinho
//    if (index => 0 && index < userCart.length)
//        userCart.splice(index, 1)

//1. encontrar o índice do item    
    const indexFound = userCart.findIndex((p) => p.name === item.name)

//2. caso não encontre o index 
     if (indexFound == -1) {
         console.log(`Ops! Item não encontrado 👎`)
         return
    }

//3. item > 1 subtrai um item, item = 1 - deletar o item)    
     if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }
    
//4. caso item = 1, deletar o item         
     if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
        return
    }
}

// ✅calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log("\nShopee Cart total is: ")

    console.log(`\nR$${result}`);
    
}
// ✅mostra os itens do carrinho
async function displaycart(userCart) {
    console.log("\n Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal = R$${item.subtotal()}`)
    })    
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}