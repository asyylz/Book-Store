import { Grid3x3Outlined } from '@mui/icons-material';
import { Grid3x3 } from '@mui/icons-material';
import { Paper, Container, Box, Typography, Grid } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-body">
        <div className="footer-col footer-col-generic footer-col-4 ">
          <h3>Shopping with us</h3>

          <ul>
            <li>
              <a className="" href="/help/contact-us/28">
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a className="" href="/bookshops">
                <span>Bookshops</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/click-and-collect/27">
                <span>Click &amp; Collect</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/delivery-options/19">
                <span>Delivery Options</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/online-pricing-and-payments/35">
                <span>Online Pricing</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/returning-items/41">
                <span>Returning Items</span>
              </a>
            </li>
            <li>
              <a className="" href="/students">
                <span>Student Discount</span>
              </a>
            </li>
            <li>
              <a className="" href="/category/gift-cards">
                <span>Waterstones Gift Cards</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col-generic footer-col-4 ">
          <h3>Legal</h3>

          <ul>
            <li>
              <a className="" href="/help/accessibility-statement/5">
                <span>Accessibility</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/cookie-policy/1408">
                <span>Cookie Policy</span>
              </a>
            </li>
            <li>
              <a className="" href="#cookies">
                <span>Manage Cookies</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/modern-slavery-statement/1051">
                <span>Modern Slavery Statement</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/privacy-policy/1401">
                <span>Privacy Notice</span>
              </a>
            </li>
            <li>
              <a
                className=""
                href="/help/supply-of-waterstones-products-to-customers/46"
              >
                <span>Terms &amp; Conditions</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col-generic footer-col-4 ">
          <h3>About Waterstones</h3>

          <ul>
            <li>
              <a className="" href="/help/about-us/44">
                <span>About us</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/affiliate-programme/45">
                <span>Affiliates</span>
              </a>
            </li>
            <li>
              <a className="" href="/careers">
                <span>Careers at Waterstones</span>
              </a>
            </li>
            <li>
              <a
                className=""
                href="http://www.hatchards.co.uk/"
                target="_blank"
              >
                <span>Hatchards</span>
              </a>
            </li>
            <li>
              <a className="" href="/help/independent-publishers/48">
                <span>Independent Publishers</span>
              </a>
            </li>
            <li>
              <a
                className=""
                href="https://www.waterstones.com/help/account-sales/11"
              >
                <span>Waterstones Account Sales</span>
              </a>
            </li>
            <li>
              <a className="" href="/app">
                <span>Waterstones App</span>
              </a>
            </li>
            <li>
              <a className="" href="/waterstones-childrens-laureate">
                <span>Waterstones Children's Laureate</span>
              </a>
            </li>
            <li>
              <a className="" href="/plus">
                <span>Waterstones Plus</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-col-social footer-col-4 ">
          <h3>Follow us</h3>

          <ul className="socials">
            <li>
              <a
                className="icon-x"
                href="https://twitter.com/waterstones"
                target="_blank"
              >
                <span>X</span>
              </a>
            </li>
            <li>
              <a
                className="icon-facebook"
                href="https://www.facebook.com/waterstones"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                className="icon-instagram"
                href="http://instagram.com/waterstones"
                target="_blank"
              >
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                className="icon-tiktok"
                href="https://www.tiktok.com/@waterstones"
                target="_blank"
              >
                <span>TikTok</span>
              </a>
            </li>
            <li>
              <a
                className="icon-youtube"
                href="http://www.youtube.com/user/Waterstonescom"
                target="_blank"
              >
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col nav-col">
          <a href="/help/contact-us/28">Contact us</a>
        </div>
        <div className="footer-col nav-col">
          <a href="/help">Help</a>
        </div>
        <div className="footer-col nav-col">
          <a href="/app">Waterstones App</a>
        </div>
        <div className="footer-col nav-col">
          <a href="/help/privacy-policy/1401">Privacy Policy</a>
        </div>
        <div className="footer-col nav-col">
          <a href="/help/cookie-policy/1408">Cookie Policy</a>
        </div>
        <div className="footer-col nav-col">
          <a href="#cookies">Manage Cookies</a>
        </div>
        <div className="footer-col nav-col">
          <a href="https://www.waterstones.com/help/modern-slavery-statement/1051">
            Modern Slavery Statement
          </a>
        </div>
        <div className="footer-col nav-col">
          <a href="/students">Student Discount</a>
        </div>
        <div className="footer-col nav-col">
          <a href="/help/account-sales/11">Waterstones Account Sales</a>
        </div>

        <small>
          © Waterstones, 2024. Waterstones Booksellers Limited. Registered in
          England and Wales. Company number 00610095. Registered office address:
          203-206 Piccadilly, London, W1J 9HD.
        </small>
      </div>
    </footer>
  );
}
