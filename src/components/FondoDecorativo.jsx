const FondoDecorativo = ({ children }) => {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Fondo decorativo: grilla + halo radial */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] mx-auto rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
  
        {/* Contenido */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };
  
  export default FondoDecorativo;
  