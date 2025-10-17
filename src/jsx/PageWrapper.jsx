function Header() {
    return (
        <>
            <header className="flex items-center h-6 font-bold text-center justify-center xs:justify-between">
                <div className="hidden xs:flex items-end">
                    <span className="text-[1.8rem] bg-header gradient pl-2">911media.info</span>
                </div>
            </header>
        </>
    );
}

function Footer() {
    return (
        <>
			<hr />
			<p className="my-4 text-center">Developed in React + Tailwind by Amira F. No rights reserved.</p>
        </>
    )
}

export default function PageWrapper({children}) {
  	return (    
    	<div className="bg-main pt-8 px-10 pb-[1px] max-w-[50rem] mx-auto">
        	<Header />
        	<main>{children}</main>
    	</div>    
  	);
}
