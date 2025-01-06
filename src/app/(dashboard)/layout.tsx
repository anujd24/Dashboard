export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
        {/* Left */}
        <div className="w-[14%] bg-blue-300">L</div>
        {/* Right */}
        <div className="w-[86%] bg-red-300">r</div>
    </div>
}
