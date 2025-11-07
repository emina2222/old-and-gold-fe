"use client";
import style from './subscribe.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '../modal/Modal';

export const SubscribeSection = () => {
    const [open, setOpen] = useState(false);
    const firstFieldRef = useRef(null);

    useEffect(() => {
        //if (open && firstFieldRef.current) firstFieldRef.current.focus();
    }, [open]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // Do something with data (send to API)
        // console.log(Object.fromEntries(data));
        alert("Hvala! Potvrdi prijavu u mejlu.");
        e.currentTarget.reset();
        setOpen(false);
    }

    return (
        <section className={style.ctaSection}>
            <div className={style.ctaContent}>
                <h3 className={style.ctaTitle}>Prijavi se na naš newsletter</h3>
                <p className={style.ctaSubtitle}>Dobijaćeš ekskluzivne ponude, savete za restauraciju i privilegovan pristup novoj robi.</p>
                <button className={style.ctaButton} onClick={() => setOpen(true)}>
                    Prijava
                </button>

                <Modal open={open} title="Prijava na newsletter" onClose={() => setOpen(false)}>
                    <div
                        id="newsletter-form"
                        className={`${style.ctaFormWrap} ${open ? style.open : ""}`}
                        role="region"
                        aria-label="Newsletter forma"
                    >
                        <form className={style.ctaForm} onSubmit={handleSubmit}>
                            <div className={style.formRow}>
                                <label htmlFor="nickname">Nadimak</label>
                                <input
                                    ref={firstFieldRef}
                                    type="text"
                                    id="nickname"
                                    name="nickname"
                                    placeholder="Tvoj nadimak (opciono)"
                                />
                            </div>

                            <div className={style.formRow}>
                                <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="tvoja@adresa.com"
                                    inputMode="email"
                                    autoComplete="email"
                                />
                            </div>

                            <fieldset className={style.formRow}>
                                <legend>Želim obaveštenja o:</legend>
                                <label className={style.checkItem}>
                                    <input type="checkbox" name="kategorija" value="new" /> novo
                                </label>
                                <label className={style.checkItem}>
                                    <input type="checkbox" name="kategorija" value="old" /> staro
                                </label>
                            </fieldset>

                            <fieldset className={style.formRow}>
                                <legend>Koliko često želiš da primaš obaveštenja?</legend>
                                <label className={style.radioItem}>
                                    <input type="radio" name="frequency" value="nedeljno" defaultChecked /> nedeljno
                                </label>
                                <label className={style.radioItem}>
                                    <input type="radio" name="frequency" value="mesecno" /> mesečno
                                </label>
                            </fieldset>

                            <div className={style.actions}>
                                <button type="submit" className={style.submitBtn}>Potvrdi prijavu</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </section>
    );
} 