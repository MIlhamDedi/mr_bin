import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import VerticalLinearStepper from "../../components/VerticalLinearStepper/VerticalLinearStepper";
import LabelBottomNavigation from "../../components/LabelBottomNavigation/LabelBottomNavigation";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Mr Bin"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "success"
          }}
          {...rest}
        />

        <LabelBottomNavigation />

        <Parallax image={require("assets/img/bg8.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>121 pt</h1>
                  <h3 className={classes.subtitle}>
                    <i>Go Green!</i>, ayo kumpulkan point lagi!
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <VerticalLinearStepper />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
