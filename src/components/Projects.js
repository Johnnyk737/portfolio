import { useEffect, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export const Projects = () => {
  const [pinned, setPinned] = useState([]);
  const [status, setStatus] = useState('LOADING');

  
  useEffect(() => {
    let query = `query {
      repositoryOwner(login: "Johnnyk737") {
        ... on User {
          pinnedItems(first:6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                url
                description
                languages(first: 3) {
                  nodes {
                    ... on Language {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`

    axios({
      url: "https://api.github.com/graphql", 
      method: 'POST',
      data: {
        query: query
      },
      headers: {
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
    })
    .then(response => response.data)
    .then(data => {
      setPinned(data.data.repositoryOwner.pinnedItems.nodes)
      setStatus('DONE')
    })
    .catch(error => {
      console.log(error)
    })
    
  }, [])

  const showProjects = () => {
    if (status === 'DONE') {
      return pinned.map((proj, idx) => {
        return (
          <Grid key={idx} container sm={12} md={6} lg={6}>
            <Card className="medium">
              {/* <div className="card-image">
                <img src="img/arcade-game.png" alt={proj.name} />
              </div> */}
              <CardContent className="card-content activator">
                <Typography variant="h5" className="header-color"><a href={proj.url}>{proj.name}</a></Typography>
                <MoreVertIcon />
                <Typography variant="p">{proj.description}</Typography>
                <Typography variant="p">Technologies used: 
                  {proj.languages.nodes.map(lang=>lang.name).join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )
      })
    } else {
      return (<Typography variant="div">Loading... </Typography>);
    }
  }

  return (
    <section id="sect-projects" className="section scroll-spy">
          <Typography variant="h3" className="section-color">Projects</Typography>
          <div className="section-text">
            <div className="project-list">
              <Grid direction="row" className="row">
                {showProjects()}
              </Grid>
            </div>
          </div>
        </section>
    )
}
