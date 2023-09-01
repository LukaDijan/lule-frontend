const Logo = () => {
    return (
        <>
        <div className="flex flex-row" style={{marginLeft: '15px', marginTop: '15px'}}>
        <img src="http://localhost:3000/books-logo.svg" className="h-10 w-10 object-contain"></img>
        <p style={{fontFamily: 'Karantina', marginLeft: '5px', fontSize: '20px'}}>Lule</p>
        </div>
        </>
    );
}

export default Logo;