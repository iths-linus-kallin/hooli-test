import React from 'react'
import "./Aside.scss";

const Employee = ({employee}) => (
  <li className="Employee">

    <figure className="Employee__Figure">
      <div className="Employee__Outer">
        <div className="Employee__ImageWrapper">

          <img src={`images/portraits/${employee.img}`} alt={employee.alt} className="Employee__Image" 
          style={{objectPosition: employee.focal.x + " " + employee.focal.y, width: employee.width}}
          />

        </div>
      </div>

      <figcaption className="Employee__FigCaption">

        <h5 className="Employee__Name">{employee.name}</h5>
        <span className="Employee__Description">{employee.description}</span>

      </figcaption>

    </figure>

  </li>
);

const Aside = () => {

  const employees = [
    {
        name: "Linus Kallin",
        img: "linus.jpg",
        description: "Professionell gamblare",
        id: 1,
        alt: "Linus",
        focal: {
          x: "0%",
          y: "0%"
        },
    },
    {
      name: "Jakob Gauffin",
      img: "jakob.jpg",
      description: "Professionell bagare",
      id: 2,
      alt: "Jakob",
      focal: {
        x: "65%",
        y: "0%"
      },
    },
    {
      name: "Jessica Schwabegger",
      img: "jessica.jpg",
      description: "Professionell kodare",
      id: 3,
      alt: "Jessica",
      focal: {
        x: "0%",
        y: "0%"
      },
    }
  ];

  return (
    <aside className="Aside">

      <div className="Aside__SideImage">
        <img src="images/16.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/15.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/14.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/13.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/12.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/11.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/10.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/9.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/8.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/7.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/6.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/5.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/4.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/3.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/2.jpg" alt="" className="Aside__AsideImage"/>
        <img src="images/1.jpg" alt="" className="Aside__AsideImage"/>
      </div>

      <section className="Aside__Employees">

        <ul className="Aside__List">
          {employees && employees.map(x =>
          
            <div className="Aside__EmployeeWrapper" key={x.id}>
              <Employee employee={x}/>
            </div>
            )}
        </ul>
      
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
