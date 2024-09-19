import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <div className="home">
    
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          
        </div>
        
        <div className="listContainer">
  <div className="header">
    <div className="listTitle">Users Overview</div>
    <div className="searchBar">
      <input type="text" placeholder="Search users..." />
    </div>
  </div>
  <Table />
  </div>
        
        <Footer /> {/* Include Footer here */}
      </div>


      
    </div>
  );
};

export default Home;
