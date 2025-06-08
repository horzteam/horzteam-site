import AboutClient from "./AboutClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HoRzTeam - About Us | Better Horz.",
  description: "Learn about HoRzTeam, our mission, vision and values.",
}

export default function About() {
  return <AboutClient />
}
