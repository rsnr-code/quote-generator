
const Home = () => {
    return ( 
        <div className="App">
      
        <section id="showcase">
          <header>
            <h2 className="logo">QUOTES TELEVISION</h2>
          </header>
          <video src="/start.mp4" muted loop autoPlay playsInline></video>
          <div className="overlay"></div>
          <div className="text">
            <h2> Click Me </h2>
            <h3>Click Him</h3>
            <p></p>
            <a href="/quote">Explore</a>
          </div>
        </section>
     
    </div>
     );
}
 
export default Home;