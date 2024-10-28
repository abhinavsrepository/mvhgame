export default function NotFound(){
    return (
        <section className="flex items-center justify-center h-screen bg-[url('/page/not-found.jpg')] bg-cover" >
          <div className="flex flex-col text-center">  <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl lg:leading-tight" >404</h1>
          <p className="mb-4 text-lg font-normal text-gray-200 lg:text-lg">Page Not Found.</p>
          </div>
        </section>
    )
}