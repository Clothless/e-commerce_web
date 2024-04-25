

const ProductTable = ({products}) => {

  return (
    products.length === 0
    ?
    <h1 className="text-center mt-[30px] text-gray-600">no products to show</h1>
    :
    <div className="overflow-x-auto mt-[20px]">
      <table className="w-full table-auto border border-[#e5e7eb]">
        <thead className='border-b border-[#e5e7eb]'>
          <tr className="text-[#71717a]">
            <th className="px-4 py-2 font-semibold text-[14px]">Product</th>
            <th className="px-4 py-2 font-semibold text-[14px]">Description</th>
            <th className="px-4 py-2 font-semibold text-[14px]">Status</th>
          </tr>
        </thead>
        <tbody className='text-[15px]'>
          {products.map((product, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100 border-b transition duration-300">
              <td className="text-center px-4 py-3 font-semibold">{product.name}</td>
              <td className="text-center px-4 py-3">{product.description}</td>
              <td className="text-center px-4 py-3">
                <span className={`text-[13px] w-fit h-fit p-[3px] px-[6px] rounded-[20px] border ${product.pending===0?"border-green-600 text-green-600" : "border-yellow-400 text-yellow-400"}`}>{product.pending===0?"approved":"pending"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;