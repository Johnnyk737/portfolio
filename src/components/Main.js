import { Projects } from './Projects';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import images from '../utils/ImageHelper'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  card: {
    marginBottom: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  full: {
    width: "100%"
  },
  role: {
    color: 'red',
    float: 'right',
    'text-size-adjust': 'auto',
    'padding-top': '5px',
  },
  center: {
    alignItems: 'center'
  }
});

export const Main = () => {
  const classes = useStyles();
  
  return (
    <div className="main-container">
      <section className="body-image">
      </section>

      <section id="sect-about-me" className="section scroll-spy">
        <Typography variant="h4" className="section-color">About Me</Typography>
        <div className="about-me">

          <p className="section-text">My name is John Kroll and I am a Full-stack Developer. Most of my experience is in web development, but I have a lot of experience writing backend services. I also love to learn new languages and technologies in my spare time.</p>
        </div>
        
      </section>
      <section id="sect-exp" className="section scroll-spy">
        <Typography variant="h4" className="section-color">Experience</Typography>
        <div className="section-text">
          <ol className="experience-list">
            <li>
              <Card className={clsx(classes.root, classes.card)}>
                <CardContent>
                  <Grid container>
                    <Grid container justify="space-between" alignItems="center" className={classes.pos}>
                      <Grid item m={3}>
                          <Typography variant="h5" className="header-color company">Cerner Corporation - Dublin, Ireland</Typography>
                      </Grid>
                      <Grid item m={3}>
                        <Typography variant="h5" className={classes.role}>Software Engineer III</Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.full}>
                      <Grid item className={classes.pos}>
                        <ol className="role-details">
                          <li>Full-Stack development requiring knowledge of numerous microservices and web applications</li>
                          <li>Lead development and design on uplifting one of our applications to use new microservices while also allowing the usage of legacy services and maintaining performance. The resulting design will be used as the template for all future projects using these microservices</li>
                          <li>Lead developer on new Java microservice to process and provide Ontology data for usage across the HealtheIntent organization</li>
                          <li>Utilized Apache Hadoop systems to process, manage and transform client data for data visualization</li>
                          <li>Managed and developed associates’ software engineering skills to ensure code quality and on-time software releases</li>
                          <li>Created technical and process documentation for team use</li>
                          <li>Experience in: Java, Ruby/Rails, JavaScript</li>
                        </ol>
                      </Grid>
                      <Grid item>
                        <div className="exp-years">
                          <p>September 2018 - Current</p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card className={clsx(classes.root, classes.card)}>
                <CardContent>
                  <Grid container>
                    <Grid container justify="space-between" alignItems="center" className={classes.pos}>
                      <Grid item m={3}>
                        <Typography variant="h5" className="header-color company">Cerner Corporation - Kansas City, MO</Typography>
                      </Grid>
                      <Grid item m={3}>
                        <Typography variant="h5" className={classes.role}>Software Engineer</Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.full}>
                      <Grid item className={classes.pos}>
                        <ol className="role-details">
                          <li>CCL (Cerner proprietary language) development fitting specific client needs</li>
                          <li>Collaborate with teammates by doing code reviews, daily scrum/stand-ups</li>
                          <li>Active participant in LEAN and Agile methodologies</li>
                          <li>Developed test scripts to test code thoroughly</li>
                          <li>Created documentation for entire team to use and assisted in creating coding standards</li>
                          <li>Technologies used: CCL, Javascript</li> 
                        </ol>
                      </Grid>
                      <Grid item>
                        <div className="exp-years">
                          <p>2017 - September 2018</p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </li>
            <li>
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid container justify="space-between" alignItems="center" className={classes.pos}>
                      <Grid item m={3}>
                        <Typography variant="h5" className="header-color company">Cerner Corporation</Typography>
                      </Grid>
                      <Grid item m={3}>
                        <Typography variant="h5" className="role">Technical Software Analyst &gt; Solution Architect</Typography>
                      </Grid>
                    </Grid>
                    <Grid item className={classes.full}>
                      <Grid item>
                        <ol className="role-details">
                          <li>Provided top-tier troubleshooting across numerous clients and a variety of technologies</li>
                          <li>Integral part of solution team by mentoring and collaborating with analysts and engineers and taking on several projects</li>
                          <li>Identified code defects (50+) and assisted Development team in full investigation and resolution</li>
                          <li>Learned and became proficient in new solutions with little assistance and short amount of time</li>
                          <li>Awarded the Excellence Award for above and beyond service</li>
                          <li>Experience in: Java, JavaScript, c++</li>
                        </ol>
                      </Grid>
                      <Grid item>
                        <div className="card-action exp-years">
                          <p>2011 - 2017</p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </li>
          </ol>
        </div>
      </section>
      <section id="sect-skills" className="section scroll-spy">
        <h3 className="section-color">Skills</h3>
        <ul id="skill-list" className="skill-list section-text">
          <li>
            <h4 className="header-color">Web</h4>
            <dl>
               <div className="skill">
                <img src={images.nodeJsIcon} height="75" width="75" alt="NodeJS" />
                <p>NodeJS</p>
              </div>
              <div className="skill">
                <img src={images.htmlIcon} height="75" width="75" alt="HTML5" />
                <p>HTML5</p>
              </div>
              <div className="skill">
                <img src={images.jqueryIcon} height="75" width="75" alt="jQuery" />
                <p>jQuery</p>
              </div>
              <div className="skill">
                <img src={images.cssIcon} height="75" width="75" alt="CSS3" />
                <p>CSS3</p>
              </div>
            </dl>
          </li>
          <li>
            <h4 className="header-color">Frameworks</h4>
            <dl>
              <div className="skill">
                <img src={images.railsIcon} height="75" width="75" alt="Ruby On Rails" />
                <p>Ruby On Rails</p>
              </div>
              <div className="skill">
                <img src={images.reactIcon} height="75" width="75" alt="React" />
                <p>React</p>
              </div>
            </dl>
          </li>
          <li>
            <h4 className="header-color">Software Development</h4>
            <dl>
              <div className="skill">
                <img src={images.javaIcon} height="75" width="75" alt="Java" />
                <p>Java</p>
              </div>
              <div className="skill">
                <img src={images.pythonIcon} height="75" width="75" alt="Python" />
                <p>Python</p>
              </div>
              <div className="skill">
                <img src={images.rubyIcon} height="75" width="75" alt="Ruby" />
                <p>Ruby</p>
              </div>
            </dl>
          </li>
          <li>
            <h4 className="header-color">Build Tools</h4>
            <dl>
              <div className="skill">
                <img src={images.gruntIcon} height="75" width="75" alt="Grunt" />
                <p>Grunt</p>
              </div>
              <div className="skill">
                <img src={images.gulpIcon} height="75" width="75" alt="Gulp" />
                <p>Gulp</p>
              </div>
              <div className="skill">
                <img src={images.npmIcon} height="75" width="75" alt="NPM" />
                <p>NPM</p>
              </div>
            </dl>
          </li>
          <li>
            <h4 className="header-color">Other</h4>
            <dl>
              <div className="skill">
                <img src={images.githubOriginal} height="75" width="75" alt="GitHub" />
                <p>GitHub</p>
              </div>
              <div className="skill">
                <img src={images.intellijIcon} height="75" width="75" alt="IntelliJ" />
                <p>IntelliJ</p>
              </div>
              <div className="skill">
                <img src={images.mysqlIcon} height="75" width="75" alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div className="skill">
                <img src={images.pycharmIcon} height="75" width="75" alt="PyCharm" />
                <p>Pycharm</p>
              </div>
            </dl>
          </li>
        </ul>
      </section>

      <Projects />
      
      <section id="sect-education" className="section scroll-spy">
        <h3 className="section-color">Education</h3>
        <div className="section-text">
          <ol className="education-list">
            <li>
              <dd><em>University of Dubuque (2006 – 2010)</em></dd>
              <dd>Bachelor of Science – Computer Information Technology</dd>
              <dd>Curriculum included Project Management, networking, and development.</dd>
              <dd>Languages covered: HTML, CSS, PHP, Java, SQL</dd>
            </li>
            <br/>
            <li>
              <dd><em>Udacity (Jan 2018 – Aug 2018)</em></dd>
              <dd>Nanodegree – Front End Web Development</dd>
              <dd>Curriculum included object oriented programming, ARIA and semantic development, React, Ember, Angular, JavaScript, HTML, CSS, and mobile web design.</dd>
              <dd>Languages covered: HTML, CSS, JavaScript</dd>
              <dd>Frameworks/Packages: NPM, Ember, Angular, React</dd>
            </li>
          </ol>
        </div>
        
      </section>
      <section id="sect-contact" className="section scroll-spy">
        <h3 className="section-color">Contact</h3>
        <div className="section-text">
          <ul className="contact-list">
            <li>
              <a href="mailto:jmkroll21@gmail.com"><i className="material-icons">email</i></a>
            </li>
            <li>
              <a href="https://github.com/Johnnyk737"><img src={images.githubIcon} height="30" width="30" alt="GitHub" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/john-k-0a915096/"><img src={images.linkedInIcon} height="30" width="30" alt="LinkedIn" /></a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer-container section">
        <div>
          Copyright 2021
          Created by John Kroll
        </div>
      </footer>
    </div>
  )
}
