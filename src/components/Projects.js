import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// TODO: Workaround until I stop using gh-pages
const githubData = {
  "data": {
    "repositoryOwner": {
      "pinnedItems": {
        "nodes": [
          {
            "name": "barcrawl-app",
            "url": "https://github.com/Johnnyk737/barcrawl-app",
            "description": null,
            "languages": {
              "nodes": [
                {
                  "name": "JavaScript",
                  "color": "#f1e05a"
                },
                {
                  "name": "HTML",
                  "color": "#e34c26"
                },
                {
                  "name": "Less",
                  "color": "#1d365d"
                }
              ]
            }
          },
          {
            "name": "bartender-app",
            "url": "https://github.com/Johnnyk737/bartender-app",
            "description": null,
            "languages": {
              "nodes": [
                {
                  "name": "JavaScript",
                  "color": "#f1e05a"
                },
                {
                  "name": "HTML",
                  "color": "#e34c26"
                },
                {
                  "name": "Less",
                  "color": "#1d365d"
                }
              ]
            }
          },
          {
            "name": "openbrewerydb",
            "url": "https://github.com/Johnnyk737/openbrewerydb",
            "description": "🍻 An open-source dataset of breweries, cideries, brewpubs, and bottleshops.",
            "languages": {
              "nodes": [
                {
                  "name": "Jupyter Notebook",
                  "color": "#DA5B0B"
                },
                {
                  "name": "TypeScript",
                  "color": "#2b7489"
                }
              ]
            }
          },
          {
            "name": "openbrewerydb-rails-api",
            "url": "https://github.com/Johnnyk737/openbrewerydb-rails-api",
            "description": "Official v1 Open Brewery DB REST API built with Ruby on Rails",
            "languages": {
              "nodes": [
                {
                  "name": "Ruby",
                  "color": "#701516"
                },
                {
                  "name": "HTML",
                  "color": "#e34c26"
                }
              ]
            }
          }
        ]
      }
    }
  }
}

const useStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },
  card: {
    minWidth: 400,
    minHeight: 100
  }
})

export const Projects = () => {
  const classes = useStyles();
  
  const showProjects = () => {
    return githubData.data.repositoryOwner.pinnedItems.nodes.map((proj, idx) => {
      return (
        <Grid key={idx} container sm={12} md={6} lg={6} className={classes.pos}>
          <Card className={clsx(classes.card)}>
            {/* <div className="card-image">
              <img src="img/arcade-game.png" alt={proj.name} />
            </div> */}
            <CardContent className="card-content activator">
              <Typography variant="h5" className="header-color"><a href={proj.url}>{proj.name}</a></Typography>
              {/* <MoreVertIcon /> */}
              <Grid item>
                <Typography variant="p">{proj.description}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="p">Technologies used:&nbsp;
                  {proj.languages.nodes.map(lang=>lang.name).join(", ")}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )
    })
  }

  return (
    <section id="sect-projects" className="section scroll-spy">
          <Typography variant="h3" className="section-color">Projects</Typography>
          <div className="section-text">
            <div className="project-list">
              <Grid direction="row" className="row" sm={12} md={6} lg={6}>
                {showProjects()}
              </Grid>
            </div>
          </div>
        </section>
    )
}
