import type { Metadata } from "next";
import { Folio } from "@/components/folio";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Edition 01 — seven plates. The artifact we send before a call.",
};

export default function LookbookPage() {
  return <Folio />;
}
