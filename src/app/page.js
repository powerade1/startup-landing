import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import FeatureSection from "@/components/Feature";
import SocialProofSection from "@/components/Proof";
import SolutionSection from "@/components/Solution";
import ImpactSection from "@/components/Impact";
import PlanSection from "@/components/Plan";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
    return (
        <div className="light-theme flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col items-center justify-center mt-34">
                <HeroSection />
                <FeatureSection />
                <SocialProofSection /> 
                <SolutionSection />
                <ImpactSection/>
                <PlanSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
