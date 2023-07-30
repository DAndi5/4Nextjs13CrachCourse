import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link href="/">Сплит Центр</Link>
            </div>
            <div className="links">
                <Link href='/'>Домой</Link>
                <Link href='/about'>Акции и услуги</Link>
                <Link href='/code/repos'>Курсы</Link>
            </div>
        </header>
)
}
export default Header