
import './Footer.scss';
import { FooterBottom } from './FooterBottom/FooterBottom';
import { FooterMain } from './FooterMain/FooterMain';
import { Newsletter } from './Newsletter/Newsletter';

export function Header() {
    return (
        <footer className="footer">
            <Newsletter />
            <FooterMain />
            <FooterBottom />
        </footer>
    );
}