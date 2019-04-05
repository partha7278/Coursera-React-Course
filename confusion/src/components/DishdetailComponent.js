import React  from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';





     function RenderDish({dish}) {
         if (dish != null)
             return(
                 <div className="col-12 col-md-5 m-1">
                     <Card>
                         <CardImg top src={dish.image} alt={dish.name}/>
                         <CardBody>
                             <CardTitle>{dish.name}</CardTitle>
                             <CardText>{dish.description}</CardText>
                         </CardBody>
                     </Card>
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
                <div className="col-12 col-md-5 m-1">
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

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }

export default DishDetail;
