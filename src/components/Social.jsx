import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/pdebowski42" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/pdebowski/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/pawel_42/" },
  { Social: <FaTwitter />, link: "https://twitter.com/paweldebowski" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/@paweldebowski98" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
