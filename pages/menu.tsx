import Link from "next/link";
export default function Menu(){
    return(
        <>
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>

        </nav>
            <style>{`
            nav{
            display:flex;
            grid-gap:30px;
            background:black;
            width:100%;
            justify-content: center;
            padding:2em 0 2em 0;
      
            }
            nav a{
            color:white;
             text-decoration:none;
            font-weight:700;
            text-transform:uppercase;
            }
           
            
            `}
            </style>
        </>
    )
}
