import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

export default function BreadcrumbC({lines}) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="breadcrumb">
      <BreadcrumbItem href="/">
        Home
      </BreadcrumbItem>
      {lines.map((line,id) => {
        // let url = ;
        return <BreadcrumbItem className={lines.at(-1)===line&&"active"} key={id} href={`/categories/${lines.slice(0,id+1).join("/")}`}>{line}</BreadcrumbItem>
      })}
    </Breadcrumb>
  );
}