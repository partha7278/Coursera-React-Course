import React , { Component } from 'react';
import { Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText} from 'reactstrap';



class DishDetail extends Component{

    constructor(props){
        super(props);
    }

     renderDish(dish){
         if (dish != null)
             return(
                 <div class="row">
                     <div className="col-12 col-md-5 m-1">
                         <Card>
                             <CardImg top src={dish.image} alt={dish.name}/>
                             <CardBody>
                                 <CardTitle>{dish.name}</CardTitle>
                                 <CardText>{dish.description}</CardText>
                             </CardBody>
                         </Card>
                     </div>
                     <div className="col-12 col-md-5 m-1">
                         {this.renderComments(dish.comments)}
                     </div>
                 </div>
             );
         else
             return(
                 <div></div>
             );
     }

     renderComments(comments){
        if(comments != null){
            const commentslist = comments.map((comm) => {
                return(
                    <ul key={comm.id} className="list-unstyled">
                        <li><p>{comm.comment}</p></li>
                        <li><p>-- {comm.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comm.date))) }</p></li>
                    </ul>
                )
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {commentslist}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }



    render(){
        const dish = this.props.seleteDish;

        return(
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
    }

}
export default DishDetail;
