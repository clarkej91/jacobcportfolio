import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import CodeIcon from '@material-ui/icons/Code';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import StorageIcon from '@material-ui/icons/Storage';
import productCurvyLines from '../static/themes/productCurvyLines.png';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title2: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(15),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={productCurvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title2} component="h2">
          Skills
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <CodeIcon/>
                <Typography variant="h6" className={classes.title}>
                  Frontend/Backend
                </Typography>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                  React, Angular, C#, .Net, Node.js, Ruby on Rails, Python, Express.js
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <StorageIcon/>
                <Typography variant="h6" className={classes.title}>
                  Database
                </Typography>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                  MySQL, PostgreSQl, MongoDB, RDS, DynamoDB
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <CloudQueueIcon/>
                <Typography variant="h6" className={classes.title}>
                  Cloud Computing
                </Typography>
                <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                  AWS, Heroku, Lambda
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
