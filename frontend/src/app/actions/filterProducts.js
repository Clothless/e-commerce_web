"use server";
import { redirect } from 'next/navigation'
export async function filterProducts(formData){
    const categories = formData.getAll('categories[]');
    const subCategories = formData.getAll('subcategories[]');
    const min = formData.get("min");
    const max = formData.get("max");
    const isDeliver = formData.get('isDeliver');
    const postedFrom = formData.get('postedFrom');
    let categoriesQuery = categories ? categories.map(category=> `category=${category}`.toLowerCase()).join("&") : [];
    let subCategoriesQuery = subCategories ? subCategories.map(sub=>`sub_category=${sub}`.toLowerCase()).join("&") : [];
    let query = []
    if(categoriesQuery.length > 0){
        query.push(categoriesQuery)
    }
    if(subCategoriesQuery.length > 0){
        query.push(subCategoriesQuery)
    }
    if(min){
        query.push(`priceFrom=${min}`)
    }
    if(max){
        query.push(`priceTo=${max}`)
    }
    if(isDeliver){
        query.push(`shipping=${isDeliver}`)
    }
    if(postedFrom){
        query.push(`from=${postedFrom}`)
    }
    const res = await fetch(`http://localhost:3080/products/filter`,{
        method:'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
        body:query.join("&")
    })
    const data = await res.json()
}