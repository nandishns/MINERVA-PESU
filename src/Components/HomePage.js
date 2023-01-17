import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from "react-bootstrap/Carousel";
import firstPic from "../assets/firstPic.jpg";
import pic2 from "../assets/secPic.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function HomePage() {

  useEffect(() => {
    AOS.init(
     {duration: 1200,}
    );
  }, [])
  return (
    <>
      <section className="carousel">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={firstPic}
              alt="First slide"
              width="600"
              height="460"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              width="600"
              height="460"
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              width="600"
              height="460"
              className="d-block w-100"
              src="https://th-i.thgim.com/public/news/national/wzfq7y/article65303733.ece/alternates/LANDSCAPE_1200/IMG_SUPREMECOURT-NKV_2_1_UN9GERHI.jpg"
              width="600"
              height="460"
              class="d-block w-100"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="timeline mt-4" id="timeline">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body" style={{ background: "#e7e4d4" }}>
              <div className="text-center">
              <h2 className="card-title h4 fw-bold mb-5 pt-5 pb-5">Our Timeline</h2> </div>
              <div className="hori-timeline" dir="ltr">
                <ul className="list-inline events">
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div
                        className="event-date bg-soft-primary text-white"
                        data-aos="fade-right"
                       
                      >
                        3 June
                      </div>
                      <h5 className="font-size-16">Event One</h5>
                      <p className="text-muted">
                        It will be as simple as occidental in fact it will be
                        Occidental Cambridge friend
                      </p>
                      <div>
                        <button href="#"  id="button-card" className="btn  btn-sm">
                          Read more
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div
                        className="event-date bg-soft-success text-white"
                        data-aos="fade-right"
                      >
                        5 June
                      </div>
                      <h5 className="font-size-16">Event Two</h5>
                      <p className="text-muted">
                        Everyone realizes why a new common language one could
                        refuse translators.
                      </p>
                      <div>
                        <button href="#"  id="button-card" className="btn  btn-sm">
                          Read more
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div
                        className="event-date bg-soft-danger text-white"
                        data-aos="fade-right"
                      >
                        7 June
                      </div>
                      <h5 className="font-size-16">Event Three</h5>
                      <p className="text-muted">
                        If several languages coalesce the grammar of the
                        resulting simple and regular
                      </p>
                      <div>
                        <button href="#"  id="button-card" className="btn  btn-sm">
                          Read more
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item event-list">
                    <div className="px-4">
                      <div
                        className="event-date bg-soft-warning text-white"
                        data-aos="fade-right"
                      >
                        8 June
                      </div>
                      <h5 className="font-size-16">Event Four</h5>
                      <p className="text-muted">
                        Languages only differ in their pronunciation and their
                        most common words.
                      </p>
                      <div>
                        <button href="#"  id="button-card" className="btn  btn-sm">
                          Read more
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>

      <section className="recent-news">
        <div className="container text-center" id="div-recent-news">
        <h2 className="h2  " id="recent-news-title"  data-aos="fade-up">
          Recent News{" "}
        </h2> </div>
        <div className=" d-flex justify-content-around" id="Recent-news-cards"  >
          <Card style={{ width: "18rem" }} data-aos="fade-up">
            <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> 
            <Link to="/article"> <Button id="button-card"> Read More </Button> </Link> 
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} data-aos="fade-up">
            <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/article"> <Button id="button-card"> Read More </Button> </Link> 
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} data-aos="fade-up">
            <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/article"> <Button id="button-card"> Read More </Button> </Link> 
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} data-aos="fade-up">
            <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button id="button-card">Read More </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="container text-center">
          <Button id="button-card" className="btn btn-lg m-4"  data-aos="fade-up">
            View All <i class="fas fa-angle-double-right"></i>
          </Button>
        </div>
      </section>

      <section className="featuring-pes" id="featuring-pes">
      <div className="container text-center " >
        <h2 className="h2 m-3" id="feat-pes-title" data-aos="fade-up">
         Featuring PES
        </h2> </div>
        <Carousel fade data-aos="fade-up">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={firstPic}
              alt="First slide"
              width="600"
              height="460"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              width="600"
              height="460"
              className="d-block w-100"
              src={pic2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              width="600"
              height="460"
              className="d-block w-100"
              src="https://th-i.thgim.com/public/news/national/wzfq7y/article65303733.ece/alternates/LANDSCAPE_1200/IMG_SUPREMECOURT-NKV_2_1_UN9GERHI.jpg"
              width="600"
              height="460"
              class="d-block w-100"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        \{" "}
        <article className="recent-news">
          
          <div className=" d-flex justify-content-around" id="Recent-news-cards"  data-aos="fade-up">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button id="button-card">Read More </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button id="button-card">Read More </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button id="button-card">Read More </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="//placeimg.com/280/180/tech" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button id="button-card">Read More </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="container text-center">
            <Button id="button-card" className="btn btn-lg m-4"  data-aos="fade-up">
              View All <i class="fas fa-angle-double-right"></i>
            </Button>
          </div>
        </article>
      </section>

      <section className="about-us"  id="about-us" data-aos="fade-up">
        <div
          className="container border border-1 rounded"
          style={{ background: "#e7e4d4", color: "#3c3635" }}
        >
          <div className="text-center">
            <h2 className="h2 m-5">About Us</h2>
            <div className="container text-center">
            <p className="p">
              PES University weekly publication. Bangalore's first student-run
              college newspaper. <br /> We are a group of thinkers that challenge
              people through good journalism. <br /> We strive to provide the required
              tools and knowledge to develop skills and Inspire Change.
            </p> </div>
            <div className="d-flex text-center justify-content-center mt-4 ">
              <button className="btn" id="about-us-btn">
                {" "}
                More About Us{" "}
              </button>
            </div>
          </div>
          <div className="text-center mt-5 p-2">
            <h3 className="h3">What we do?</h3>{" "}
          </div>
          <div className="d-flex mb-4" id="lotties">
            <div className="container" data-aos="zoom-in-up">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_yetxuujw.json"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                loop=""
                autoPlay=""
              />
              <span>
                1. Weekly Newspaper Highlighting major events across the world. <br />
                2. Weekly Podcast series <br />3. The "extra" you deserve. <br />
              </span>
            </div>
            <div className="container" data-aos="zoom-in-up">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_apg1cx0v.json"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                loop=""
                autoPlay=""
              />
              <span>
                1. Workshops on storytelling, mass communication, and networking. <br />
                2. Collaboration with news houses and marketing agencies. <br /> 3.
                Hands-on exposure through fun events
              </span>
            </div>
            <div className="container" data-aos="zoom-in-up">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_rqxo1mki.json"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                loop=""
                autoPlay=""
              />
              <span>
                1. Online News Cards. <br /> 2. Special Investigative Piece every fourth
                week. <br /> 3. Bi-weekly Arts section featuring in-house creativity
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team" id="our-team">
      
  <div className="container mt-5 mb-5 text-center  ">
    <h1 className="h1 p-2  m-2" data-aos="fade-up">
      
      Our Team
    </h1>
  </div>
  <div
    className="container d-flex justify-content-around p-2"
    data-aos="fade-up"
    id="card-team"
  >
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h3>Name</h3>
        <p className="card-text"> Position</p>
        <p> social media</p>
      </div>
    </div>
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h3>Name</h3>
        <p className="card-text"> Position</p>
        <p> social media</p>
      </div>
    </div>
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h3>Name</h3>
        <p className="card-text"> Position</p>
        <p> social media</p>
      </div>
    </div>
  </div>


      </section>

      <section
  className="contact-us"
  id="contact-us"
  style={{ backgroundColor: "#3c3635" }}
  data-aos="zoom-in-up"
>
  <div className="container mt-5" data-aos="fade-up">
    <h1 className="h1 fw-bold p-5  text-center">
      Got some coffee/tea?
    </h1>
  </div>
  <div
    className="container d-flex justify-content-around p-2"
    data-aos="fade-up"
    id="contact"
  >
    <div className="container mt-5 pt-3">
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_lstnp9p3.json"
        background="transparent"
        speed={1}
        style={{ width: 300, height: 300 }}
        loop=""
        autoPlay=""
      />
    </div>
    {/* form */}
    <div className="container">
      <form
        data-aos="flip-up"
        action="https://formspree.io/f/moqbloye"
        id="contact_form"
        className="m-5"
        style={{
          boxShadow: "rgba(246, 246, 246, 0.35) 0px 5px 15px",
          margin: 10,
          padding: 20,
          borderRadius: 10
        }}
        method="POST"
      >
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label "
          >
            Name
          </label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleFormControlInput1"
            required="true"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label "
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleFormControlInput1"
            required="true"
            placeholder="name@example.com"
          />
        </div>
        <label htmlFor="exampleDataList" className="form-label ">
          Subject
        </label>
        <input
          className="form-control"
          name="subject"
          list="datalistOptions"
          id="exampleDataList"
          required="true"
          placeholder=""
        />
        <datalist id="datalistOptions">
          <option value="Suggestion/Feedback/others"></option>
         </datalist>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label "
          >
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows={3}
            required="true"
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <input type="submit" className="btn  "  id="submit-btn"/>
        </div>
      </form>
    </div>
  </div>
</section>
 </>
    
  );
 
}
