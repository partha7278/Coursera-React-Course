import React  from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';





     function RenderDish({dish}) {
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
                         <RenderComments comments={dish.comments} />
                     </div>
                 </div>
             );
         else
             return(
                 <div></div>
             );
     }


     function RenderComments({comments}){
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



    const  DishDetail = (props) => {

        const dish = props.seleteDish;

        return(
            <div className="container">
                <RenderDish dish={dish} />
            </div>
        );
    }

export default DishDetail;
