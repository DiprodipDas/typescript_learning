type User={
    id:number;
    name:string;
    email:string;
}

type Product= {
    id: number;
    name: string;
    price: number;
}

type Order ={
    id: number;
    userId: number;
    total: number;
    date: string;
    status: "pending"|"shipped"|"delivered"
}

// /api/users /api/products /api/orders

// without generic

// async function getUsers(): Promise<User[]>{
//     const data= await fetch ('/api/users')
//     return data.json()
// }

// async function getProducts(): Promise<Product[]>{
//     const data= await fetch ("/api/products")
//     return data.json()
// }
// async function getOrders(): Promise<Order[]>{
//     const data= await fetch ("/api/orders")
//     return data.json()
// }

// above all function are migrated into 1 single function using  generic! all things from above 3 function are now modified into this one function
//with generic
async function get<T>(apiEndPoint:string): Promise<T>{
    const data= await fetch(apiEndPoint)
    return data.json()
}





const users= await get <User[]>('/api/users')
const products= await get <Product[]>('/api/products')
const orders= await get <Order[]>('/api/orders')

// orders[0].


// const users= await getUsers()
// const products= await getProducts()
// const orders= await getOrders()


// orders[0].




