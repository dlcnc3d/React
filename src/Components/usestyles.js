//import React from "react";
import {makeStyles} from'@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      vbackgroundPosition: "center"
    },
    overlay: {
      position: "absolute",
      top: 0,
      boyoom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent:{
      position: "relative",
      padding: theme.spacing(4),
      marginTop: theme.spacing(4)
    },
    cardMedia: {
      paddingTop: "56.25%"
    },
    CardContent: {
      flexGrow: 1
    },
    cardgrid: {
      marginTop: theme.spacing(4)
    }
}))


export default useStyles