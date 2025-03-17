import React , {useState} from "react";
import { Link , NavLink } from "react-router-dom";

import menu from "../../assets/menu.svg";
import person from "../../assets/person.svg";
import logo from "../../assets/Logo.png"
import category from "../../assets/catalog.svg"
import search from "../../assets/search.svg"
import taroz from "../../assets/compare.svg"
import whiteTaroz from "../../assets/white-compare.svg";

import like from "../../assets/like.svg"
import likeWhite from "../../assets/white-like.svg";

import cart from "../../assets/cart.svg"
import cartWhite from "../../assets/white-cart.svg";

import phone from "../../assets/phone.svg"
import footerLogo from "../../assets/footer-logo.png"
import SearchInput from './../searchInput/index';
import blackPerson from "../../assets/black-person.svg"
import closeMenu from "../../assets/close.svg"

const Header = () => {
  const [viewSearch , setViewSearch] = useState(false);
  const [menuNav , setMenuNav] = useState(false);

  return (
    <header className=" fixed top-0 w-[100%] ">
      <nav className=" relative z-[12] bg-[#060f42] h-[40px]  flex items-center justify-between">
        <div className="container mx-auto  flex items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <button
              onClick={() => setMenuNav(!menuNav)}
              className="md:hidden cursor-pointer"
            >
              {menuNav ? (
                <img src={closeMenu} alt="menu" />
              ) : (
                <img src={menu} alt="menu" />
              )}
            </button>
            <ul className="hidden md:flex items-center gap-[30px]">
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Акции
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Кредит
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Оплата и доставка
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Помощь
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Скупка Б/У
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#f4f8fb] text-[14px] lg:text-[16px]"
                  to={"/"}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          <Link>
            <img className="w-[124px] md:hidden" src={footerLogo} alt="logo" />
          </Link>
          <ul className="flex items-center gap-[30px]">
            <li className="hidden md:flex flex item-center gap-[5px]">
              <Link
                className="text-[white] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                RU
              </Link>
              <span className="inline-block text-[14px] text-white">/</span>
              <Link
                className="text-[white] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                UA
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] hidden md:block text-[14px] lg:text-[16px]"
                to={"/"}
              >
                <img src={person} alt="account" />
              </Link>
              <Link
                className="text-[#060f42] block md:hidden text-[14px] lg:text-[16px]"
                to={"/"}
              >
                <img src={phone} alt="phone" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="relative z-[12] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.06)] bg-[#060f42] md:bg-[white] h-[97px] flex items-center">
        <div className="container gap-[20px] flex items-center justify-between mx-auto">
          <Link to="/" className="hidden md:block">
            <img className=" w-[107px] h-[30px]" src={logo} alt="logo" />
          </Link>
          <ul className="flex items-center w-full  justify-between gap-[20px]">
            <li>
              <button className="flex items-center bg-[#06A56C] text-[#f4f8fb] max-w-[173px] w-full h-[42px] text-[12px] cursor-pointer rounded-[4px] gap-2 px-3 py-2">
                <span className=" sm:block">КАТАЛОГ ТОВАРОВ</span>
                <img src={category} alt="catalog" />
              </button>
            </li>
            <li className="flex items-center overflow-hidden rounded-[4px] h-[42px]  w-[20vw] sm:w-[40vw]  xl:w-[40vw]">
              <div className="sm:w-[78%]  lg:w-[90%] text-[white] md:text-[black] h-[42px] xl:w-[92%] hidden sm:block">
                <SearchInput />
              </div>

              <button className=" hidden  sm:w-[22%] lg:w-[10%] xl:w-[8%] sm:flex items-center justify-center cursor-pointer h-[100%] bg-[#01579B]">
                <img src={search} className="" alt="search" />
              </button>
              <button
                onClick={() => setViewSearch(!viewSearch)}
                className=" w-[100%] sm:hidden flex items-center justify-center cursor-pointer h-[100%] bg-[#01579B]"
              >
                <img src={search} className="" alt="search" />
              </button>
            </li>
            <li className="hidden md:block min-w-[100px] font-bold">
              50 065 87 96
            </li>
            <li className="hidden md:inline-block text-[32px]">|</li>
            <li className="relative">
              <NavLink>
                <img src={taroz} className="hidden md:block" alt="compare" />
                <img
                  src={whiteTaroz}
                  className="block md:hidden"
                  alt="compare"
                />
                <span className="absolute w-[15px] h-[15px] md:w-[20px] md:h-[20px] md:text-[12px] rounded-full text-[10px] flex items-center justify-center text-[#060f42] top-[-4px] right-[-4px] bg-[#FFCD1B]">
                  0
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className="relative">
                <img src={like} className="hidden md:block" alt="like" />
                <img src={likeWhite} className="md:hidden" alt="like" />
                <span className="absolute w-[15px] h-[15px] md:w-[20px] md:h-[20px] md:text-[12px] rounded-full text-[10px] flex items-center justify-center text-[#060f42] top-[-6px] right-[-7px] bg-[#FFCD1B]">
                  0
                </span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink>
                <img src={cart} className="hidden md:block" alt="like" />
                <img src={cartWhite} className="block md:hidden" alt="like" />
                <span className="absolute w-[15px] h-[15px] md:w-[20px] md:h-[20px] md:text-[12px] rounded-full text-[10px] flex items-center justify-center text-white top-[-6px] right-[-7px] bg-[#06A56C]">
                  0
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {viewSearch ? (
        <div
          className={`h-[42px] container sm:hidden translate-y-[-20px] ${
            viewSearch ? "translate-y-[0px] z-[13] relative" : ""
          }`}
        >
          <div
            className={`border border-[#c1f9f9]    relative z-[10] mt-[-20px] rounded-[4px] h-full ${
              viewSearch ? "bg-[white] border" : "bg-transparent border-none"
            } `}
          >
            <SearchInput />
          </div>
        </div>
      ) : (
        ""
      )}

      <nav
        className={`container mx-auto md:hidden relative  ${
          menuNav
            ? "translate-y-[0px] z-[5]  transition duration-[1s]"
            : "translate-y-[-150%] z-[1] transition duration-[1s]"
        }`}
      >
        <div className="shadow-2xl  p-[10px] rounded-[4px] ">
          <ul className="flex flex-wrap sm:justify-between w-full gap-[20px]">
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Акции
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Кредит
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Оплата и доставка
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Помощь
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Скупка Б/У
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                Контакты
              </Link>
            </li>
          </ul>
          <ul className="flex mt-[30px] items-center gap-[20px]">
            <li className="text-[#060f42] md:hidden min-w-[100px] font-bold">
              50 065 87 96
            </li>

            <li className=" md:hidden flex item-center gap-[5px]">
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                RU
              </Link>
              <span className="inline-block text-[14px] text-[#060f42]">/</span>
              <Link
                className="text-[#060f42] text-[14px] lg:text-[16px]"
                to={"/"}
              >
                UA
              </Link>
            </li>
            <li>
              <Link
                className="text-[#060f42]  flex items-center gap-[10px] border p-[2px] px-[5px] rounded-[4px] md:hidden text-[14px] lg:text-[16px]"
                to={"/"}
              >
                <img src={blackPerson} alt="account" />
                account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
