import style from './button.module.css'

interface VisitCatalogButtonProps {
    url: string;
}

export const VisitCatalogButton = ({ url }: VisitCatalogButtonProps) => {
    return (
        <a
            href={url}
            aria-label="Pogledaj katalog"
            className={style.visitCatalogBtn}
        >
            <span>Pogledaj katalog</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" style={{ display: "block" }}>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
}