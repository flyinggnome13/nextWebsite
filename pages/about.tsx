import Head from 'next/head'
import Menu from "./menu";
import Footer from "./footer"

export default function About() {
  return(
<div className="container">
   <main>

       <Menu/>
        <p> Hello Test</p>
    </main>
    <Footer/>
</div>
)
}
