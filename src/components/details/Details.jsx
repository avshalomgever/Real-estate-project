import "./details.css";
import {Link} from "react-router-dom";

function Details() {
  return (
    <div className="details-container">
      <div>
        <h1>One Stop Service</h1>
        <p>
          iHOMES listings offer thousands of properties for sale and rent all
          over the country. But we at iHOMES are aware that no single property
          listing site can show each and every property available, as much as we
          would like it too!
        </p>
        <p>That's where IHOMES ONE-STOP SERVICE comes in.</p>
        <h2>iHOMES ONE-STOP SERVICE</h2>
        <p>
          I'm Perry Shapira, founder and owner of iHOMES. You tell me where you
          want to buy, what you want to buy, and of course, your budget - and I
          will represent you, walking you right through the whole process.
        </p>
        <h2>SEARCH AND SHORTLIST</h2>
        <ol>
          <li>
            I'll search my database, as well all the English and Hebrew listing
            websites.
          </li>
          <li>
            I'll contact the dozens of Facebook and WhatsApp groups of which I'm
            a member
          </li>
          <li>I'll contact brokers as well as private sellers</li>
          <li>
            I'll present you with a shortlist of relevant properties - saving
            you time and energy
          </li>
          <li>VISIT - SEE FOR YOURSELF</li>
          <li>
            I'll arrange viewings and accompany you to all the visits to the
            selected properties.
          </li>
        </ol>
        <h2>EXPERTS</h2>
        <p>
          I will guide you through the whole process, and provide and recommend
          links to a range of experts, including
        </p>
        <ol>
          <li>Lawyers</li>
          <li>Architects</li>
          <li>Contractors</li>
          <li>Mortgage brokers</li>
          <li>Currency transactions</li>
          <li>Valuers</li>
          <li>Building inspectors</li>
          <li>Tax consultants</li>
        </ol>
        <h2>PRICE AND TERMS NEGOTIATIONS</h2>
        <p>
          I'll treat your purchase as of my own, and I will assist with price
          negotiation after due diligence and property evaluation, to ensure
          that the negotiations are successful in getting the best deal for you.
        </p>
      </div>
      <div>
        <h2>WHO AM I?</h2>
        <p>
          Aside from owning IHOMES, I'm a licensed broker with a wealth of
          experience, and I've been in the real estate business as an investor,
          owner, the landlord (short-term and long-term) for decades.
        </p>
        <p>
          I know the Israeli market inside out. I've lived and breathed it for
          over 30 years and I'll ensure that you avoid the pitfalls.
        </p>
        <p>
          I'll help you to buy, but never push you to buy, because my good name
          and reputation are worth far more to me than money can buy. I prefer
          that you don't buy at all, rather than buying something that is wrong
          or doesn't suit you.
        </p>
      </div>
      <div>
        <h2>WHAT'S THE COST?</h2>
        <p>Contact me, and I'll tell you!</p>
        <p>Important note on commissions:</p>
        <ol>
          <li>
            The standard fee payable by a seller to his/her broker is 2% (plus
            VAT).
          </li>
          <li>
            The standard fee payable by a buyer to the seller's broker is 2%
            (plus VAT).
          </li>
          <li>
            You will not pay the seller's broker, but will pay iHOMES instead,
            and benefit from all my services!
          </li>
        </ol>
      </div>
      <div>
        <h2>WHAT'S NEXT?</h2>
        
        <Link to={'/contact'}><button onClick={scroll(0, 0)} className="button"> Contact Us </button></Link>
      </div>
    </div>
  );
}

export default Details;
