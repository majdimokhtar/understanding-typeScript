import "reflect-metadata"
import { Product } from "./product-model";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

const products = [{title : "Carpet",price :100},{title : "Carpet",price :100}]
// const p1 = new Product("a book" , 12)


// const loadedProds = products.map((prod)=>{
//     return new Product(prod.title,prod.price)
// })
const newProd = new Product("",55)
validate(newProd).then((errors)=>{
    if (errors.length >0) {
        console.log(errors);
    } else {
        console.log(newProd.getInfo());
    }
})

const loadedProds = plainToClass(Product,products)

for (const product of loadedProds ){
    console.log(product.getInfo());
}
