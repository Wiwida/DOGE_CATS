import { Link } from 'react-router-dom';
import './style.scss';
import Dogelogo from '../../assets/img/logos/dogecoin.svg';
import { IconShoppingCart } from '@tabler/icons-react';
import { ButtonComponent } from '../Button';

export const Navbar = () => {

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
                <ButtonComponent
                    leftSection={<IconShoppingCart/>} 
                    color='var(--text-primary-light)'
                    onClickFn={() => console.log('Hello !')}
                >
                    Payer
                </ButtonComponent>
            </div>
        </div>
    );
};