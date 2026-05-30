/* RESET */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f5f1e8;
    color:#2f3e46;
    line-height:1.6;
}

/* NAVBAR */

.navbar{
    position:fixed;
    top:0;
    width:100%;
    background:rgba(34,87,52,0.95);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 8%;
    z-index:1000;
}

.logo{
    color:white;
    font-size:1.4rem;
    font-weight:700;
}

.nav-links{
    display:flex;
    list-style:none;
    gap:25px;
}

.nav-links a{
    color:white;
    text-decoration:none;
    transition:.3s;
}

.nav-links a:hover{
    color:#9be15d;
}

.hamburger{
    display:none;
    color:white;
    font-size:2rem;
    cursor:pointer;
}

/* HERO */

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    background:
    linear-gradient(
    rgba(0,0,0,.4),
    rgba(0,0,0,.4)),
    url("https://images.unsplash.com/photo-1501785888041-af3ef285b470")
    center/cover;
}

.hero-content{
    color:white;
    max-width:800px;
    padding:20px;
}

.hero h1{
    font-size:4rem;
    margin-bottom:20px;
}

.hero p{
    font-size:1.2rem;
    margin-bottom:30px;
}

.btn{
    background:#4CAF50;
    color:white;
    text-decoration:none;
    padding:15px 35px;
    border-radius:50px;
    transition:.3s;
}

.btn:hover{
    background:#2e7d32;
    transform:translateY(-3px);
}

/* SEÇÕES */

section{
    padding:100px 8%;
}

h2{
    text-align:center;
    margin-bottom:50px;
    color:#225734;
    font-size:2.2rem;
}

/* SOBRE */

.sobre-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.sobre-card{
    background:white;
    padding:30px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.sobre-card:hover{
    transform:translateY(-10px);
}

.sobre-card span{
    font-size:3rem;
}

/* CONTEÚDO */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.card{
    background:white;
    border-radius:15px;
    padding:30px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.icone{
    font-size:3rem;
    margin-bottom:15px;
}

/* GALERIA */

.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.gallery-grid img{
    width:100%;
    height:250px;
    object-fit:cover;
    border-radius:15px;
    transition:.4s;
}

.gallery-grid img:hover{
    transform:scale(1.05);
}

/* CONTATO */

.contato form{
    max-width:700px;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:15px;
}

.contato input,
.contato textarea{
    padding:15px;
    border:1px solid #ccc;
    border-radius:10px;
    font-size:1rem;
}

.contato button{
    background:#225734;
    color:white;
    border:none;
    padding:15px;
    border-radius:10px;
    cursor:pointer;
    transition:.3s;
}

.contato button:hover{
    background:#4CAF50;
}

/* FOOTER */

footer{
    background:#1b4332;
    color:white;
    text-align:center;
    padding:40px 20px;
}

/* BOTÃO TOPO */

#topBtn{
    position:fixed;
    right:20px;
    bottom:20px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:#225734;
    color:white;
    font-size:1.3rem;
    cursor:pointer;
    display:none;
}

/* ANIMAÇÕES */

.reveal{
    opacity:0;
    transform:translateY(50px);
    transition:all .8s ease;
}

.reveal.active{
    opacity:1;
    transform:translateY(0);
}

/* RESPONSIVO */

@media(max-width:768px){

    .hero h1{
        font-size:2.5rem;
    }

    .nav-links{
        position:absolute;
        top:70px;
        left:0;
        width:100%;
        background:#225734;
        flex-direction:column;
        align-items:center;
        display:none;
        padding:20px 0;
    }

    .nav-links.active{
        display:flex;
    }

    .hamburger{
        display:block;
    }
}
