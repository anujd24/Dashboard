import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
        {/* Left */}
        <div className="w-[14%] bg-blue-300">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
                <span></span>
            </Link>
        </div>
        {/* Right */}
        <div className="w-[86%] bg-red-300">r</div>
    </div>
}
