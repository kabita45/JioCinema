import { Link } from "react-router-dom";
import { appleStore, googlePlayStore, jioLogo } from "../../assets/images";
const Footer = () => {
  return (
    <footer>
      <section
        name="footer-top"
        className="p-6 pt-12 bg-footerBackgroundColor flex flex-col gap-4 justify-between lg:flex-row "
      >
        <div className="border-b border-b-[#FFFFFF3F] pb-2 flex gap-10 font-semibold lg:border-none">
          <div>
            <h3 className="text-white text-lg mb-4">JioCinema</h3>
            <ul className=" text-footerItemColor">
              <li className="py-2">
                <Link to="/">For You</Link>
              </li>
              <li className="py-2">
                <Link to="movie">Movies</Link>
              </li>
              <li className="py-2">
                <Link to="free">Free</Link>
              </li>
              <li className="py-2">
                <Link to="premium">Premium</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="text-footerItemColor">
              <li className="py-2">
                <Link
                  to="https://help.jiocinema.com/?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                  target="_blank"
                >
                  Help Centre
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="https://help.jiocinema.com/articles/terms-and-conditions/terms-and-conditions/641d382892cd636d4c10983d?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                  target="_blank">
                  Terms Of Use
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="https://help.jiocinema.com/articles/terms-and-conditions/privacy-policy/641d3829d903444a7aef49b1?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                  target="_blank" >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="https://help.jiocinema.com/articles/terms-and-conditions/content-complaints/641d382892cd636d4c10983e?uid=82a9dec5-8954-48b7-98c4-08fea6dbc289&name=AuM5QLbF"
                  target="_blank" >
                  Content Complaints
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-8 justify-between font-semibold">
          <div className="border-b border-b-[#FFFFFF3F] pb-4 md:border-none md:pb-0">
            <h3 className="text-white text-2xl font-extrabold mb-4">
              Connect With Us
            </h3>
            <ul className=" text-white flex gap-4 text-2xl ">
              <li>
                <Link
                  className="w-14 h-14 grid place-content-center bg-socialMediaBackground rounded-full "
                  to="https://www.facebook.com/profile.php?id=100054621842921"
                  target="_blank">
                  <i className="fa-brands fa-square-facebook "></i>
                </Link>
              </li>
              <li>
                <Link
                  className="w-14 h-14 grid place-content-center bg-socialMediaBackground rounded-full "
                  to="https://twitter.com/kabita_maurya"
                  target="_blank" >
                  <i className="fa-brands fa-square-x-twitter"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="w-14 h-14 grid place-content-center bg-socialMediaBackground rounded-full "
                  to="https://www.instagram.com/___kvi___456_official"
                  target="_blank">
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </li>
              <li>
                <Link
                  className="w-14 h-14 grid place-content-center bg-socialMediaBackground rounded-full "
                  to="https://www.linkedin.com/in/kabita-maurya/"
                  target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-2xl font-extrabold mb-4">
              Download the App
            </h3>
            <ul className="text-footerItemColor flex gap-4">
              <li className="py-2">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.jio.media.ondemand&hl=en_IN&gl=US"
                  target="_blank" >
                  <img src={googlePlayStore} alt="googlePlayStore" />
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="https://apps.apple.com/in/app/jiocinema/id1067316596"
                  target="_blank" >
                  <img src={appleStore} alt="appleStore" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        name="footer-bottom"
        className="px-6 py-4 bg-[#FFFFFF1F] flex gap-2 justify-between  items-center border-t border-t-[#FFFFFF3F]"
      >
        <p className="text-white text-xs sm:text-sm font-medium ">
          Copyright © 2024 Reliance Storage Limited (RSL). All rights reserved.
        </p>
        <div className="w-12">
          <img src={jioLogo} alt="" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;









