import axios from "axios";
const URL='http://20.244.56.144/test/auth';
class ProductsService{

getAllProduct(){
    return axios.get(URL+"/getrequest");
}
createProduct(product){
    return axios.post(URL+"/postrequest",product);
}
getProductById(productId){
    return axios.get(URL+'/getrequest'+productId);
}
updateProduct(productId,product){
    return axios.put(URL+'/putrequest/'+productId,product);
}
deleteProlist(productId){
    return axios.delete(URL+'/deleterequest/'+productId);
}
}
export default new ProductsService();