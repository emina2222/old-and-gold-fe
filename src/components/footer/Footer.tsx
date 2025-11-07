import style from './footer.module.css';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <p>&copy; {new Date().getFullYear()} Old & Gold. Sva prava zadržana.</p>
            </div>
        </footer>
    );
}