function Header() {
    return (
        <>
            <header className="flex items-center h-22 font-bold justify-center xs:justify-between">
                <div className="hidden xs:flex items-end">
                    <img 
                        src="/media/icons/logo.svg" 
                        alt="Simplified vector of the Twin Towers seen from the northeast" 
                        width="96"
                        height="96"
                        className="align-top"
                    />
                    <span className="text-[3rem] bg-header gradient pl-5">
                        911media.info
                    </span>
                </div>                
            </header>
            <hr />
        </>
    );
}

function Footer() {
    return (
        <>
			<hr />
			<p className="my-4 text-center">
                Developed in React + Tailwind by Amira F. No rights reserved.
            </p>
        </>
    )
}

export default function PageWrapper({children}) {
  	return (    
    	<div className="bg-main pt-8 px-10 pb-[1px] max-w-[60rem] mx-auto">
        	<Header />
        	<main>{children}</main>
            <Footer />
    	</div>    
  	);
}
