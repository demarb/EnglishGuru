export default function Header({searchQuery, handleInputChange, handleClick}){
    
    return (
        <>
            <nav>
                <h1 className="nav-title">English Guru</h1>
                <form>
                    <button className="search-button" onClick={(e)=>handleClick(e)}> 
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/100/FFFFFF/search--v1.png" alt="search--v1"/>
                    </button>
                    <input type="text" id="search-text" value={searchQuery} onChange={(e)=>handleInputChange(e)}></input>
                </form>
            </nav>
        </>
    )

}