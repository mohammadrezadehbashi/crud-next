import baseApi from "./baseApi";

export default async function createPost({title,body}){
  //  const head={ headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     }}
const res=await baseApi.post('/posts',{title,body})
console.log('DDDATA',res.data);
return res.data;
}