import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<div className="mt-10 flex flex-col">
			<h1 className="text-2xl font-bold">Get In Touch</h1>
			<div className="mt-6 flex w-full flex-col md:max-w-md">
				<ContactForm />
			</div>
			<div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-500">
				<a
					href="https://policies.google.com/terms?hl=en-US"
					rel="noreferrer"
					target="_blank"
					className="underline underline-offset-4"
				>
					terms
				</a>
				/
				<a
					href="https://policies.google.com/privacy?hl=en-US"
					rel="noreferrer"
					target="_blank"
					className="underline underline-offset-4"
				>
					privacy
				</a>
			</div>
		</div>
	);
}
