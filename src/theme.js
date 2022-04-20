import { createTheme } from '@material-ui/core/styles';
import { deDE } from '@material-ui/core/locale';
function setTheme(contextColours){
  
const theme = createTheme({
  palette: {
    primary: {
      main: contextColours.MAINCOLOR
    },
    COLOR1:{
      main:contextColours.COLOR1
    },
    COLOR2:{
      main:contextColours.COLOR2
    },
    METANAV:{
      main:contextColours.METANAV
    },
    METANAVBTN:{
      main:contextColours.METANAVBTN
    }
  },
  components:{
    MuiButtonBase: {
      defaultProps: {
      main:contextColours.BUTTONCOLOR
      
      },

    }
  },
}, deDE);
/*        root: {
          "&:hover": {
            backgroundColor: pink[100],
            color: pink[700]
          }
        }, */
return theme
}
export default setTheme;