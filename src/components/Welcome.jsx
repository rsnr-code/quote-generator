const Welcome = (props) => {

    const { video, quoteRequest } = props;
    return ( 
        <>
            <video src={video} muted loop autoPlay playsInline></video>
            <div className="overlay"></div>
            <div className="text">
              <h2>Welcome To</h2>
              <h3>The Quotes Channel</h3>
              <p></p>
              <a onClick={quoteRequest}>QUOTE</a>
            </div>
          </>
     );
}
 
export default Welcome;