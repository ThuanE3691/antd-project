import { Button, Row, Col } from "antd";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../shared/Header/Header";

const Home = ({ title1, title2, link1, link2 }) => {
   const navigate = useNavigate();

   const onClickNavigation = (link) => {
      navigate(link);
   };
   return (
      <div className="App">
         <Header></Header>
         <div className="container">
            <h1 className="project-title">Equipment Management</h1>
            <Row className="my-row" gutter={[30, 100]}>
               <Col span={12}>
                  <Button
                     type="default"
                     block
                     className="mybtn"
                     onClick={() => onClickNavigation(link1)}
                  >
                     {title1}
                  </Button>
               </Col>
               <Col span={12}>
                  <Button
                     type="default"
                     block
                     className="mybtn"
                     onClick={() => onClickNavigation(link2)}
                  >
                     {title2}
                  </Button>
               </Col>
            </Row>
         </div>
      </div>
   );
};
export default Home;
