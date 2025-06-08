import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "HoRzTeam - Home | Better Horz.",
  description: "HoRzTeam - Creating innovative digital experiences. Better Horz.",
}

export default function Home() {
  return <ClientPage />
}
