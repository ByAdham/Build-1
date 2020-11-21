// import React from 'react';
// import styled from 'styled-components';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
// import {Link} from 'react-router-dom';

// export default function Review (props) {
//     const {reviews} = props;
//     console.log(props);
    
//     return (
//         reviews.map((review) => {
//             return (
                
//                     <StyledReviewDiv>
//                         <Card>
//                             <CardBody>
//                                 <CardTitle tag="h5">{review.userName}</CardTitle>
//                                 <CardSubtitle tag="h6" className="mb-2 text-muted">{review.reviewTitle}</CardSubtitle>
//                                 <CardText>{review.reviewBody}</CardText>
//                                 <Link>
//                                 <Button>View More</Button>
//                                 </Link>
//                             </CardBody> 
//                         </Card>
//                     </StyledReviewDiv>
                
//             )
//         })
        
//     );
// };

// const StyledReviewDiv = styled.div `
// min-width: 25%;
// `

