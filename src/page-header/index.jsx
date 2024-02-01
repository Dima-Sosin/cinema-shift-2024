import './styles.less'
import Logo from '../assets/logo.svg';
import Exit from '../assets/exit.svg';

export function PageHeader() {

  return (
    <div className="page-header">
        <div className="page-header__container">
            <div className="page-header__left">
                <img  src={Logo} alt="logo" />
                <a className="page-header__link">Профиль</a>
                <a className="page-header__link">Билеты</a>
            </div>
            <div className="page-header__right">
                <img  src={Exit} alt="exit" />
                <a className="page-header__exit">Выйти</a>
            </div>
        </div>
    </div>)
}