"use client";
export default async function FilterSide({categories, subCategories}) {
  return (
    <div className="filterside">
        <div className="container">
            <div className="title">Filter <img src="/filter.png" alt="" /></div>
            <form action="" className="filters">
                <div className="categoriesLine part">
                    <h3>Categories</h3>
                    {categories.map((category, id) => {
                    return (
                        <div key={id} className="categoryFilter">
                            <div className="line">
                                <input type="checkbox" name="categories[]" id="" value={category} />
                                <label htmlFor="">{category}</label>
                            </div>
                            <div className="subCategoriesLine">
                                {subCategories[category].map((subCategory, subId) => (
                                    <div key={subId} className="subcategoryLine">
                                        <input type="checkbox" name={`subcategories[]`} id="" value={subCategory} />
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
                        <input type="checkbox" />
                    </div>
                    <div className="line">
                        <label htmlFor="">Posted from: </label>
                        <input type="date" />
                    </div>
                </div>
                <input type="submit" value={"apply"} />
            </form>
        </div>
    </div>
  )
}
