import { makeStyles } from '@mui/styles';
import CustomTheme from '../context/CustomTheme';

const useStyles = makeStyles({
	container:{
        maxHeight: "4em",
        maxWidth: "4em",
        backgroundColor: CustomTheme.palette.primary.main,
        borderRadius: "50%",
        padding: "2em"
    },
    logo: {
        width: "100%",
        height: "100%", 
        objectFit: "contain"
    }
})


const BrandLogo = () => {   
    const classes = useStyles();
    return(
        <>
            <div className={classes.container}>
                <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Font_Awesome_5_solid_tasks.svg/1200px-Font_Awesome_5_solid_tasks.svg.png" alt="" />
            </div>
        </>
    )
}

export default BrandLogo;