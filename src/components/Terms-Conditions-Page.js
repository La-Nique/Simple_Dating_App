import "./css/TermsConditions.css";
import Home from "./Home-Page";

const TOS = () => {
  return (
    <tos>
      <div className="bodyTOS">
        <div className="ScrollingBox">
          <div class="TOSText">
            <h4> Terms and Conditions </h4>
            <p className="TOSBody">
              She was more like a beauty queen from a movie scene I said don't
              mind, but what do you mean, I am the one Who will dance on the
              floor in the round? She said I am the one, who will dance on the
              floor in the round She told me her name was Billie Jean, as she
              caused a scene Then every head turned with eyes that dreamed of
              being the one Who will dance on the floor in the round People
              always told me be careful of what you do And don't go around
              breaking young girls' hearts And mother always told me be careful
              of who you love And be careful of what you do 'cause the lie
              becomes the truth Billie Jean is not my lover She's just a girl
              who claims that I am the one But the kid is not my son She says I
              am the one, but the kid is not my son For forty days and forty
              nights The law was on her side But who can stand when she's in
              demand Her schemes and plans 'Cause we danced on the floor in the
              round So take my strong advice, just remember to always think
              twice (Do think twice, do think twice) She told my baby we'd
              danced 'til three, then she looked at me Then showed a photo my
              baby cried his eyes were like mine (oh, no) 'Cause we danced on
              the floor in the round, baby People always told me be careful of
              what you do And don't go around breaking young girls' hearts She
              came and stood right by me Just the smell of sweet perfume This
              happened much too soon She called me to her room
            </p>
            <h5> I Agree to the Terms and Conditions</h5>
            <div class="btn">
              <button class="button" onClick={Home}>
                Accept
              </button>
              <button class="buttontwo" onClick={Home}>
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </tos>
  );
};

export default TOS;
