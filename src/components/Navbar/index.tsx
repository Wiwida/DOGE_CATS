import { Link, useNavigate } from 'react-router-dom';
import Dogelogo from '../../assets/img/logos/dogecoin.svg';
import { IconShoppingCart } from '@tabler/icons-react';
import { ButtonComponent } from '../Button';
import { useAppSelector } from '../../app/hooks';
import { selectTicketAdded } from '../../redux/slices/globalSlice';
import './style.scss';

export const Navbar = () => {

    const counterTicket = useAppSelector(selectTicketAdded);

    const navigate = useNavigate();

    return(
        <div className='container-nav'>
            <div className='container-logo'>
                <Link to='/'>
                    <img src={Dogelogo} alt='Logo du site internet DOGECex'/>
                </Link>
            </div>
            <div className='container-links-and-button'>
                <div className='links'>
                    <Link to='/' className='link'>
                        Accueil
                    </Link>
                    <Link to='/market' className='link'>
                        Marchés
                    </Link>
                    <Link to='/dogepaper' className='link'>
                        Dogepaper
                    </Link>
                </div>
                <div className='container-button-notif'>
                    <span className='counter-button'>{counterTicket}</span>
                    <ButtonComponent
                        leftSection={<IconShoppingCart/>} 
                        color='var(--text-primary-light)'
                        onClickFn={() => navigate('./payment')}
                        disabled={!counterTicket}
                    >
                        Payer
                    </ButtonComponent>                    
                </div>
            </div>
        </div>
    );
};