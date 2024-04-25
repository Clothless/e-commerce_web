
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";

export default async function DashboardLayout({children}) {
  const res = await fetch(`http://localhost:3080/sub_categories`)
  let subs = await res.json();
  subs = subs.filter((sub)=>sub.category_id !== 404)

  return (
    <div className="dashLayout">
        <DashNav/>
        <main>
            <DashHeader subs={subs}/>
            <article className="article">
                {children}
            </article>
        </main>
    </div>
  )
}
