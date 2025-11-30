

export default function CardTask(props) {

    return (
        <li className="card">
            <h3>{props.name}</h3>
            <p>
                {props.description}
            </p>
            <p>
                <a href={props.email}>{props.emailName}</a>
            </p>
        </li>
    )
}