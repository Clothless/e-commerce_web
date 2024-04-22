"use client";

import { useState } from "react";
import { filterProducts } from "../actions/filterProducts";

export default function FilterSide({categories, subCategories}) {
    const [checkedCategories, setCheckedCategories] = useState([]);
  return (
    <div className="filterside">

            <form action={filterProducts} className="filters">
                <div className="categoriesLine part">
                    <h3>Categories</h3>
                    {categories.map((category, id) => {
                    return (
                        <div key={id} className="categoryFilter">
                            <div className="line">
                                <input type="checkbox" name="categories[]" id="" value={category} checked={checkedCategories.includes(category)}                     onChange={() =>
                                setCheckedCategories((prevCheckedCategories) =>
                                    prevCheckedCategories.includes(category)
                                    ? prevCheckedCategories.filter((c) => c !== category)
                                    : [...prevCheckedCategories, category]
                                )
                                } />
                                <label htmlFor="">{category}</label>
                            </div>
                            <div className="subCategoriesLine">
                                {subCategories[category].map((subCategory, subId) => (
                                    <div key={subId} className="subcategoryLine">
                                        <input type="checkbox" disabled={checkedCategories.includes(category)} name={`subcategories[]`} id="" value={subCategory} />
                                        <label htmlFor="">{subCategory}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                    })}
                </div>
                <h3>Other</h3>
                <div className="other">
                    <div className="line">
                        <label htmlFor="">Price: </label>
                        <input type="text" placeholder="MIN" name="min"/>
                        <input type="text" placeholder="MAX" name="max"/>
                    </div>
                    <div className="line">
                        <label htmlFor="">delivery: </label>
                        <input type="checkbox" name="isDeliver" />
                    </div>
                    <div className="line">
                        <label htmlFor="">Posted from: </label>
                        <input type="date" name="postedFrom"/>
                    </div>
                </div>
                <input type="submit" value={"apply"} />
            </form>
    </div>
  )
}
