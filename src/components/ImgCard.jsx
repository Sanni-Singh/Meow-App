const ImgCard = ({url,setValue})=>{
    const gundaBanega =()=>{
        setValue(url)
    }
    return (
        <>
            <img src={url} alt="" onClick={gundaBanega}/>
        </>
    )
}
export default ImgCard;