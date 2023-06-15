export default function DefinitionResult({searchResult}){

    let meanings = []
    let meaningsData= []
    let errMsg= ""

    if (searchResult==="Word not found"){
        errMsg = searchResult;
        meaningsData = <li className="partOfSpeech">{errMsg}</li>
    }else{
        meanings = searchResult.slice(0, -1)
    
        meaningsData = meanings.map(meaning=>{
            return (
                <ul>
                    <li className="partOfSpeech">
                        {meaning.partOfSpeech}
                        <ul>
                            {meaning.definitions.map(definitions=>{
                                return (
                                    <>
                                        <li className="definition">{definitions.definition}</li>
                                        {definitions.example && <p className="example">Eg. {definitions.example}</p>}
                                    </>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            )
        })
    }

    return (
        <>
            <section>
                {searchResult==="Word not found" ? <h2 className="word">Error</h2> : <h2 className="word">{searchResult[searchResult.length - 1]}</h2>}

                <div className="meanings">
                    {meaningsData}
                </div>
            </section>
        </>
    )
}