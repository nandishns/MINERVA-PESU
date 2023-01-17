import React from "react";
import Art1_Img1 from "../assets/article_images/art1_img1.png";
import Art1_Img2 from "../assets/article_images/art1_img2.png";
import Art1_Img3 from "../assets/article_images/art1_img3.png";

export default function Article() {
  return (
    <>
      <section className="article">
        <div className="container border border-rounded">
          <div className="container">
            <h3 className=" h3">
              A blur between plot twists in books and real life?
            </h3>
            <i>Susan Meachen, a romance author fakes suicide</i>
            <p>- Janani Naresh Kuma</p> <br />
          </div>
          <article>
            <div className="container m-2">
              <h4>Context:</h4>
              <p>
                In September 2020, romance author Susan Meachen’s fans were
                informed via Facebook that the author had taken her life. On the
                second of January 2022, another post from her Facebook account,
                The Ward, popped up. This post stated that she was in a good
                place, indicating that she was alive.
              </p>
            </div>
            <div className="container m-2">
              <h4>Intro:</h4>
              <p>
                Susan Meachen is a romance author. Her books include Special
                Delivery, the Chance Encounters, Losing Him, and Finding You.
                Susan has a loyal and close-knit fanbase who discuss her books
                on the Facebook group ‘The Ward’. She has fostered close
                friendships with her fans. She also developed relationships with
                fellow writers.
              </p>
            </div>
            <div className="container">
              <h4>The story so far:</h4>
              <p>
                In September 2020, she made an announcement that was quite
                shocking to those who knew her online. It was announced that the
                author had died by suicide. Following her apparent death, a
                person alleged to be her daughter posted multiple promotions on
                her account about her ‘last book’.
              </p>
            </div>
            <div className="container">
              <h4>Initial Responses:</h4>
              <p>
                A friend of Susan Meachen, Samantha Cole, explained on social
                media that she was strained upon by another author who believes
                Samantha drove Susan to commit suicide. She had expressed her
                deepest condolences for the death of her friend. Some people in
                the group had noticed that the posts by the ‘daughter’ had the
                same typing errors as those made by Ms. Meachen. Susan would
                write ‘post to’ in place of ‘supposed to’. Looking back, the
                community following her agrees that this might’ve been a clue to
                her being alive.
              </p>
            </div>
            <div className="container">
              <h4>The Current Stir:</h4>
              <p>
                On the second of January, 2023, Susan Meachen made a comeback
                online. Susan sends a message on the Facebook group chat, that
                she is alive and well. She expresses her hope to write again.
                Her message seems to imply that she might have been taking some
                therapy after struggling through a rough phase. She took a break
                from living because of family members who were also in poor
                shape. Chief Rocky King of the Benton City Police Department in
                Tennessee told CNN that, while he could not confirm any legal
                claims against Meachen, he could confirm the department has a
                record of a resident by the name of Susan Meachen.
              </p>
            </div>
            <div className="img">
              <img src={Art1_Img1} alt="" className="art_img1" />
            </div>
            <div className="container">
              <h4>Responses now:</h4>
              <p>
                Upon being asked by a distressed Samantha Cole, Susan said she
                wanted her life back. Her decision to break from mainstream
                writing under her name was fair enough. However, the debate lies
                in the morality of her publicly announcing that she had died by
                her hand.
              </p>
            </div>
            <div className="art_img">
              <img src={Art1_Img2} alt="" className="art_img2" />
            </div>
            <p className="mt-3">
              {" "}
              Readers express themselves on multiple platforms like GoodReads.
              Previously appreciative book reviews are turning into criticism
              for her betrayal and lack of morals.
            </p>
            <div className="art_img">
              <img src={Art1_Img3} alt="" className="art_img3" />
            </div>
            <p className="mt-3">
              The online disappearance and reappearance is being viewed by some
              as a publicity stunt. Media have tried reaching out to her, asking
              about her reappearance but to no avail.
            </p>
            <div className="container ">
              <h4>Credits:</h4>
              <div className="container">
                <ul>
                  <li>
                    <span>
                      {" "}
                      Dailymail:{" "}
                      <a href="https://www.dailymail.co.uk/news/article-11635707/Author-Susan-Meachen-faked-death-left-red-flags-alive-editor-claims.html">
                        Click here
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      BBC:{" "}
                      <a
                        href="https://www.bbc.com/news/world-us-canada-64179548?xtor=AL-72-%5Bpartner%5D-%5Bbbc.news.twitter%5D-%5Bheadline%5D-%5Bnews%5D-%5Bbizdev%5D-%5Bisapi%5D&at_link_id=338CD14E-8F38-11ED-85E3-497B0EDC252D&at_bbc_team=editorial&at_ptr_name=twitter&at_link_origin=BBCWorld&at_format=link&at_link_type=web_link&at_campaign=Social_Flow&at_medium=social&at_campaign_type=owned"
  >
                        Click here
                      </a>
                    </span>
                  </li>
                  <li>
                    Dazed :{" "}
                    <a href="https://www.dazeddigital.com/life-culture/article/57888/1/susan-meachen-author-faked-her-own-death-suicide-hoax-facebook">
                    Click here. </a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
