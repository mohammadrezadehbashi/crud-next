import baseApi from "./baseApi";

export default async function getAllPosts(){
const res=await baseApi.get('/posts');
console.log('sallllam',res);
return res.data;
}