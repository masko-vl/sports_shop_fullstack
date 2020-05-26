import Link from 'next/link';

const Home = props =>(
    <div>
        <p>Home</p>
        <Link href='sell'>
            <a>Sell page link</a>
        </Link>
    </div>
)
export default Home