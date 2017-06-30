import PropTypes from 'prop-types';
import * as AuthStatusEnum from "../_enums/AuthStatus";
import * as OfferStatusEnum from "../_enums/OfferStatus";


export function createUserInfoShape() {
    return PropTypes.shape({
        authStatus: PropTypes.oneOf(Object.keys(AuthStatusEnum))
    });
}

export function createOfferShape() {
    return PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        shortenName: PropTypes.string,
        description: PropTypes.string,
        issuePrice: PropTypes.string,
        offerSize: PropTypes.string,
        minAmount: PropTypes.number,
        allocation: PropTypes.number,
        status: PropTypes.oneOf(Object.keys(OfferStatusEnum)),
        open: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),
        payBy: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ])
    });
}
