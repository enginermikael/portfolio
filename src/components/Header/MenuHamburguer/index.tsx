'use client';
import { useState } from 'react';

const MenuHamburguer = () => {

	const[ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

	function isChecked(){
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<label  className="absolute z-50 top-5 right-4 w-10 h-[26px] bg-transparent cursor-pointer block">
			<input type="checkbox" data-cy='hamburguer-menu' className="hidden" onChange={isChecked}/>
			<span  className={`menu-hamburguer top-0 ${isMenuOpen ? 'rotate-[45deg] top-0 left-[5px]' : ''}`}></span>
			<span className={`menu-hamburguer top-3 -translate-y-1/2 ${isMenuOpen ? 'w-0 opacity-0' : ''}`}></span>
			<span className={`menu-hamburguer top-6 -translate-y-full ${isMenuOpen ? 'rotate-[-45deg] top-[32px] left-[5px]' : ''}`}></span>
		</label>
	);
};

export { MenuHamburguer };