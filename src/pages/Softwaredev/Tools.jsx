import React from "react";
import "./Tools.css";
import framework from "../../assets/images/framework.png";
import language from "../../assets/images/language.png";
import cloud from "../../assets/images/cloud.png";
import dbms from "../../assets/images/dbms.png";
import web from "../../assets/images/web.png";
import mobile from "../../assets/images/mobile.png";

function Tools() {
  return (
    <>
      <div className="tools">
        <div className="tool-page-heading">
          <p>Tools & Technology We used</p>
        </div>
        <div className="tools-sub-container">
          <div className="tool-mobile-view">
            <div className="mobile-box-1">
              <p>FRAMEWORKS</p>
              <p>EJB</p>
              <p>Reactive (Akka,RxJava, Reactor)</p>
              <p>LDAP / Active Directory</p>
              <p>Hibernate</p>
              <p>Groovy</p>
              <p>Apache Camel</p>
              <p>Nodejs</p>
              <p>JDBC / JPA</p>
              <p>JMS</p>
              <p>Firebase</p>
            </div>
            <div className="mobile-box-1">
              <p>LANGUAGES</p>
              <p>Kotlin</p>
              <p>Rust</p>
              <p>Scala</p>
              <p>PHP</p>
              <p>Objective C</p>
              <p>C#</p>
              <p>Java</p>
              <p>Groovy</p>
            </div>
            <div className="mobile-box-1">
              <p>CLOUD</p>
              <p>Google Cloud</p>
              <p>GroovMicrosoft Azurey</p>
              <p>Oracle Cloud</p>
              <p>IBM Cloud</p>
              <p>Amazon Web Services (AWS)</p>
            </div>
            <div className="mobile-box-1">
              <p>DATABASE MANAGEMENT</p>
              <p>MySQL</p>
              <p>NoSQL</p>
              <p>Oracle SQL</p>
              <p>Microsoft SQL</p>
              <p>PostgreSQL</p>
            </div>
            <div className="mobile-box-1">
              <p>WEB</p>
              <p>Angular</p>
              <p>WebGL</p>
              <p>Coffee</p>
              <p>Sass</p>
              <p>Vue</p>
            </div>
            <div className="mobile-box-1">
              <p>MOBILE</p>
              <p>iOS</p>
              <p>Android</p>
              <p>React</p>
              <p>HTML5</p>
              <p>JavaScript</p>
              <p>Xamarin</p>
            </div>
          </div>

          <div className="tool-pc-view">
            <div className="pc-view-box-1">
              <img src={framework} alt="" />
            </div>
            <div className="pc-view-box-1 pc-view-flex-box">
              <div>
                <img src={language} alt="" />
              </div>
              <div>
                <img src={cloud} alt="" />
              </div>
            </div>
            <div className="pc-view-box-1">
              <img src={dbms} alt="" />
            </div>
            <div className="pc-view-box-1 pc-view-flex-box">
              <div>
                <img src={web} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
