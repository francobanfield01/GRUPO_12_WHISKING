/* let header = qs("header");
let nav = qs("nav");
let fondo = qs(".admin");
let table = qs(".table"); */
const $ = (id) => document.getElementById(id);

let tableProduct = document.getElementById("table-products");
let selectFilter = document.getElementById("select-filter");
let boxPaginator = document.getElementById("box-paginator");
let filter = document.getElementById('keywords')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* funcion para poner los puntos a miles */


/* products */

tableProduct.innerHTML = "";

const loadProducts = async (
  limit,
  show,
  current,
  initial,
  order = "id",
  filter = ""
) => {
  tableProduct.innerHTML = null;
  boxPaginator.innerHTML = null;

  try {
    let response = await fetch(
      `/admin/get-all-products?current=${current}&limit=${limit}&order=${order}&filter=${filter}`
    );
    let result = await response.json();
    result.data.forEach((product, index) => {
      addItem(product, index);
    });
    console.log(result)
    sessionStorage.setItem("total", JSON.stringify(result.meta.cantidad));
    pagination(result.meta.cantidad, limit, show, current, initial);
  } catch (error) {
    console.log(error);
  }
};

loadProducts(10, 6, 1, 1);

document.getElementById('form-search').addEventListener('submit', (e) => {
  e.preventDefault()
  searchProducts(10, 6, 1, 1, 'id', document.getElementById('keywords').value)
})

const searchProducts = async (
  limit,
  show,
  current,
  initial,
  order = "id",
  filter
) => {
  tableProduct.innerHTML = null;
  boxPaginator.innerHTML = null;
  try {
    let response = await fetch(
      `/admin/search?current=${current}&limit=${limit}&order=${order}&filter=${filter}`
    );
    let result = await response.json();
    if(result.data.length > 0){
      result.data.forEach((product, index) => {
        addItem(product, index);
      });
    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay productos para la búsqueda ' + filter,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/admin'
        }
      })
   
    }
    console.log(result)
  } catch (error) {
    console.log(error);
  }
};

const confirmDelete = (e) => {
e.preventDefault()
  Swal.fire({
    title: '¿Estás seguro que desea eliminar el producto?',
    text: "No podrá deshacer los cambios",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#353534',
    cancelButtonColor: '#a45323',
    confirmButtonText: 'Si, borralo'
  }).then((result) => {
    if (result.isConfirmed) {
      e.target.submit()
      Swal.fire(
        'Eliminado!',
        'El producto fue eliminado con éxito',
        'success'
      )
    }
  })
}


const addItem = (product, index) => {
  let item = `
    <tr class="text-center">
        <th class="row id-products">
            ${product.id}
        </th>
        <td><img class="w-25"
                src="/images/products/${product.images[0].name}" alt="">
        </td>
        <td>
            ${product.name}
        </td>
        <td>
            ${product.price}
        </td>
        <td>
            ${product.stock}
        </td>
        <td>
            ${product.category.name}
        </td>
        <td class="d-flex">
            <button type="button" class="mx-1 btn btn-sm btn-primary" data-bs-toggle="modal"
            data-bs-target="#viewProduct${product.id}">
            <i class="fas fa-eye"></i>
        </button>
            <a class="mx-1 btn btn-sm btn-success" href="/products/edit/${product.id}"><i
                    class="fas fa-edit"></i></a>
                    <form action="/products/${product.id}?_method=DELETE" method="POST" onsubmit="confirmDelete(event)">
            <div class="div-delete">
                <button type="submit" class="mx-1 btn btn-sm btn-danger"><i
                class="fas fa-trash-alt"></i></button>
            </div> 
        </form>

        </td>

        </tr>

        <div class="modal fade" id="viewProduct${product.id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  
                    <div class="modal-body">
                        <main class="productDetail">
                            <div class="productResponsive">
                                <div class="img-container">
                                    <div class="second-img">`
                                        product.images.forEach(image => {
                                            item += `<img src="/images/products/${image.name}" alt="">`
                                         })
 item += `
                                    </div>
                                    <div class="main-img">
                                        <img src="/images/products/${product.images[0].name}" alt="">
                                    </div>
                                </div>
                                <div class="productResponsive2">
                                    <div class="nombreProducto">
                                        <h2> ${ product.name } </h2>
                                    </div>
                                    <div class="productDescription">
                                        <div class="precio">
                                            <p>Precio: </p>
                                            <p>$ ${toThousand(product.price - product.price * product.discount / 100)}</p>
                                            <span>${product.discount > 0 ? product.discount + 'OFF' : "" }</span>
                                        </div>
                                        <div class="button-container">
                                                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="productDescription-text">
                                <div class="pais-origen">
                                    <p>País de origen: </p>
                                    <p>${product.origin}</p>
                                </div>
                                <div class="text-description">
                                    <b>Descripción: </b><p>${product.description}</p>
                                </div>
                                <div class="text-description">
                                    <b>Cata: </b>${product.tasting}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    `;
  tableProduct.innerHTML += item;
};

/* paginador */

const goPage = async (
  event,
  current,
  limit,
  initial,
) => {
  event.preventDefault();
  tableProduct.innerHTML = null;

  try {
    let response = await fetch(
      `/admin/get-all-products?current=${current}&limit=${limit}`
    );
    let result = await response.json();
    console.log(result);
    result.data.forEach((product, index) => {
      addItem(product, index);
    });
    boxPaginator.innerHTML = null;
    pagination(
      JSON.parse(sessionStorage.getItem("total")),
      limit,
      6,
      current,
      initial
    );
  } catch (error) {
    console.log(error);
  }
};

const goPagesNext = (event, total, limit, show, current, initial) => {
  event.preventDefault();
  current = current + show;
  initial = initial + show;
  boxPaginator.innerHTML = null;
  pagination(total, limit, show, current, initial);
  goPage(event, current, limit, initial);
};

const goPageLast = (event, total, limit, show, current, initial) => {
  event.preventDefault();
  current = current - show;
  initial = initial - show;
  boxPaginator.innerHTML = null;
  pagination(total, limit, show, current, initial);
  goPage(event, current, limit, initial);
};

const goFirst = (event, total, limit, show) => {
  event.preventDefault();
  boxPaginator.innerHTML = null;
  pagination(total, limit, show, 1, 1);
  goPage(event, 1, limit, 1);
};

const goLast = (event, total, limit, show, pages) => {
  event.preventDefault();
  boxPaginator.innerHTML = null;
  let current = pages;
  let initial = pages - show;
  goPage(event, current, limit, initial);

  pagination(total, limit, show, current, initial);
};

function pagination(total, limit, show, current, initial) {
  let pages = Math.ceil(total / limit);
  if (initial > 1) {
    boxPaginator.innerHTML = `
    
        <li class="page-item mx-2" >
            <a class="page-link" href="#" onclick="goFirst(event,${total},${limit},${show})"><i class="fas fa-angle-left"></i></a>
        </li>
        <li class="page-item" >
            <a class="page-link" href="#" onclick="goPageLast(event,${total}, ${limit}, ${show}, ${current}, ${initial})"><i class="fas fa-angle-double-left"></i></a>
        </li>`;
  }

  for (let i = initial; i <= initial + show; i++) {
    if (i <= pages) {
      let page = ` 
            <li class="page-item ${current == i ? "active" : ""}" id="pag${i}">
                <a class="page-link"  href="#" onclick="goPage(event,${i},${limit},${initial})">${i}</a>
            </li>`;

      boxPaginator.innerHTML += page;
    }
  }

  if (initial + show < pages) {
    boxPaginator.innerHTML += ` 
        <li class="page-item">
            <a class="page-link" href="#" onclick="goPagesNext(event, ${total}, ${limit}, ${show}, ${current}, ${initial})" ><i class="fas fa-angle-double-right"></i></a>
        </li>
        <li class="page-item goLast mx-2">
            <a class="page-link" href="#" onclick="goLast(event,${total},${limit},${show},${pages})"><i class="fas fa-angle-right"></i></a>
        </li>`;
  }
  boxPaginator.innerHTML += `<p class="text-primary small ms-2 mt-1">pág. ${current} de ${pages}</p>`;
}

/* order */

/*   
loadProduct recibe:
  limit,
  show,
  current,
  initial,
  order = "id",
  filter = "" */


/* $('search-products').addEventListener('keyup', e => {
    let keywords = productos.filter((producto)=>producto.name.toLowerCase().includes(e.target.value.toLowerCase()));
    pagination(keywords, selectLimit.value = 10, 1)
})
 */
