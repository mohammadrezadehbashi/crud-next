import baseApi from "./baseApi";


export default async function deletePostById(id) {
  const res=await baseApi.delete(`/posts/${id}`) 
  console.log('ress',res);
  return res
}