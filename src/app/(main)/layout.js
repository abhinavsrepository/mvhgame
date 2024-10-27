import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
export const metadat ={
    title :"MVH game ",
    description:"play and win",
}





export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />  
      <div className="flex flex-1 overflow-hidden">
       <Sidebar/>
        <div className="flex-1 overflow-auto bg-primary p-4 lg:p-8 rounded-tl-xl">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      
    </div>
  );
}
