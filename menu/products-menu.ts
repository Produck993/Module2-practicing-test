import * as rl from 'readline-sync'
import { ProductManagement } from '../ProductManagement/ProductManagement';
import { Products } from './products';
enum ProductChoice {
    SHOW_ALL_PRODUCT  = 1,
    CREAT_PRODUCT     = 4,
    EDIT_PRODUCT      = 5,
    DELETE_PRODUCT    = 6,
    SEACH_PRODUCT     = 2,
    SEACH_ITEMS     = 3,
    
    CHECKOUT          = 0
}

export class ProductMenu{
    private ProductManagement = new ProductManagement();
        run() {
            let choice = -1
            do {
                console.log(`=========Quản lý sản phẩm=========`)
                console.log(`1. Hiển thị danh sách hàng hóa`)
                console.log(`2. Tìm kiếm hàng hóa theo tên`)
                console.log(`3. Tìm kiếm sản phẩm theo loại`)
                console.log(`4. Thêm sản phẩm mới`)
                console.log(`5. Sửa danh sách sản phẩm`)
                console.log(`6. Xóa danh sách sản phẩm`)
                console.log(`7. Thêm mới mặt hàng`)
                console.log(`0. Thoát`)
                choice = +rl.question(`Nhập lựa chọn của bạn : `)
                switch ( choice) {
                    case ProductChoice.SHOW_ALL_PRODUCT : {
                console.log(`========Hiển thị danh sách hàng hóa========`)
                        this.showAllProduct();
                        break;
                    }
                    case ProductChoice.SEACH_PRODUCT : {
                        console.log(`============Tìm kiếm hàng hóa theo tên============`)
                        let name = rl.question(`Nhập tên hàng hóa bạn cần tìm : `)
                        this.seachProduct(name)
                                break;
                            }
                    case ProductChoice.SEACH_ITEMS : {
                        console.log(`============Tìm kiếm hàng hóa theo loại============`)
                        let type = rl.question(`Nhập tên loại hàng hóa bạn cần tìm : `)
                        this.seachItem(type)
                                        break;
                                    }
                    case ProductChoice.CREAT_PRODUCT : {
                console.log(`============Thêm sản phẩm mới============`)
                        this.addProduct();
                        break;
                    }
                    case ProductChoice.EDIT_PRODUCT : {
                console.log(`============Sửa danh sách sản phẩm============`)
                let name1 = rl.question(`nhập tên muốn sửa : `)
                let id = +rl.question(`nhập id mới : `)
                let name = rl.question(`nhập tên sản phẩm mới : `)
                let type = rl.question(`nhập loại sản phẩm mới: `)
                let mount = +rl.question(`nhập số lượng của sản phẩm mới: `)
                let price = +rl.question(`nhập giá sản phẩm mới mới: `)
                let description = rl.question(`nhập mô tả sản phẩm mới : `)
                let date = +rl.question(`nhập ngày thêm sản phẩm mới : `)
                let input = new Products(name,type,price,mount,description, date)
                this.editProduct(name1,input)
                        break ; 
                    }
                    case ProductChoice.DELETE_PRODUCT : {
                console.log(`============Xóa danh sách sản phẩm============`)
                let name = rl.question(`nhập tên hàng hóa muốn xóa : `)
                        this.deleteProduct(name)
                        break;
                    }

                }
            } while (choice != 0)
        }
        showAllProduct() {
            console.log(`==========danh sách sản phẩm==========`)
            let choice = 1
            let product = this.ProductManagement.getAll();
            for (let i = 0; i < product.length; i++ ) {
                if (choice < 5) {
                console.log(`Mã hàng ${product[i].id},Tên sản phẩm ${product[i].name}, Loại hàng : ${product[i].type} Giá : ${product[i].price} Số lượng : ${product[i].mount}, Mô tả : ${product[i].description} `)
            } else { 
                console.log(`Không có dữ liệu`)
            }
        }
        }
        addProduct() {
            console.log(`==========thêm hàng hóa mới==========`)    
            let product = this.inputProduct()
            this.ProductManagement.creatNew(product)
        }
    
        inputProduct() {
            let id = +rl.question(`nhập id hàng hòa mới : `)
            let name = rl.question(`nhập tên sản phẩm mới : `)
            let type = rl.question(`nhập loại sản phẩm : `)
            let mount = +rl.question(`nhập số lượng của sản phẩm : `)
            let price = +rl.question(`nhập giá sản phẩm mới : `)
            let description = rl.question(`nhập mô tả sản phẩm mới : `)
            let date = +rl.question(`nhập ngày sản phẩm mới : `)
            return new Products(name,type,price,mount,description,date)
        }

    editProduct(value : string, newProduct : Products) : boolean {
        let choice = -1
        let product = this.ProductManagement.getAll()
        for (let i = 0; i < product.length; i ++) {
            if (product[i].name == value) {
                choice = i
                break;
            }
        }
        if (choice != -1) {
            product[choice] = newProduct
            return true
        } return false
    }
    deleteProduct(name : string) {
        let choice = -1
        let product = this.ProductManagement.getAll()
        for (let i = 0; i < product.length; i ++) {
            if (product[i].name == name) {
                choice = i
            }
        }
        if (choice != -1) {
            product.splice(choice,1)
        } 
    }
    seachProduct(name : string) {
        let product = this.ProductManagement.getAll()
        let index = -1
        for ( let i = 0 ; i < product.length; i ++) {
            if (index = -1) {
                index = i
                if (name === product[index].name) {
                    console.log(`Mã hàng ${product[index].id},Tên sản phẩm ${product[index].name}, Loại hàng : ${product[index].type} Giá : ${product[index].price} Số lượng : ${product[index].mount}, Mô tả : ${product[index].description} `)
                } else {
                    console.log(`Không tìm thấy sản phẩm`)
                }
            }  return index
        }
    }
    seachItem(item : string) {
        let product = this.ProductManagement.getAll()
        let index = -1
        for ( let i = 0 ; i < product.length; i ++) {
            if (index = -1) {
                index = i
                if (item == product[index].type) {
                    console.log(`Mã hàng ${product[index].id},Tên sản phẩm ${product[index].name}, Loại hàng : ${product[index].type} Giá : ${product[index].price} Số lượng : ${product[index].mount}, Mô tả : ${product[index].description} `)
                } else {
                    console.log(`Không tìm thấy loại hàng!!!!!`)
                }
            }  
        }
     
    }
}
