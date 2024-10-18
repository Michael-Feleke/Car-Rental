import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
};

function page() {
  return <h2 className="text-2xl  text-red-500">Welcome, Michael</h2>;
}

export default page;
