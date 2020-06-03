import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';



const styles = (theme) => ({
  background: {
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Typography color="inherit" align="center" variant="h2"
      marked="center">
        Jacob Clarke
      </Typography>
      <br/>
      <Typography color="inherit" align="center" variant="h5" marked2="center">
         - WEB DEVELOPER -
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        From full time touring musician turned full stack developer, my hard work and passion drives me to exceed. Whether it be from touring the world or developing applications, my mentality is still the same. Hard work does not go unnoticed and the more dedicated I am to my craft, the more I can help others grow and see their vision come to fruition.
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
