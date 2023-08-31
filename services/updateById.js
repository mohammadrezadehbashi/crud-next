import baseApi from "./baseApi";

export default async function updateById(values){
    const res = await baseApi.put(`/posts/${values.id}`,{title:values.title,body:values.body})

    return res
}