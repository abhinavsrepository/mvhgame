export const metadat ={
    title :"MVH game ",
    description:"play and win",
}





export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header>Header</header>
      <div className="flex flex-1 overflow-hidden">
        <aside>Sidebar</aside>
        <div className="flex-1 overflow-auto bg-primary p-4 lg:p-8 rounded-tl-xl">
          <main>{children}</main>
        </div>
      </div>
      {children}
    </div>
  );
}
