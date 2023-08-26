import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "blue" : "black",
    backgroundColor: props.mode === "dark" ? "#d5f4e6" : "white",
    border: "2px solid",
    borderColor: props.mode === "dark" ? "#80ced6" : "white",
  };

  return (
    <div className="container">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "blue" : "black" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
              style={myStyle}
            >
              <h1>About WordCount</h1>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>
                Welcome to WordCounter, your trusted companion for all things
                related to word counting and text analysis. Our mission is
                simple: to provide you with a fast, reliable, and user-friendly
                tool to count words, characters, sentences, and paragraphs in
                your text. Whether you're a student working on an essay, a
                writer crafting the next great novel, or a professional needing
                to meet specific word limits, WordCounterPro.com has got you
                covered.
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={myStyle}
            >
              <h4> Why Choose WordCount?</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Accurate Word Counting: </strong>
              <p>
                {" "}
                Our word counting tool is designed to provide pinpoint accuracy.
                You can trust us to give you the exact word and character count,
                ensuring your writing meets the desired requirements.
              </p>
              <strong>Effortless Text Analysis:</strong>
              <p>
                Beyond word counting, WordCounterPro.com offers comprehensive
                text analysis. Discover the distribution of words, average
                sentence length, and other valuable insights to enhance your
                writing.
              </p>
              <strong>User-Friendly Interface: </strong>
              <p>
                We believe in simplicity. Our intuitive interface allows you to
                paste or type your text, click a button, and instantly receive
                your word count and analysis. No learning curve required.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={myStyle}
            >
              <h4>Privacy</h4>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Privacy and Security:</strong>
              <p>
                Your privacy matters to us. We don't store your text, and all
                your data is processed securely. Your trust is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
