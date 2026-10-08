import React, { useState } from 'react';
import { Currency, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { ShoppingBag, Globe, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  language: Language;
  currency: Currency;
  cartCount: number;
  rewardsPoints: number;
  onLanguageToggle: () => void;
  onCurrencyToggle: () => void;
  onOpenCart: () => void;
  onOpenRewards: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  currency,
  cartCount,
  rewardsPoints,
  onLanguageToggle,
  onCurrencyToggle,
  onOpenCart,
  onOpenRewards,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.products, href: '#products' },
    { label: t.about, href: '#about' },
    { label: t.heritage, href: '#heritage' },
    { label: t.whoWeServe, href: '#who-we-serve' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8DEC8]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a
          href="#home"
          className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#942F12] rounded-md transition-transform hover:scale-[1.01]"
          aria-label="Q'mem Baltna Home"
        >
          <BrandLogo className="h-12" />
        </a>

        {/* Zone 2: Primary Nav Links (Single line, text with subtle hover effect) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#503E33]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-[#942F12] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#942F12] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Interactive Controls (Currency, Language, Cart Button) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Currency Toggle (ETB / USD) */}
          <button
            onClick={onCurrencyToggle}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold tracking-wide rounded-lg border border-[#DACBB5] text-[#503E33] hover:bg-[#F3EAD8] hover:border-[#942F12]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#942F12]"
            title="Switch Currency between Ethiopian Birr (ETB) and USD"
            aria-label={`Current currency: ${currency}. Click to switch.`}
          >
            <span className={currency === 'ETB' ? 'text-[#942F12]' : 'text-[#857064]'}>
              ETB
            </span>
            <span className="text-[#DACBB5] font-normal">/</span>
            <span className={currency === 'USD' ? 'text-[#942F12]' : 'text-[#857064]'}>
              USD
            </span>
          </button>

          {/* Language Toggle (EN / AM) */}
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#DACBB5] text-[#503E33] hover:bg-[#F3EAD8] hover:border-[#942F12]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#942F12]"
            title="Switch Language between English and Amharic"
            aria-label={`Current language: ${language.toUpperCase()}. Click to switch.`}
          >
            <Globe className="w-3.5 h-3.5 text-[#942F12]" />
            <span className="font-bold">{language === 'en' ? 'አማ' : 'EN'}</span>
          </button>

          {/* Heritage Rewards Button */}
          <button
            onClick={onOpenRewards}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-[#DACBB5] bg-[#FAF5EB] text-[#30120B] hover:bg-[#F3EAD8] hover:border-[#942F12]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#942F12]"
            title="View Q'mem Heritage Rewards Loyalty Account"
            aria-label={`Heritage Rewards: ${rewardsPoints} points. Click to view.`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F2871A]" />
            <span className="font-mono tabular-nums text-[#942F12]">{rewardsPoints}</span>
            <span className="text-[10px] text-[#7A6658] hidden sm:inline">pts</span>
          </button>

          {/* Shopping Bag Trigger Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2.5 rounded-lg bg-[#942F12] text-white hover:bg-[#7D240B] active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#942F12]"
            aria-label={`Open shopping cart with ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-[#F2871A] text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#503E33] hover:bg-[#F3EAD8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DEC8] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-[#503E33] hover:bg-[#F5ECE0] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRewards();
            }}
            className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-bold text-[#942F12] bg-[#FAF5EB] hover:bg-[#F5ECE0] rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F2871A]" />
              <span>Heritage Rewards Account</span>
            </div>
            <span className="font-mono text-sm font-black">{rewardsPoints} pts</span>
          </button>
          <div className="pt-2">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-2.5 text-center font-bold text-white bg-[#942F12] rounded-lg shadow-sm"
            >
              {t.orderNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
