import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className='w-full'>{children}</main>
      <Footer />
    </>
  );
}
