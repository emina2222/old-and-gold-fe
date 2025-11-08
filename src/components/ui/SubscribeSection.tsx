"use client";
import style from './subscribe.module.css';
import btnStyle from './button.module.css';
import React, { useRef, useState } from 'react';
import { Modal } from '../modal/Modal';
import {
    Box,
    TextField,
    FormControl,
    FormLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Button,
    Stack,
} from "@mui/material";


export const SubscribeSection = () => {
    const [open, setOpen] = useState(false);
    const firstFieldRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // Send to API and generate verification email
        alert("Hvala! Potvrdi prijavu u mejlu.");
        e.currentTarget.reset();
        setOpen(false);
    }

    return (
        <section className={style.ctaSection}>
            <div className={style.ctaContent}>
                <h3 className={style.ctaTitle}>Prijavi se na naš newsletter</h3>
                <p className={style.ctaSubtitle}>Dobijaćeš ekskluzivne ponude, savete za restauraciju i privilegovan pristup novoj robi.</p>
                <button className={btnStyle.ctaButton} onClick={() => setOpen(true)}>
                    Prijava
                </button>

                <Modal open={open} title="Prijava na newsletter" onClose={() => setOpen(false)}>
                    <Box
                        id="newsletter-form"
                        role="region"
                        aria-label="Newsletter forma"
                        sx={{ mt: 1, maxWidth: 600 }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Stack spacing={2}>
                                <TextField
                                    inputRef={firstFieldRef}
                                    id="nickname"
                                    name="nickname"
                                    label="Nadimak"
                                    placeholder="Tvoj nadimak (opciono)"
                                    fullWidth
                                    size="small"
                                />
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    required
                                    placeholder="tvoja@adresa.com"
                                    fullWidth
                                    size="small"
                                />
                            </Stack>

                            <FormControl component="fieldset">
                                <FormLabel>Želim obaveštenja o:</FormLabel>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox name="kategorija" value="new" />}
                                        label="Novo"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="kategorija" value="old" />}
                                        label="Staro"
                                    />
                                </FormGroup>
                            </FormControl>

                            <FormControl component="fieldset">
                                <FormLabel>
                                    Koliko često želiš da primaš obaveštenja?
                                </FormLabel>
                                <RadioGroup
                                    row
                                    name="frequency"
                                    defaultValue="nedeljno"
                                >
                                    <FormControlLabel value="nedeljno" control={<Radio />} label="nedeljno" />
                                    <FormControlLabel value="mesecno" control={<Radio />} label="mesečno" />
                                </RadioGroup>
                            </FormControl>

                            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                                <button type="submit" className={btnStyle.ctaButton}>
                                    Potvrdi prijavu
                                </button>
                            </Box>
                        </Box>
                    </Box>
                </Modal>
            </div>
        </section>
    );
} 