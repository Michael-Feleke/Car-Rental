import SideNavigation from "../_components/SideNavigation";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <main className="p-4">{children}</main>
    </div>
  );
}

export default Layout;
