import './style.scss';

interface CardCryptoProps {
    title: string;
    logo: string | JSX.Element;
    currentPrice: string | undefined;
    unitCurrentPrice: string;
    chart: JSX.Element;
    titlechart?: string;
    className?: string;
}

export const CardCrypto = ({chart, currentPrice, logo, title, titlechart, unitCurrentPrice, className}: CardCryptoProps) => {

  return (
    <div className={`container-cardcrypto ${className}`}>
        <div className='cardcrypto-logo'>
            {typeof logo === 'string'
              ? <img src={logo}/>
              : logo
            }
        </div>
        <h3 className='cardcrypto-title'>{title}</h3>
        <span className='cardcrypto-currentprice'>{currentPrice}{unitCurrentPrice}</span>
        <div className='cardcrypto-chart'>
          {typeof titlechart === "string" && 
              <span>
                {titlechart}
              </span>
            }
            {chart}
        </div>
    </div>
  )
}
