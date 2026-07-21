// type User={
//     id:number;
//     name:string;
//     email:string;
// }

// const users:User[]=[];

// let lastId= 0;

// function addUser(name:string,email:string):User{
//     const user:User={
//         id: ++lastId,
//         name,
//         email
//     }
//     users.push(user);
//     return user;
// }

// addUser("John Doe","john@gmail.com");
// addUser("Jane Smith","jane@gmail.com");
// addUser("Bob Johnson","bob@gmail.com");
// console.log(users);


//lets do the same thing using Omit utility type


// type User={
//     id:number;
//     name:string;
//     email:string;
// }

// const users:User[]=[];

// let lastId= 0;

// function addUser(user:Omit<User, 'id'>):User{
//     const newUser:User={
//         ...user,
//         id: ++lastId
//     }

//     users.push(newUser)
//     return newUser;
// }

// addUser({name:"Dipro",email:"dipro@gmail.com"});
// addUser({name:"Jane Smith",email:"jane@gmail.com"});
// addUser({name:"Bob Johnson",email:"bob@gmail.com"});
// console.log(users);

// Optional properties in TypeScript can be defined using the `?` symbol. This allows properties to be optional when creating objects of that type.

type User={
    id?:number;
    name:string;
    email:string;
}

const users:User[]=[];

let lastId= 0;

function addUser(user:User):User{
    const newUser:User={
        ...user,
        id: ++lastId
    }

    users.push(newUser)
    return newUser;
}

addUser({name:"Dipro",email:"dipro@gmail.com"});
addUser({name:"Jane Smith",email:"jane@gmail.com"});
addUser({name:"Bob Johnson",email:"bob@gmail.com"});
console.log(users);