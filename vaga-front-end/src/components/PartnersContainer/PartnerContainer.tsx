import './PartnerContainer.scss';
import { Partners } from './Partners/Partners';

export function PartnerContainer() {
    return (
        <div className="partners-container">
            <Partners />
            <Partners />
        </div>
    );
}