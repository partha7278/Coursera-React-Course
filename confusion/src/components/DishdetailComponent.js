import React,{Component}  from 'react';
import { Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Row,Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';



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
                    <CommentForm  />
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
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }


    const minLength = (len) => (val) => (val) && (val.length >= len );
    const maxLength = (len) => (val) => !(val) || (val.length <= len );

    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state = {
                isCommentOpen:false
            }
            this.toggleComment = this.toggleComment.bind(this);
            this.handleComment = this.handleComment.bind(this);
        }

        toggleComment(){
            this.setState({
                isCommentOpen : !this.state.isCommentOpen
            });
        }

        handleComment(values){
            console.log("Current state: "+JSON.stringify(values));
            alert("Current state: "+JSON.stringify(values));
            this.toggleComment();
        }

         render() {
             return(
                 <>
                     <Button outline onClick={this.toggleComment}>
                         <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                     </Button>
                     <Modal isOpen={this.state.isCommentOpen} toggle={this.toggleComment}>
                         <ModalHeader toggle={this.toggleComment}>Submit Comment</ModalHeader>
                         <ModalBody>
                             <LocalForm className="container" onSubmit={(values)=>this.handleComment(values)}>

                                 <Row className="form-group" md={12}>
                                     <Label htmlFor="rating">Rating</Label>
                                     <Control.select model=".rating" className="form-control" id="rating" name="rating">
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                     </Control.select>
                                 </Row>
                                  <Row className="form-group" md={12}>
                                      <Label htmlFor="author">Your Name</Label>
                                      <Control.text model=".author" id="author" name="author" className="form-control" placeholder="Your Name"validators={{ minLength:minLength(3),maxLength:maxLength(15) }} />
                                      <Errors className="text-danger" model=".author" show="touched" messages={{
                                              minLength:'At least 3 characters',
                                              maxLength:'Must be 15 characters or less'
                                          }} />
                                  </Row>
                                  <Row className="form-group" md={12}>
                                      <Label htmlFor="comment"> Comment</Label>
                                      <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
                                  </Row>
                                  <Row className="form-group" md={12}>
                                      <Button type="submit" color="primary">Submit</Button>
                                  </Row>
                             </LocalForm>
                         </ModalBody>
                     </Modal>
                 </>
            );
         }
    }



export default DishDetail;
