import Section from "../components/section/section";

export default function LegalPage() {

    return (
        <Section>
        <div className="flex flex-col items-center py-8">
            <h1 className="text-5xl font-extrabold text-neutral-800 mb-2">
            Legal Information
            </h1>
            <p className="text-xl text-gray-600 mb-6">
            This page contains important legal information about our services.
            </p>
        </div>   
        </Section>
    )
}