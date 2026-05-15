import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
	title: "Contact",
};

export default function ContactPage() {
	return (
		<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col px-6 py-24 sm:px-4">
			<div className="flex flex-col">
				<h1 className="text-5xl leading-tight font-bold">Let's Get In Touch</h1>
				<p className="mt-2 text-xl font-light text-neutral-500">
					Want to discuss a project, an idea, or an opportunity? Just fill out
					this form or write me an{" "}
					<a
						href="mailto:garcia.johngale@gmail.com"
						rel="noreferrer"
						target="_blank"
						className="font-bold underline-offset-2 hover:underline"
					>
						email
					</a>
					.
				</p>
				<div className="mt-10 w-full max-w-lg">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
