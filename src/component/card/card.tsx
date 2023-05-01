import "./card.css"

interface CardProps {
    title: string,
    cover: string,
    price: number
}

export function Card({ title, cover, price }: CardProps) {
    return (
        <div className="card">
            <img src={cover} />
            <h2>{title}</h2>
            <p className="card-price">{Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
            }).format(price)}</p>
        </div>
    )
}