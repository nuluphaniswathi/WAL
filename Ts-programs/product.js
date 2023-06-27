//create product class
var Product = /** @class */ (function () {
    function Product(_productno, _productName, _brand, _mrp) {
        this._productno = _productno;
        this._productName = _productName;
        this._brand = _brand;
        this._mrp = _mrp;
    }
    Object.defineProperty(Product.prototype, "productno", {
        get: function () {
            return this._productno;
        },
        set: function (newValue) {
            this._productno = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productName", {
        get: function () {
            return this._productName;
        },
        set: function (newValue) {
            this._productName = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (newValue) {
            this._brand = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "mrp", {
        get: function () {
            return this._mrp;
        },
        set: function (newValue) {
            this._mrp = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getDiscount = function (discount) {
        var mrp = this._mrp;
        var discount1 = (discount / 100) * mrp;
        var result = mrp - discount1;
        return result;
    };
    return Product;
}());
var prod1 = new Product(1, "product1", "brand1", 5000);
console.log(prod1);
console.log(prod1.getDiscount(5));
var prod2 = new Product(2, "product2", "brand2", 5000);
console.log(prod2);
console.log(prod2.getDiscount(5));
var prod3 = new Product(3, "product3", "brand3", 5000);
console.log(prod3);
console.log(prod3.getDiscount(5));
var prod4 = new Product(4, "product4", "brand4", 5000);
console.log(prod4);
console.log(prod4.getDiscount(5));
var prod5 = new Product(5, "product5", "brand5", 5000);
console.log(prod5);
console.log(prod5.getDiscount(5));
