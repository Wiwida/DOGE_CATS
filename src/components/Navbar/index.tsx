import { Link } from 'react-router-dom';
import './style.scss';
import Dogelogo from './../../assets/img/logo/dogecoin.svg';
import { Button } from '@mantine/core';
import { IconShoppingCart } from '@tabler/icons-react';

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
                        Marché
                    </Link>
                    <Link to='/dogepaper' className='link'>
                        Dogepaper
                    </Link>
                </div>
                <Button leftSection={<IconShoppingCart/>} color='var(--text-primary-light)' autoContrast >
                    Payer
                </Button>
            </div>
        </div>
    );
};