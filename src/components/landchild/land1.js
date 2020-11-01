import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import UnderHeader from '../underHeader';
import Image11 from '../../images/land_plots images/land1.1.jpg';
import Image12 from '../../images/land_plots images/land1.2.jpg';
import Image13 from '../../images/land_plots images/land1.3.jpg';
import { Link } from "react-router-dom";

// import PhoneIcon from '@material-ui/icons/Phone';
import CallSharpIcon from '@material-ui/icons/CallSharp';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';





class Land1 extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <UnderHeader />
        
        <div className="container-sm">
          <Link className="homelink" to='/'>Home / property for sale / land & plots </Link>
        </div>

        <div className="flux_div_land">


          <div className="card onclick_div mb-3 w-60">

            <div id="carouselExampleSlidesOnly" className="carousel slide container-sm" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img style={{ height: "350px" }} src={Image11} className="d-block mt-2 w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img style={{ height: "350px" }} src={Image12} className="d-block mt-2 w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img style={{ height: "350px" }} src={Image13} className="d-block mt-2 w-100" alt="..." />
                </div>
              </div>
            </div>




            <div style={{ borderLeftColor: "black" }, { borderLeft: "1px" }} className="card-body">
              <h5 className="card-title">Detail</h5>
              <p className="card-text">Type :  Resedental.</p>
              <p className="card-text">Area : 200 sq-feet.</p>
              <p className="card-text"><small className="text-muted">
                <hr />
                <h5 className="card-title">Description</h5>
                <ul>
                  <li > Dimensions of the Plot: 30 x 90 (200 Sq yards).</li>
                  <li > Orientation: Northeast.</li>
                  <li > Located within line of LOP (Layout Plan)</li>
                  <li > Map will be approved from CDA (Capital Development Authority)</li>
                  <li > Market, Mosque, School & Kids Playing area available at Just few minutes’ walk</li>
                  <li > Left, Right Houses are constructed.</li>
                  <li > Its 3rd Plot from 150 Feet wide double road.</li>
                  <li > Located in the middle of both entrances of Jkchs society.</li>
                  <li > It will be an ideal & perfect choice for your’s comfort living.</li>
                  <li > We welcome our Honorable Clients at mention Cell Phone Number to confirm a site visit for this Phenomenal Property.</li>

                  <br />
                  <li > Khan BULDERS.</li>
                  <li > 0333-xxxxxxx</li>
                  <li > 0300-xxxxxxx</li>

                </ul>
              </small></p>

            </div>

          </div>


          <div className="sec_child_Main_div">
          <div style={{marginTop:"150em"}}  className="card side_land_div border-dark ml-4 mt-5  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h1 className="detail card-title">RS 100,78,000  <ShareOutlinedIcon style={{fontSize:30},{margin:20}}/><FavoriteBorderOutlinedIcon style={{fontSize:30}}/></h1>
          <p className="card-text">200 Sq yards Excellent Location Plot available in G-15 ISB.</p>
          <p className="card-text"><small>G-15, Islamabad, Islamabad Capital Territory</small></p>

        </div>
          </div>
           
          <div className="card side_land_div border-dark ml-4 mt-4  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h4 className="detail  card-title">Seller description</h4>
          <h5 className="card-title"><AccountCircleOutlinedIcon style={{fontSize:60}} />Tahirmahmoodmalik362</h5>
          <button type="button" className="btn btn-secondary ml-1 btn-lg btn-block">Chat with Seller</button>
             <a  style={{margin:70}}> < CallSharpIcon style={{marginLeft:10}}/> ** *** ****<a className="phone">show number</a> </a>
      
        </div>
          </div>
          

          <div  className="card side_land_div border-dark ml-4 mt-4  mb-2" style={{maxWidth: '27rem'}}>
           <div className="card-body text-dark">
          <h4 className="detail  card-title">Post in</h4>
          <ifram src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.172012199603!2d39.82408886425223!3d21.422482879597794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74c28d467%3A0xb2f543a618225767!2sKaaba!5e0!3m2!1sen!2s!4v1586761757784!5m2!1sen!2s">google map</ifram>

        </div>
          </div>

          </div>




        </div>

        <Footer/>
      </div>
    )
  }
}
export default Land1;