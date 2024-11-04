import { Suspense } from "react";
import Header from "./Header/Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
}
