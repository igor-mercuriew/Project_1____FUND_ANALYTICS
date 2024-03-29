import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.png";

import "./nav.scss";
import { ModalContext } from "../services/contexts/modalcontext/modal.context";
import { useTranslation } from "react-i18next";

export default function Nav({ updateLang }) {
    const [menu, setmenu] = useState(false);

    const [menuItem, setmenuItem] = useState("");
    function handlerMobileMenu({ target }) {
        const menu = target.dataset.menu;
        setmenuItem(menu === menuItem ? "" : menu);
    }

    const { contextModal, setContextModal } = useContext(ModalContext)

    const { t, i18n } = useTranslation("common");

    function handleLanguage(event) {
        i18n.changeLanguage(event.target.dataset.language).then(() => {
            updateLang(event.target.dataset.language);
        });
    }

    return (
        <>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="picture_1" className="logo" />
                </Link>

                <div
                    className={`links ${menu ? "menuOpen" : ""}`}
                    onClick={handlerMobileMenu}
                >
                    <svg
                        height="512px"
                        viewBox="0 0 512 512"
                        width="512px"
                        className="close"
                        onClick={() => setmenu(false)}
                    >
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                    </svg>

                    <ul data-menu="company">
                        <li
                            data-menu="company"
                            className={menuItem === "company" ? "menuItemOpenCompany menuItemOpen" : ""}
                        >
                            {t("nav.item0.title")} <span></span>
                            <ul>
                                <li>
                                    <Link to="/" onClick={() => setmenu(false)}>{t("nav.item0.body.0")}</Link>
                                </li>
                                <li>
                                    <Link to="/sect_2" onClick={() => setmenu(false)}>{t("nav.item0.body.2")}</Link>
                                </li>
                                <li>
                                    <Link to="/team" onClick={() => setmenu(false)}>{t("nav.item0.body.3")}</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul data-menu="services">
                        <li
                            data-menu="services"
                            className={menuItem === "services" ? "menuItemOpenServices menuItemOpen" : ""}
                        >
                            Услуги <span></span>
                            <ul>
                                <li>
                                    <Link to="/readymade_solutions" onClick={() => setmenu(false)}>Готовые решения</Link>
                                </li>
                                <li>
                                    <Link to="/brokers" onClick={() => setmenu(false)}>Подбор брокера</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Link to="/articles" onClick={() => setmenu(false)}>{t("nav.item2")}</Link>
                    <Link to='/forum' onClick={() => setmenu(false)}>{t("nav.item3")}</Link>
                    <a href="#contacts" onClick={() => setmenu(false)}>{t("nav.item4")}</a>

                    <Button txt={t("nav.button")} handlerClick={() => { setContextModal({ show: true, status: 1 }); setmenu(false) }} />
                    <Button txt='Вход' handlerClick={() => { setContextModal({ show: true, status: 1 }); setmenu(false) }} />

                    <ul className='languages' data-menu="language">
                        <li data-menu="language"
                            className={menuItem === "language" ? "menuItemOpenLanguage menuItemOpen" : ""}
                        >
                            <svg viewBox="0 0 640 512">
                                <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z" />
                            </svg>

                            <ul onClick={handleLanguage}>
                                <li data-language='en' onClick={() => setmenu(false)}>
                                    English
                                </li>
                                <li data-language='ru' onClick={() => setmenu(false)}>
                                    Russian
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <a href="tel:+71234567890" className="number">
                    <p>+7(123) 456-78-90</p>
                </a>

                <img className="menu" src={Menu} alt="picture_1" onClick={() => setmenu(true)} />
            </nav>
        </>
    );
}
