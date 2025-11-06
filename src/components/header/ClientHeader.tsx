"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ClientHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <Header mode={isHome ? "home" : "compact"} />;
}
