import type { NextPage } from 'next'

const Navbar: NextPage = () => {

    return (
        <div className="wrapper container">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Salons</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Choisir un salon de discussion:</p>
                    <li>
                        <a href="#">Salon 1</a>
                    </li>
                    <li>
                        <a href="#">Salon 2</a>
                    </li>
                    <li>
                        <a href="#">Salon 3</a>
                    </li>
                    <li>
                        <a href="#">Créer</a>
                    </li>
                    <li>
                        <a href="#">Réglages</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar