import type { Metadata } from "next"
import PrivacyClientPage from "./PrivacyClientPage"

export const metadata: Metadata = {
  title: "HoRzTeam - Privacy Policy | Better Horz.",
  description: "Learn how HoRzTeam protects your data and privacy.",
}

export default function Privacy() {
  return <PrivacyClientPage />
}
