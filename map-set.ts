//set

// const data = new Set <string>()  // define the type=sr=string

// data.add ("Dipro")
// data.add(15)
// data.add (true)

// console.log(data)

//map
// const players = new Map <string,number>()

// players.set("Naymer",10)
// players.set("Messi",10)
// players.set("Ronaldo", 7)

// console.log(players)


const orders= new Map <string, number> ()

function addOrder(juice:string){
    const quantity= (orders.get(juice)?? 0)+1
    orders.set(juice,quantity)
}

addOrder("lemon mint")
addOrder("Mango")
addOrder("lemon mint")
addOrder("apple")
addOrder("apple")


console.log(orders)


