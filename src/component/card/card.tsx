import "./card.css"

interface CardProps{
    title: string,
    cover: string,
    price: number
}

export function Card( {title, cover, price}: CardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p></p>
        </div>
    )
}