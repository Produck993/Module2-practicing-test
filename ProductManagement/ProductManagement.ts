import { Products } from "../menu/products";
import { IProductManagement } from "./iProductManagement";

export class ProductManagement implements IProductManagement{
    private static id : number = 1;
    private static products : Products[] = [];
    getAll(): Products[] {
        return ProductManagement.products;
    }
    creatNew(value: Products): void {
        value.id =  ProductManagement.id++
        ProductManagement.products.push(value);
    }
    updateById(id: number, value: Products): void {
        throw new Error("Method not implemented.");
    }
    removeById(id: number): void {
        throw new Error("Method not implemented.");
    }
    findById(id: number): number {
        let index = -1
        for ( let i = 0; i < ProductManagement.products.length;i++) {
           if (ProductManagement.products[i].id == id) {
                index = i
           }
        }
        return index
    }

}