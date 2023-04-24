//OBJECT

//CRIANDO UM OBJETO LITERAL 
console.log("------------------\n")

let user = {
    name: "Amanda",
    age: 23,
    email: "amandajhes22@gmail.com",
    city: "Fortaleza",
    blogPosts: ["Object Works", "FullStack Developer"],
    login: function () {
        console.log("usuário logado");
    },
    logout: function () {
        console.log("Usuário deslogado");
    },
    logBlogPosts: function () {
        console.log(`Encontrei os posts de Vanessa:`)
        this.blogPosts.forEach((posts) => {
            console.log(posts)
        })
    }
}

console.log(typeof (user))
console.log(user);

//(Notação de ponto)
console.log(user.name);
console.log(user.blogPosts[1])
user.name += " Jéssica"
console.log(user.name);

//(Notação de colchete)
console.log(user['age']);

//(Utilização da notação de colchete)
const key = 'email'
console.log(user[key]);

//BRACKETS IN JAVASCRIPT
console.log("----------------------\n")

let myArray = ["A", "B", "C", "D"];
console.log(`Array: ${myArray}\n1º poição do Array: ${myArray[0]}`);
let myObject = {
    one: "A",
    two: "B",
    tree: "C",
    four: "D"
};
console.log(`Object: ${myObject}\n1º posição do Object: ${myObject.one}`);

//OBJECT METHODS
console.log("----------------------\n")

user.login()
user.logout()

//VARIAVEIS E ESCOPO DE BLOCO
console.log("----------------------\n")

//(escopo global)
let age = 31

//(escopo local do bloco)
if (true) {
    let age = 41
}

//THIS
console.log("----------------------\n")
console.log(user.logBlogPosts());

//OBJETO MATH
console.log("----------------------\n")

//(Math é um objeto várias propriedades e métodos)
console.log(Math)

//(Exemplo de propriedade contida no objeto Math)
console.log(Math.PI)

//(Método do Math para arredondar um valor)
let value = 14.3;
console.log(Math.round(value))

//TIPOS PRIMIIVO E REFERÊNCIA
console.log("----------------------\n")

//(Valores primitivos)
let scoreOne = 50
let scoreTwo = scoreOne

scoreTwo = 100
//(Geram variáveis idependentes que popdem ser alteradas individualmente)
console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

//(Valores Referência)
let userOne = { name: 'Amanda', age: 23 }
let userTwo = userOne

//(Geram um ponteiro que apontam para o mesmo objeto de referência)
console.log(userOne, userTwo)

userTwo.age = 25

console.log(userOne, userTwo)