import React from 'react'
import "./Aside.scss";

const Employee = ({employee}) => {
  console.log("OUTPUT ÄR: Employee -> employee");

  return (
    <li className="Employee">
      <figure className="Employee__Figure">
        <div className="Employee__ImageWrapper">
          <img src={employee.img} alt={employee.alt} className="Employee__Image"/>
          {/* <img src={`./images/portraits/${employee.img}.jpg`} alt="" className="Employee__Image"/> */}
        </div>
        <figcaption className="Employee__FigCaption">
          <h5 className="Employee__Name">{employee.name}</h5>
          <span className="Employee__Description">{employee.description}</span>
        </figcaption>
      </figure>
    </li>
  )
}

const Aside = () => {
  const employees = [
    {linus: {
        name: "Linus Kallin",
        img: "./images/portraits/linus.jpg",
        description: "Professionell gamblare",
        id: 1,
        alt: "Bild på Linus"
    }},
    {jakob: {
      name: "Jakob Gauffin",
      // img: "jakob",
      img: "images/portraits/linus.jpg",
      description: "Professionell bagare",
      id: 2,
      alt: "Bild på Linus",
    }},
    {jessica: {
      name: "Jessica Schwabegger",
      img: "images/portraits/linus.jpg",
      // img: "jessica",
      description: "Professionell kodare",
      id: 3,
      alt: "Bild på Linus"
    }}
  ];

  return (
    <aside className="Aside">

      <div className="Aside__SideImage"></div>

      <section className="Aside__Employees">

        {/* <ul className="Aside__List">
          {employees && employees.map(x =>{
          {console.log("OUTPUT ÄR: Aside -> x", x.id);}
          
          return (
            <div className="Aside__EmployeeWrapper" key={x.id}>
              <Employee employee={x}/>
            </div>
          )
            
          } 
            )}
        </ul> */}
      
        <div className="Aside__Meta">
          <h5 className="Aside__MetaTitle">
            Contacts
          </h5>
          <span className="Aside__MetaAddress">
            Astrakangatan 243
          </span>
          <span className="Aside__MetaZipCode">
            164 54 Stockholm
          </span>
          <span className="Aside__MetaEmail">
            contact@hooli.com
          </span>
        </div>

      </section>
      
    </aside>
  )
}

export default Aside
