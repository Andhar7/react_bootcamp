export default function TabButton({children, onSelect, selectButton}) {
    return (
        <li>
            <button className={selectButton ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    )
}