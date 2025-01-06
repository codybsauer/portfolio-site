// emails/ContactEmail.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactEmailProps {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  inquiryType,
  message,
}: ContactEmailProps) => {
  // Helper function to convert inquiryType to a more thematic display name
  const getQuestType = (type: string) => {
    const questTypes = {
      "full-time": "Main Quest: Full-Time Position",
      freelance: "Side Quest: Freelance Development",
      tutoring: "Training Quest: Programming Tutoring",
      gamemaster: "Adventure Quest: Game Master Services",
      // Default case if type doesn't match
      default: "Quest Type",
    };
    return questTypes[type as keyof typeof questTypes] || questTypes.default;
  };

  return (
    <Html>
      <Head />
      <Preview>New Quest Request from {name}</Preview>
      <Tailwind>
        <Body className="bg-[#020617] font-mono">
          <Container className="mx-auto py-5 px-4">
            {/* Main Header */}
            <Section className="bg-[#1e1b4b] rounded-lg p-6 mb-6 text-center border border-[#6366f1]">
              <Heading className="text-2xl font-bold text-[#60a5fa] m-0">
                NEW QUEST REQUEST
              </Heading>
              <Text className="text-[#93c5fd] m-0 mt-2">
                A new adventurer seeks to join forces!
              </Text>
            </Section>

            {/* Player Info Section */}
            <Section className="bg-[#1e1b4b] rounded-lg p-6 mb-6 border border-[#6366f1]">
              <Heading className="text-xl text-[#60a5fa] mb-4">
                PLAYER STATS
              </Heading>
              <Text className="text-[#93c5fd] mb-2">
                Name: <span className="text-white">{name}</span>
              </Text>
              <Text className="text-[#93c5fd] mb-2">
                Communication Crystal:{" "}
                <span className="text-white">{email}</span>
              </Text>
              <Text className="text-[#93c5fd] mb-2">
                Quest Type:{" "}
                <span className="text-white">{getQuestType(inquiryType)}</span>
              </Text>
            </Section>

            {/* Message Section */}
            <Section className="bg-[#1e1b4b] rounded-lg p-6 border border-[#6366f1]">
              <Heading className="text-xl text-[#60a5fa] mb-4">
                QUEST DETAILS
              </Heading>
              <Text className="text-white whitespace-pre-wrap leading-relaxed">
                {message}
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-6 text-center">
              <Text className="text-[#93c5fd] text-sm">
                This quest request was received on {new Date().toLocaleString()}
              </Text>
              <Text className="text-[#93c5fd] text-sm">
                Via your Portfolio Quest Board
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
