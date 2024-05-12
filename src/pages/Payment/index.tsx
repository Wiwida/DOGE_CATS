import { ButtonComponent } from "../../components/Button"
import { IconPlus } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { confirmPayment, decrementValue, incrementValue, selectDoge, selectTicketAdded } from "../../redux/slices/globalSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import './style.scss';
import { useEffect } from "react";
import { fetchDogeInfos } from "../../api/allCallApi";

export const Payment = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchDogeInfos());
    }, [dispatch]);

    const valueDoge = useAppSelector(selectDoge);
    const counterTicket = useAppSelector(selectTicketAdded);

    let numberDogeForOneTicket = 0;

    if (valueDoge !== null) {
        numberDogeForOneTicket = Number(parseFloat(valueDoge.priceUsd).toFixed(2));
    }

    const totalAmountDogeBefore = ((4 / numberDogeForOneTicket) * counterTicket);
    const totalAmountDogeAfter= totalAmountDogeBefore - (totalAmountDogeBefore * 0.05);

    const handleConfirmPayment = () => {
        dispatch(confirmPayment());
    };

    return (
        <div className="page-payment">
            <h2>Paiement</h2>
            <div className="payment-card-counter">
                <span className="card-ticket-title">Vous avez pris :</span>
                <div className="container-card-counter">
                    <ButtonComponent
                        leftSection={<IconMinus stroke={2} />}
                        onClickFn={() => dispatch(decrementValue())}
                        disabled={counterTicket === 0}
                    />
                    <span className="card-ticket-counter">
                        {counterTicket}
                    </span>                    
                    <ButtonComponent
                        leftSection={<IconPlus stroke={2} />}
                        onClickFn={() => dispatch(incrementValue())}
                    />

                </div>
                <span className="card-ticket">BILLET(S)*</span>
                <span className="card-ticket-subprice">*Prix d'un billet : 4$</span>
                <span className="card-ticket-advantage">5% de réduction dès deux achetés</span>
            </div>
            <div className="payment-card-counter">
                <span className="card-counter-title">Total à payer en $DOGE :</span>
                <span
                    className="card-counter-advantage"
                    style={{backgroundColor: counterTicket >= 2 ? "green" : "red"}}
                >
                    Réduction de 5% pour {counterTicket} ticket(s)
                </span>
                <span className="card-counter-price">{valueDoge !== null ? totalAmountDogeAfter.toFixed(2) : "??"} $DOGE</span>
                { counterTicket >= 2 && <span className="card-counter-price-before">Prix avant réduction : {totalAmountDogeBefore.toFixed(2)} $DOGE</span>}
            </div>
            <ButtonComponent
                onClickFn={handleConfirmPayment}
                className="button-payment-confirm"
                disabled={!counterTicket}
            >
                Payer mes billets
            </ButtonComponent>
        </div>
    )
} 