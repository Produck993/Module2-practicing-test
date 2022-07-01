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
var ProductChoice;
(function (ProductChoice) {
    ProductChoice[ProductChoice["SHOW_ALL_PRODUCT"] = 1] = "SHOW_ALL_PRODUCT";
    ProductChoice[ProductChoice["CREAT_PRODUCT"] = 2] = "CREAT_PRODUCT";
    ProductChoice[ProductChoice["EDIT_PRODUCT"] = 3] = "EDIT_PRODUCT";
    ProductChoice[ProductChoice["DELETE_PRODUCT"] = 4] = "DELETE_PRODUCT";
    ProductChoice[ProductChoice["SEACH_PRODUCT"] = 5] = "SEACH_PRODUCT";
    ProductChoice[ProductChoice["SORT_PRODUCT"] = 6] = "SORT_PRODUCT";
    ProductChoice[ProductChoice["ADD_PRODUCT_TO_CATEGORY"] = 7] = "ADD_PRODUCT_TO_CATEGORY";
    ProductChoice[ProductChoice["CHECKOUT"] = 0] = "CHECKOUT";
})(ProductChoice || (ProductChoice = {}));
class ProductMenu {
    run() {
        let choice = -1;
        do {
            console.log(`=========Quản lý sản phẩm=========`);
            console.log(`1. Hiển thị danh sách hàng hóa`);
            console.log(`2. Tìm kiếm hàng hóa theo tên`);
            console.log(`3. Thêm sản phẩm mới`);
            console.log(`3. Sửa danh sách sản phẩm`);
            console.log(`4. Xóa danh sách sản phẩm`);
            console.log(`0. Thoát`);
            choice = +rl.question(`Nhập lựa chọn của bạn : `);
            switch (choice) {
                case ProductChoice.SHOW_ALL_PRODUCT: {
                    console.log(`========Hiển thị danh sách hàng hóa========`);
                    break;
                }
                case ProductChoice.SEACH_PRODUCT: {
                    console.log(`============Tìm kiếm hàng hóa theo tên============`);
                    break;
                }
                case ProductChoice.CREAT_PRODUCT: {
                    console.log(`============Thêm sản phẩm mới============`);
                    break;
                }
                case ProductChoice.EDIT_PRODUCT: {
                    console.log(`============Sửa danh sách sản phẩm============`);
                    break;
                }
                case ProductChoice.DELETE_PRODUCT: {
                    console.log(`============Xóa danh sách sản phẩm============`);
                    break;
                }
            }
        } while (choice != 0);
    }
}
exports.ProductMenu = ProductMenu;
