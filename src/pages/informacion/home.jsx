import Header from '../../layouts/header';
import Hero from '../../layouts/hero';
import LogoJohan from '@/components/logo_johan';



const Home = () => {
    return (
        <div className="h-screen relative bg-conversor bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center">

            <Header />
            <Hero />
            {/* Logo de Johan Bohorquez */}
            <LogoJohan />


             
        </div>
    );
};

export default Home;