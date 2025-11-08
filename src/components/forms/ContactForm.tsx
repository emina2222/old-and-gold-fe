"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Alert,
  Stack,
  CircularProgress,
} from "@mui/material";
import btnStyle from "../ui/button.module.css";

type Status = "idle" | "loading" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [disabled, setDisabled] = React.useState(true);
  const [emailError, setEmailError] = React.useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLFormElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const form = event.currentTarget.form || event.currentTarget.closest("form");
    if (!form) return;

    const formData = new FormData(form);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (email && !validateEmail(email)) {
      setEmailError("Unesite ispravnu email adresu.");
    } else {
      setEmailError(null);
    }

    setDisabled(!name || !email || !message);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !message || !validateEmail(email)) {
      setDisabled(true);
      setEmailError(!validateEmail(email) ? "Unesite ispravnu email adresu." : null);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "ok" : "error");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 480,
        mx: "auto",
      }}
    >
      <TextField
        name="name"
        label="Vaše ime"
        variant="outlined"
        onChange={handleChange}
        required
        fullWidth
      />

      <TextField
        name="email"
        type="email"
        label="Vaša email adresa"
        variant="outlined"
        onChange={handleChange}
        error={!!emailError}
        helperText={emailError || ""}
        required
        fullWidth
      />

      <TextField
        name="message"
        label="Poruka"
        variant="outlined"
        onChange={handleChange}
        required
        fullWidth
        multiline
        minRows={4}
        maxRows={10}
      />

      <button
        type="submit"
        disabled={disabled || status === "loading"}
        className={btnStyle.contactBtn}
      >
        {status === "loading" ? (
          <>
            <CircularProgress size={20} sx={{ mr: 1 }} />
            Slanje...
          </>
        ) : (
          "Pošalji"
        )}
      </button>

      <Stack spacing={1}>
        {status === "ok" && (
          <Alert severity="success">Poruka je uspešno poslata!</Alert>
        )}
        {status === "error" && (
          <Alert severity="error">
            Desila se greška prilikom slanja poruke. Molimo pokušajte ponovo.
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
