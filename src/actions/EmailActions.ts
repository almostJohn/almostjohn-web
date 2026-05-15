"use server";

import { ContactEmail } from "@/components/emails/ContactEmail";
import { MessageType } from "@/types";
import {
	EMAIL_REGEX,
	MESSAGE_MAX_LENGTH,
	MESSAGE_MIN_LENGHT,
	NAME_MAX_LENGTH,
	NAME_MIN_LENGTH,
	SUBJECT_MAX_LENGTH,
	SUBJECT_MIN_LENGTH,
} from "@/util/constants";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const appEmail = process.env.NEXT_APP_EMAIL!;

export async function sendEmail(_: unknown, form: FormData) {
	try {
		const name = form.get("name") as string;
		const email = form.get("email") as string;
		const subject = form.get("subject") as string;
		const message = form.get("message") as string;

		if (!name || !email || !subject || !message) {
			return {
				type: MessageType.Error,
				message: "All fields are required.",
			};
		}

		if (
			typeof name !== "string" ||
			name.length < NAME_MIN_LENGTH ||
			name.length > NAME_MAX_LENGTH
		) {
			return {
				type: MessageType.Error,
				message: "Invalid name length and type.",
			};
		}

		if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
			return {
				type: MessageType.Error,
				message: "Invalid email format.",
			};
		}

		if (
			typeof subject !== "string" ||
			subject.length < SUBJECT_MIN_LENGTH ||
			subject.length > SUBJECT_MAX_LENGTH
		) {
			return {
				type: MessageType.Error,
				message: "Invalid subject length and type.",
			};
		}

		if (
			typeof message !== "string" ||
			message.length < MESSAGE_MIN_LENGHT ||
			message.length > MESSAGE_MAX_LENGTH
		) {
			return {
				type: MessageType.Error,
				message: "Invalid message length and type.",
			};
		}

		const { error } = await resend.emails.send({
			from: "no_reply <onboarding@resend.dev>",
			to: [appEmail],
			subject,
			react: ContactEmail({ name, email, subject, message }),
		});

		if (error) {
			return {
				type: MessageType.Error,
				message: "There was an error sending your email.",
			};
		}

		revalidatePath("/contact");

		return { type: MessageType.Success, message: "Email successfully sent." };
	} catch (error) {
		const err = error as Error;
		console.error(err.message, err);
		return {
			type: MessageType.Error,
			message: "There was an error sending your email.",
		};
	}
}
