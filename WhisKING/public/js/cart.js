console.log('carrito conneted success');

const cart = document.getElementById('cart-body')
const cartBox = document.getElementById('cart')

const getCart = async () => {
    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()

        if(result.ok){
            console.log(result);
           
            showData(result.data)
        }

    } catch (error) {
        console.error(error);
    }
}

cart && getCart();


const showData = carrito => {
    cart.innerHTML = null;
    if(carrito.length === 0){
        cartBox.innerHTML = '<h3 style="text-align: center">Aun no tenés productos agregados a tu carrito de compras</h3>'
    }else{
    carrito.forEach(({id,image,quantity,name,price,subtotal}) => {
        let item = `
        <tr class="item">
            <td><img src="/images/products/${image}" width="100px" alt=""></td>
            <td style="font-size: 20px;">
                <a onclick="removeItem(event,${id})" href="#" style="color: red;"><i class="fas fa-minus-square"></i></a>
                <span style="margin: 0 5px;">${quantity}</span>
                <a onclick="addItem(event,${id})" href="#" style="color: green;"><i class="fas fa-plus-square"></i></a>
            </td>
            <td><b>${name}</b></td>
            <td>
                <div style="display: flex; justify-content: space-between;">
                    <span>$</span><b>${price}</b>

                </div>
            </td>
            <td>
                <div style="display: flex; justify-content: space-between;">
                    <span>$</span><b>${subtotal}</b>

                </div>
            </td>
        </tr>
            `;
            cart.innerHTML += item
    })
};
    return false
}

const addItem = async (e,id) => {
    e.preventDefault();
    console.log('agregando!');
    try {
        let response = await fetch('/api/cart/' + id, {
            method : 'POST'
        })
        let result = await response.json();

        cart && showData(result.data);

        
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 2000,
            //timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
                
            },
          
            })
        
            Toast.fire({
            icon: 'success',
            title: 'Producto agregado',
            })

    } catch (error) {
        console.log(error)
    }
}

const removeItem = async (e,id) => {
    e.preventDefault();
    console.log('eliminando!');
    try {
        
        const response = await fetch(`/api/cart/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            showData(result.data);

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                //timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                    
                },
              
                })
            
                Toast.fire({
                icon: 'success',
                title: 'Producto eliminado',
                })
        }

    } catch (error) {
        console.error(error)
    }
}

