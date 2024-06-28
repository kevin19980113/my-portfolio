import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactTemplate({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-white text-black px-4 py-10">
          <Container className="bg-gray-50 rounded-xl border border-black/10 px-10 py-10">
            <Heading className="leading-tight text-lg font-bold">
              {`You received the following message from ${senderEmail}`}
            </Heading>
            <Hr />
            <Text className="text-base font-medium">{message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
