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
		<form
			action={formAction}
			className="flex flex-col gap-4 bg-neutral-200/60 p-6"
		>
			<h2 className="text-lg font-semibold tracking-tight underline underline-offset-4">
				Get in Touch
			</h2>
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
						className="inline-flex items-center rounded-none border border-neutral-300 bg-white px-2 py-1"
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
						className="inline-flex items-center rounded-none border border-neutral-300 bg-white px-2 py-1"
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
						className="inline-flex items-center rounded-none border border-neutral-300 bg-white px-2 py-1"
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
						className="inline-flex h-20 resize-none items-center rounded-none border border-neutral-300 bg-white px-2 py-1"
						rows={4}
						maxLength={200}
						required
						placeholder="Your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex items-center justify-end">
				<button
					type="submit"
					disabled={isPending || !message.trim()}
					className="inline-flex cursor-pointer items-center justify-center border border-neutral-400 bg-neutral-300 px-2 py-1 text-sm font-medium disabled:pointer-events-none disabled:opacity-50"
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
