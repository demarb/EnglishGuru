export default function Header(){
    return (
        <>
            <nav>
                <h1 className="nav-title">English Guru</h1>
                <form>
                    <button className="search-button"> 
                        <img width="30" height="30" src="https://img.icons8.com/ios-filled/100/FFFFFF/search--v1.png" alt="search--v1"/>
                    </button>
                    {/* <img width="20" height="20" src="https://img.icons8.com/ios-filled/100/000000/search--v1.png" alt="search--v1"/> */}

                    <input type="text" id="search-text"></input>
                </form>
            </nav>
        </>
    )
}