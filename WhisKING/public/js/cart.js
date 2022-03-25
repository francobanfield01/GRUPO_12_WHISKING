console.log('carrito conneted sucess');

const getCart = async () => {
    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()

        if(result.ok){
            console.log(result);
        }

    } catch (error) {
        console.error(error);
    }
}

getCart()