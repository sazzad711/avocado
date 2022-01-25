import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Footer.module.css"




function Footer() {
  return (
    <div className={styles.container}>
     
      <section className={styles.subscription}>
        <p className={styles.subscriptionHeading}>
          Join the AV0CAD0 newsletter to receive our best offer for smart solution
        </p>
        <p className={styles.subscriptionText}>
          You can unsubscribe at any time.
        </p>
        <div className={styles.inputAreas}>
          <form>
            <input
              className={styles.footerInput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className={styles.button}>Send</button>
          </form>
        </div>
      </section>
      <div className={styles.footerLinks}>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>About Us</h2>
            <h3>How it works</h3>
            <h3>Testimonials</h3>
            <h3>Careers</h3>
            <h3>Terms of Service</h3>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>Contact Us</h2>
            <h3>Contact</h3>
            <h3>Support</h3>
            <h3>Destinations</h3>
            <h3>Sponsorships</h3>
          </div>
        </div>
        <div className={styles.footerLinkWrapper}>
          <div className={styles.footerLinkItems}>
            <h2>Videos</h2>
            <h3>Submit Video</h3>
            <h3>Ambassadors</h3>
            <h3>Agency</h3>
            <h3>Influencer</h3>
          </div>
          <div className={styles.footerLinkItems}>
            <h2>Social Media</h2>
            
            <h3>Instagram</h3>
            <h3>Facebook</h3>
            <h3>Youtube</h3>
            <h3>Twitter</h3>
          </div>
        </div>
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaWrap}>
        
          <div className={styles.footerLogo}>
            <span className={styles.socialLogo}>
            <Link href="/" passHref>
            AV0CAD0
            </Link>
              
             
            </span>
          </div>
          <small className={styles.websiteRights}>zappa © {new Date().getFullYear()}</small>
          <div className={styles.socialIcons}>

            

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;