import Image from "next/image";
import Search from "@/components/Search";
export default  function Header() {
    return (
        <header className="px-4 flex h-14  shrink-0 items-center gap-4">
            <a href="/" className ="flex items-center gap-2">
            <Image src="/logo.svg" alt="mvhgame" width ={116.56} height={33.8} Loding="eager"/>
            </a>
            <Search />
        </header>
    );
}