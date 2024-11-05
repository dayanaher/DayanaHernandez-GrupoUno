import {renderToString} from "react-dom/server.js";

export const products = [
    {
        id: 1,
        name: 'Manzana',
        price: 299,
        despcription: 'La manzana es una fruta con textura firme, jugosa, refrescante, de sabor amable y suave',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'Frutas',

    },
    {
        id: 2,
        name: 'Zanahoria',
        price: 300,
        despcription: 'Las zanahorias tiernas y de buen color tienen un sabor delicado y son ideales para comerlas crudas.',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'Verduras',

    },
    {
        id: 3,
        name: 'Aceite de oliva',
        price: 310,
        despcription: 'El aceite de oliva es el sabor de la tradición',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'Aceites',
    },
    {
        id: 4,
        name: 'Porotos',
        price: 310,
        despcription: 'Son una buena fuente de fibra dietética, otorgando una sensación de saciedad prolongada.',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'Legumbres',
    },
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products);
        }, 2000);
    })
}

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};
