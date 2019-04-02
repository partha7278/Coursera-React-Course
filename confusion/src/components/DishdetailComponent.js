import React , { Component } from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';



class DishDetail extends Component{

    componentDidMount(){
        console.log('DishDetail component componentDidMount Invoke');
    }

    componentDidUpdate(){
        console.log('DishDetail component componentDidUpdate Invoke');
    }

     renderDish(dish){
         if (dish != null)
             return(
                 <div className="row">
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
        console.log('DishDetail component Render Invoke');

        const dish = this.props.seleteDish;

        return(
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
    }

}
export default DishDetail;
