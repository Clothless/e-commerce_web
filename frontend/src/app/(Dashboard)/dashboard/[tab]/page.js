
import ActionsC from "@/app/components/ActionsC";
import "./table.css"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default async function page({params}) {
    let {tab} = params;
    tab = tab === "sub-categories"?"sub_categories" : tab;
    const res = await fetch(`http://localhost:3080/${tab}`)
    let data = await res.json();
    data = tab === "products" ? data.data : data;
    data = tab === "categories" ? data.filter((value)=> value.category_id !== 404) : data;
    data = tab === "sub_categories" ? data.filter((value)=> value.category_id !== 404) : data;
    let headers = data.length === 0 ? [] : Object.keys(data[0])
    return (
    // <table className="order-table">
    //     <thead>
    //       <tr>
    //         {headers.map((header, index) => (
    //           <th key={index}>{header}</th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((order, index) => (
    //         <tr key={index}>
    //           {headers.map((header, headerIndex) => (
    //             <td key={headerIndex}>{order[header]}</td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    // </table>
    data.length === 0 ? (
      <h1 style={{textAlign:"center", marginTop:"30px"}}>data not found</h1>
    ):(
      <div id="tableHolder" className={` overflow-x-auto m-5 border border-[#e5e7eb] rounded-[7px] `}>
      <Table hoverable>
        <TableHead>
          {headers.map((header, index) => (
            <TableHeadCell key={index}>{header}</TableHeadCell>
          ))}
          <TableHeadCell>
            <span>Actions</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {data.map((order, index) => (
              <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                {headers.map((header, headerIndex) => (
                  <TableCell className="text-nowrap py-2" key={headerIndex}>{order[header]===""?"N/A":header==="created_at"?order[header].replace("T"," | ").split("Z").join(" ").slice(0,-5):order[header]}</TableCell>
                ))}
                <TableCell>
                  <ActionsC images={(tab === "products")&&JSON.parse(order[headers[5]])} tab={tab} theId={order[headers[0]]} header={`Edit ${headers[0].at(0).toUpperCase()+headers[0].slice(1).split("_")[0]}`}/>
                </TableCell>
              </TableRow>
          ))}
          {/* <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
      </div>
    )
    )
}