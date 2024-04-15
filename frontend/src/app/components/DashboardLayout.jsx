
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";

export default function DashboardLayout({children}) {
  return (
    <div className="dashLayout">
        <DashNav/>
        <main>
            <DashHeader/>
            <article className="article">
                {children}
            </article>
        </main>
    </div>
  )
}
