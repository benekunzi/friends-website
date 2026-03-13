import type { Metadata } from "next";
import CommunityGuidelines from "@/components/CommunityGuidelines";

export const metadata: Metadata = {
  title: "Community Guidelines | Friends",
  description:
    "Learn what content is allowed and forbidden on Friends. Available in multiple languages.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b1015] pt-32 pb-20">
      <CommunityGuidelines />
    </main>
  );
}
