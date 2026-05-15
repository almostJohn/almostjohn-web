"use client";

import { sendEmail } from "@/actions/EmailActions";
import { MessageType } from "@/types";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export function ContactForm() {
	const router = useRouter();
	const [errorResponse, setErrorResponse] = useState("");
	const [successResponse, setSuccessResponse] = useState("");
	const [state, formAction, isPending] = useActionState(sendEmail, null);

	useEffect(() => {
		if (!state) return;

		if (state.type === MessageType.Error) {
			setErrorResponse(state.message);
		} else if (state.type === MessageType.Success) {
			setSuccessResponse(state.message);
			router.refresh();
		}
	}, [state]);

	return (
		<form action={formAction} className="flex flex-col gap-4">
			<div className="grid gap-2">
				<label htmlFor="name" className="text-base font-semibold">
					Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					autoComplete="off"
					className="inline-flex items-center border-b-2 border-neutral-900 p-3 text-base transition-colors placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-200 focus:ring-0 focus:outline-none sm:text-sm"
				/>
			</div>
			<div className="grid gap-2">
				<label htmlFor="email" className="text-base font-semibold">
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="off"
					className="inline-flex items-center border-b-2 border-neutral-900 p-3 text-base transition-colors placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-200 focus:ring-0 focus:outline-none sm:text-sm"
				/>
			</div>
			<div className="grid gap-2">
				<label htmlFor="subject" className="text-base font-semibold">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					autoComplete="off"
					className="inline-flex items-center border-b-2 border-neutral-900 p-3 text-base transition-colors placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-200 focus:ring-0 focus:outline-none sm:text-sm"
				/>
			</div>
			<div className="grid gap-2">
				<label htmlFor="message" className="text-base font-semibold">
					Your Message
				</label>
				<textarea
					name="message"
					id="message"
					className="inline-flex items-center border-b-2 border-neutral-900 p-3 text-base transition-colors placeholder:text-neutral-500 hover:bg-neutral-200 focus:bg-neutral-200 focus:ring-0 focus:outline-none sm:text-sm"
					rows={4}
				/>
			</div>
			<div className="flex items-center justify-start">
				<button
					type="submit"
					disabled={isPending}
					className="px- inline-flex h-9 cursor-pointer items-center justify-center bg-neutral-900 px-4 py-2 text-base font-semibold text-neutral-100 transition-colors hover:bg-neutral-900/90 disabled:pointer-events-none disabled:opacity-50"
				>
					{isPending ? (
						<>
							<Loader2 className="size-4 shrink-0 animate-spin" />
						</>
					) : (
						"Send Message"
					)}
				</button>
			</div>
			{errorResponse && (
				<p className="text-base text-red-500">{errorResponse}</p>
			)}
			{successResponse && (
				<p className="text-base text-green-500">{successResponse}</p>
			)}
		</form>
	);
}
