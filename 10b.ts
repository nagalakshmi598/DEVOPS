interface Product
{
productId: number;
productName:string;
}

39

function getProductDetails(productobj: Product): string
{
return 'The product name is : ' + productobj.productName;
}
const prodObject = {productId: 1001, productName: 'Mobile',
productCategory: 'Gadget'};
const productDetails: string = getProductDetails(prodObject);
console.log(productDetails)