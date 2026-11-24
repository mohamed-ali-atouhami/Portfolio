"use server"

import nodemailer from "nodemailer"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

const initialState: ContactState = { status: "idle", message: "" }

function textField(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

export async function sendEmail(
  _previous: ContactState = initialState,
  formData: FormData
): Promise<ContactState> {
  const name = textField(formData, "name")
  const email = textField(formData, "email")
  const message = textField(formData, "message")

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and a message are required." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Enter a valid email address." }
  }

  const user = process.env.EMAIL
  const pass = process.env.PASSWORD

  if (!user || !pass) {
    return { status: "error", message: "Mail is not configured yet." }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    })

    await transporter.sendMail({
      from: `Portfolio <${user}>`,
      to: user,
      replyTo: email,
      subject: "Hi Mohammed Ali",
      text: `name:${name}\nemail:${email}\nmessage:${message}`,
    })

    return { status: "success", message: "Message sent." }
  } catch (error) {
    const info = error as { code?: string; responseCode?: number }
    console.error("Email sending error", info.code, info.responseCode)
    return {
      status: "error",
      message: "Could not send the message. Try again in a moment.",
    }
  }
}
