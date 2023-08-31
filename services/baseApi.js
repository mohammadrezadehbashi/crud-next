import axios from "axios";


const baseApi=axios.create({
// baseURL:'https://jsonplaceholder.typicode.com',
baseURL:'http://localhost:3004',
})

export default baseApi