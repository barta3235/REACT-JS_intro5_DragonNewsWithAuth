import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import {useParams} from 'react-router-dom'

const NewsDetails = () => {


    const {id}=useParams();


    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="col-span-3">
                      <h2 className="text-5xl">News Details</h2>
                      {id}
                  </div>
                  <div className="col-span-1">
                       <RightSideNav></RightSideNav>
                  </div>

            </div>

        </div>
    );
};

export default NewsDetails;