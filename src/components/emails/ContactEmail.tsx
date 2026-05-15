import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

type ContactEmailProps = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export function ContactEmail({
	name,
	email,
	subject,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>
				{subject} - message from {name}
			</Preview>
			<Tailwind>
				<Body className="bg-neutral-100 py-10 font-sans text-neutral-900">
					<Container className="mx-auto max-w-2xl border border-solid border-neutral-200 bg-white px-10 py-12">
						<Section>
							<Heading className="m-0 text-3xl font-bold">New Letter</Heading>
							<Text className="mt-2 text-sm text-neutral-500">
								Sent from your website contact form.
							</Text>
						</Section>
						<Hr className="my-8 border border-neutral-200" />
						<Section>
							<Text className="m-0 text-sm text-neutral-500">From</Text>
							<Text className="m-0 mt-2 text-base font-semibold">{name}</Text>
							<Text className="m-0 font-mono text-base">{email}</Text>
						</Section>
						<Hr className="my-8 border border-neutral-200" />
						<Section>
							<Text className="mb-6 text-base leading-7">Dear John,</Text>
							<Text className="text-base leading-8 whitespace-pre-wrap">
								{message}
							</Text>
							<Text className="mt-10 text-base leading-7">
								Sincerely,
								<br />
								{name}
							</Text>
						</Section>
						<Hr className="my-8 border border-neutral-200" />
						<Section>
							<Text className="text-center text-xs text-neutral-500">
								This email was sent from your website contact form.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
