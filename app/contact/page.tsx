import ContactClient from "./ContactClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HoRzTeam - Contact Us | Better Horz.",
  description: "Get in touch with the HoRzTeam. We'd love to hear from you.",
}

export default function Contact() {
  return <ContactClient />
}
