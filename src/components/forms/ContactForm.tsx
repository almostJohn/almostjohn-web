"use client";

import { sendEmail } from "@/actions/EmailActions";
import { MessageType } from "@/types";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export function ContactForm() {
	const router = useRouter();
	const [errorResponse, setErrorResponse] = useState("");
	const [successResponse, setSuccessResponse] = useState("");
	const [message, setMessage] = useState("");
	const [state, formAction, isPending] = useActionState(sendEmail, null);

	useEffect(() => {
		if (!state) return;

		if (state.type === MessageType.Error) {
			setErrorResponse(state.message);
		} else if (state.type === MessageType.Success) {
			setSuccessResponse(state.message);
			setMessage("");
			router.refresh();
		}
	}, [state]);

	return (
		<form action={formAction} className="flex flex-col gap-4">
			<div className="flex w-full flex-col gap-2">
				<div className="grid gap-2">
					<label htmlFor="name" className="sr-only">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						autoComplete="off"
						className="inline-flex h-9 items-center rounded-md border border-neutral-800 px-3 py-2 transition-all placeholder:text-sm focus:border-neutral-700 focus:bg-neutral-800 focus:ring-0 focus:outline-none"
						placeholder="Name"
						required
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="email" className="sr-only">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						autoComplete="off"
						className="inline-flex h-9 items-center rounded-md border border-neutral-800 px-3 py-2 transition-all placeholder:text-sm focus:border-neutral-700 focus:bg-neutral-800 focus:ring-0 focus:outline-none"
						required
						placeholder="Email"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="subject" className="sr-only">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						autoComplete="off"
						className="inline-flex h-9 items-center rounded-md border border-neutral-800 px-3 py-2 transition-all placeholder:text-sm focus:border-neutral-700 focus:bg-neutral-800 focus:ring-0 focus:outline-none"
						required
						placeholder="Subject"
					/>
				</div>
				<div className="grid gap-2">
					<label htmlFor="message" className="sr-only">
						Your Message
					</label>
					<textarea
						name="message"
						id="message"
						className="inline-flex h-18 resize-none items-center rounded-md border border-neutral-800 px-3 py-2 transition-all placeholder:text-sm focus:border-neutral-700 focus:bg-neutral-800 focus:ring-0 focus:outline-none"
						rows={4}
						maxLength={200}
						required
						placeholder="Your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
			</div>
			<div className="-mt-1 flex items-center justify-start">
				<button
					type="submit"
					disabled={isPending || !message.trim()}
					className="inline-flex h-9 cursor-pointer items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white disabled:pointer-events-none disabled:opacity-50"
				>
					{isPending ? "Sending..." : "Send Message"}
				</button>
			</div>
			{errorResponse && <p className="text-sm text-red-500">{errorResponse}</p>}
			{successResponse && (
				<p className="text-sm text-emerald-500">{successResponse}</p>
			)}
		</form>
	);
}
