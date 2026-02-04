import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-20">
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
