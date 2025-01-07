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
import { ContactEmailProps } from "./types";

export const ContactEmail = ({
  name,
  email,
  inquiryType,
  message,
}: ContactEmailProps) => {
  const getRequestType = (type: string) => {
    const requestTypes = {
      "full-time": "Full-Time Position",
      "part-time": "Part-Time Position",
      freelance: "Freelance Development",
      tutoring: "Programming Tutoring",
      gamemaster: "Game Master Services",
      default: "Other",
    };
    return (
      requestTypes[type as keyof typeof requestTypes] || requestTypes.default
    );
  };

  return (
    <Html>
      <Head />
      <Preview>New Request from {name}</Preview>
      <Tailwind>
        <Body className="bg-[#020617] font-mono">
          <Container className="mx-auto py-5 px-4">
            <Section className="bg-[#1e1b4b] rounded-lg p-6 mb-6 text-center border border-[#6366f1]">
              <Heading className="text-2xl font-bold text-[#60a5fa] m-0">
                NEW REQUEST
              </Heading>
              <Text className="text-[#93c5fd] m-0 mt-2">
                A new adventurer seeks to join forces!
              </Text>
            </Section>

            <Section className="bg-[#1e1b4b] rounded-lg p-6 mb-6 border border-[#6366f1]">
              <Heading className="text-xl text-[#60a5fa] mb-4">
                CONTACT DETAILS
              </Heading>
              <Text className="text-[#93c5fd] mb-2">
                Name: <span className="text-white">{name}</span>
              </Text>
              <Text className="text-[#93c5fd] mb-2">
                Email: <span className="text-white">{email}</span>
              </Text>
              <Text className="text-[#93c5fd] mb-2">
                Request Type:{" "}
                <span className="text-white">
                  {getRequestType(inquiryType)}
                </span>
              </Text>
            </Section>

            <Section className="bg-[#1e1b4b] rounded-lg p-6 border border-[#6366f1]">
              <Heading className="text-xl text-[#60a5fa] mb-4">
                REQUEST DETAILS
              </Heading>
              <Text className="text-white whitespace-pre-wrap leading-relaxed">
                {message}
              </Text>
            </Section>

            <Section className="mt-6 text-center">
              <Text className="text-[#93c5fd] text-sm">
                This request was received on {new Date().toLocaleString()}
              </Text>
              <Text className="text-[#93c5fd] text-sm">
                Via your Portfolio Contact Form
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
