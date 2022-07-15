import {Component} from "react";
import {Dialog, DialogContent, DialogTitle} from "@mui/material";



const {title,children,openPopup,setOpenPopup} = this.props;

class signIn extends Component{

    constructor(props) {
        super(props);
    }

    render() {


        return(
            <Dialog open= {openPopup}>

                <DialogTitle>
                <h1>Title is here</h1>
                </DialogTitle>

                <DialogContent>

                    <h1>body is here</h1>
                </DialogContent>

            </Dialog>

        )
    }


}