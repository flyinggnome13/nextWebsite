export default function Header() {

return(
    <>
    <h1 className="title">
        Welcome to <a href="https://nextjs.org">Vitalii Bakun Personal Website</a>
    </h1>
        <style>{`
            .title a {
            animation: changeColor 10s ease infinite alternate forwards;  
            text-decoration: none;
          
        }
@-webkit-keyframes changeColor {
  0% { color: #080808; }
  33% { color: #666666; }  
  67% { color: #a3a3a3; }
  100% { color: #e8e8e8; }
}

@keyframes changeColor {
  0% { color: #080808; }
  33% { color: #666666; }  
  67% { color: #a3a3a3; }
  100% { color: #e8e8e8; }
}


            .title a:hover,
            .title a:focus,
            .title a:active {
            text-decoration: underline;
        }

            .title {
            margin: 0;
            line-height: 1.15;
            font-size: 3rem;
            
        }

            .title,
            .description {
            text-align: center;
        }
         `}</style>
    </>


)
};
