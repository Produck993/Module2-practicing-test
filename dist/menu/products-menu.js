"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMenu = void 0;
const rl = __importStar(require("readline-sync"));
const ProductManagement_1 = require("../ProductManagement/ProductManagement");
const products_1 = require("./products");
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOW_ALL_PRODUCT"] = 1] = "SHOW_ALL_PRODUCT";
    ProductChoice[ProductChoice["CREAT_PRODUCT"] = 4] = "CREAT_PRODUCT";
    ProductChoice[ProductChoice["EDIT_PRODUCT"] = 5] = "EDIT_PRODUCT";
    ProductChoice[ProductChoice["DELETE_PRODUCT"] = 6] = "DELETE_PRODUCT";
    ProductChoice[ProductChoice["SEACH_PRODUCT"] = 2] = "SEACH_PRODUCT";
    ProductChoice[ProductChoice["SEACH_ITEMS"] = 3] = "SEACH_ITEMS";
    ProductChoice[ProductChoice["CHECKOUT"] = 0] = "CHECKOUT";
})(ProductChoice || (ProductChoice = {}));
class ProductMenu {
    constructor() {
        this.ProductManagement = new ProductManagement_1.ProductManagement();
    }
    run() {
        let choice = -1;
        do {
            console.log(`=========Qu???n l?? s???n ph???m=========`);
            console.log(`1. Hi???n th??? danh s??ch h??ng h??a`);
            console.log(`2. T??m ki???m h??ng h??a theo t??n`);
            console.log(`3. T??m ki???m s???n ph???m theo lo???i`);
            console.log(`4. Th??m s???n ph???m m???i`);
            console.log(`5. S???a danh s??ch s???n ph???m`);
            console.log(`6. X??a danh s??ch s???n ph???m`);
            console.log(`7. Th??m m???i m???t h??ng`);
            console.log(`0. Tho??t`);
            choice = +rl.question(`Nh???p l???a ch???n c???a b???n : `);
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    console.log(`========Hi???n th??? danh s??ch h??ng h??a========`);
                    this.showAllProduct();
                    break;
                }
                case ProductChoice.SEACH_PRODUCT: {
                    console.log(`============T??m ki???m h??ng h??a theo t??n============`);
                    let name = rl.question(`Nh???p t??n h??ng h??a b???n c???n t??m : `);
                    this.seachProduct(name);
                    break;
                }
                case ProductChoice.SEACH_ITEMS: {
                    console.log(`============T??m ki???m h??ng h??a theo lo???i============`);
                    let type = rl.question(`Nh???p t??n lo???i h??ng h??a b???n c???n t??m : `);
                    this.seachItem(type);
                    break;
                }
                case ProductChoice.CREAT_PRODUCT: {
                    console.log(`============Th??m s???n ph???m m???i============`);
                    this.addProduct();
                    break;
                }
                case ProductChoice.EDIT_PRODUCT: {
                    console.log(`============S???a danh s??ch s???n ph???m============`);
                    let name1 = rl.question(`nh???p t??n mu???n s???a : `);
                    let id = +rl.question(`nh???p id m???i : `);
                    let name = rl.question(`nh???p t??n s???n ph???m m???i : `);
                    let type = rl.question(`nh???p lo???i s???n ph???m m???i: `);
                    let mount = +rl.question(`nh???p s??? l?????ng c???a s???n ph???m m???i: `);
                    let price = +rl.question(`nh???p gi?? s???n ph???m m???i m???i: `);
                    let description = rl.question(`nh???p m?? t??? s???n ph???m m???i : `);
                    let date = +rl.question(`nh???p ng??y th??m s???n ph???m m???i : `);
                    let input = new products_1.Products(name, type, price, mount, description, date);
                    this.editProduct(name1, input);
                    break;
                }
                case ProductChoice.DELETE_PRODUCT: {
                    console.log(`============X??a danh s??ch s???n ph???m============`);
                    let name = rl.question(`nh???p t??n h??ng h??a mu???n x??a : `);
                    this.deleteProduct(name);
                    break;
                }
            }
        } while (choice != 0);
    }
    showAllProduct() {
        console.log(`==========danh s??ch s???n ph???m==========`);
        let choice = 1;
        let product = this.ProductManagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (choice < 5) {
                console.log(`M?? h??ng ${product[i].id},T??n s???n ph???m ${product[i].name}, Lo???i h??ng : ${product[i].type} Gi?? : ${product[i].price} S??? l?????ng : ${product[i].mount}, M?? t??? : ${product[i].description} `);
            }
            else {
                console.log(`Kh??ng c?? d??? li???u`);
            }
        }
    }
    addProduct() {
        console.log(`==========th??m h??ng h??a m???i==========`);
        let product = this.inputProduct();
        this.ProductManagement.creatNew(product);
    }
    inputProduct() {
        let id = +rl.question(`nh???p id h??ng h??a m???i : `);
        let name = rl.question(`nh???p t??n s???n ph???m m???i : `);
        let type = rl.question(`nh???p lo???i s???n ph???m : `);
        let mount = +rl.question(`nh???p s??? l?????ng c???a s???n ph???m : `);
        let price = +rl.question(`nh???p gi?? s???n ph???m m???i : `);
        let description = rl.question(`nh???p m?? t??? s???n ph???m m???i : `);
        let date = +rl.question(`nh???p ng??y s???n ph???m m???i : `);
        return new products_1.Products(name, type, price, mount, description, date);
    }
    editProduct(value, newProduct) {
        let choice = -1;
        let product = this.ProductManagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == value) {
                choice = i;
                break;
            }
        }
        if (choice != -1) {
            product[choice] = newProduct;
            return true;
        }
        return false;
    }
    deleteProduct(name) {
        let choice = -1;
        let product = this.ProductManagement.getAll();
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == name) {
                choice = i;
            }
        }
        if (choice != -1) {
            product.splice(choice, 1);
        }
    }
    seachProduct(name) {
        let product = this.ProductManagement.getAll();
        let index = -1;
        for (let i = 0; i < product.length; i++) {
            if (index = -1) {
                index = i;
                if (name === product[index].name) {
                    console.log(`M?? h??ng ${product[index].id},T??n s???n ph???m ${product[index].name}, Lo???i h??ng : ${product[index].type} Gi?? : ${product[index].price} S??? l?????ng : ${product[index].mount}, M?? t??? : ${product[index].description} `);
                }
                else {
                    console.log(`Kh??ng t??m th???y s???n ph???m`);
                }
            }
            return index;
        }
    }
    seachItem(item) {
        let product = this.ProductManagement.getAll();
        let index = -1;
        for (let i = 0; i < product.length; i++) {
            if (index = -1) {
                index = i;
                if (item == product[index].type) {
                    console.log(`M?? h??ng ${product[index].id},T??n s???n ph???m ${product[index].name}, Lo???i h??ng : ${product[index].type} Gi?? : ${product[index].price} S??? l?????ng : ${product[index].mount}, M?? t??? : ${product[index].description} `);
                }
                else {
                    console.log(`Kh??ng t??m th???y lo???i h??ng!!!!!`);
                }
            }
        }
    }
}
exports.ProductMenu = ProductMenu;
