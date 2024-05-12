import { ButtonComponent } from '../../components/Button';
import './style.scss';

export const Dogepaper = () => {

  return (
    <div className='page-dogepaper'>
        <h2>Et si on achetait un <br/> petit billet ?</h2>
        <div className='container-message-info-dogepaper'>
            <span>Convertissez vos $DOGE en billet de transports parisiens !</span>
            <p> Valable pour n'importe quel transport parisien
                uniquement pour la période des JO de Paris 2024. <br/>
                La valeur d'un titre de transport est équivalent à 4$ US.
            </p>
        </div>
        <div className='container-convert-doge'>
            <div className='convert-doge-ticket'>
                <span className='ticket'>
                    1 TICKET 
                </span>
                <span className='equal'>
                    =
                </span>
                <span className='price'>
                    ?? $DOGE
                </span>
            </div>
            <span className='convert-doge-details'>
                5% de réduction dès 2 tickets achetés
            </span>
        </div>
        <ButtonComponent
            onClickFn={() => console.log("Good job !")}
            size='compact-xl'
        >
            Ajouter un ticket au panier
        </ButtonComponent>
    </div>
  )
}
