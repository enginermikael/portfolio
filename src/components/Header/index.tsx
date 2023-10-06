import { MenuHamburguer } from './MenuHamburguer';

const Header = () => {
	return(
		<header className="w-full h-16 shadow-sm sticky top-0">
			<div className=' h-full w-2/3 flex gap-2 items-center px-5'>
				<h1 className="text-principalPurple text-[18px] font-bold">{'<SoftwareEngineer />'}</h1>
			</div>
			<div className='w-1/3 h-full flex items-center justify-center'>
				<MenuHamburguer />
			</div>
		</header>
	);
};

export { Header };