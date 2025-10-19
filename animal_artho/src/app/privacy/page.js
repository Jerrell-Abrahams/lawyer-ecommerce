import Section from "../components/section/section";

export default function PrivacyPage() {

    return (
      <Section>
        <div className="flex flex-col items-center py-8">
          <h1 className="text-5xl font-extrabold text-neutral-800 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your privacy is important to us. This policy explains how we handle your data.
          </p>
        </div>   
        </Section>
    )
}