import HeroSection from "@/components/Hero";
import FeatureSection from "@/components/Feature";
import SocialProofSection from "@/components/Proof";
import SolutionSection from "@/components/Solution";
import ImpactSection from "@/components/Impact";
import PlanSection from "@/components/Plan";
import CTASection from "@/components/CTA";

export default function LandingPage() {
    return (
        <main className="flex flex-col items-center">
            <HeroSection />
            <FeatureSection />
            <SocialProofSection />
            <SolutionSection />
            <ImpactSection />
            <PlanSection />
            <CTASection />
        </main>
    );
}
