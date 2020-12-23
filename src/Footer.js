import classes from './Footer.module.css';
const Footer = () => {
    return (
        <>
            <div className={classes.footerContainer}>
                <div className={classes.footerRow}>
                    <div className={classes.footerColumn}>
                        <h3 className={classes.footerColumnHeading}>EDYODA</h3>
                        <a href="/about">About Us</a>
                        <a href="/contact-us">Contact Us</a>
                        <a href="/terms">Terms of Use</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>
                    <div className={classes.footerColumn}>
                        <h3 className={classes.footerColumnHeading}>RESOURCES</h3>
                        <a href="/courses/all">Courses</a>
                        <a href="/videos/all">Learning Videos</a>
                        <a href="/channel/all">Educators</a>
                        <a href="/stories">EdYoda Stories</a>
                        <a href="https://university.edyoda.com/" rel="noopener">University</a>
                    </div>
                    <div className={classes.footerColumn}>
                        <h3 className={classes.footerColumnHeading}>FOR ENTERPRISES</h3>
                        <a href="https://www.zekelabs.com" target="_blank" rel="noopener noreferrer">Train Your Employees</a>
                        <h3 className={classes.footerColumnHeading}>QUICK LINKS</h3>
                        <a href="/learn-and-earn">Learn and Earn</a>
                        <a href="/become-learning-enabler">Become a Learning-Enabler</a>
                        <a href="/learning-enabler-tips">Tips for Learning-Enabler</a>
                        <a href="/requestnewtopic">Request New Topic</a>
                    </div>
                    <div className={classes.footerColumn}>
                        <h3 className={classes.footerColumnHeading}>CONNECT</h3>
                        <div className={classes.footerColumn}>
                            <a className="Footer__AddressText__1CPUN">2nd Floor #188, Survey No. - 123/1, <br></br>Incubes Building Next to McDonalds,<br></br>ITPL Main Rd, Brookefield,<br></br>Bengaluru, Karnataka-560037,<br></br>India</a>
                            <a>© 2020 <br></br>zekeLabs Technologies Private Limited</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;