import React from 'react'
import "./Aside.scss";

const Employee = ({employee}) => {
  return (
    <li className="Employee">
      <figure className="Employee__Figure">
        <div className="Employee__ImageWrapper">
          <img src="images/portraits/linus.jpg" alt="" className="Employee__Image"/>
        </div>
        <figcaption className="Employee__FigCaption">
          <h5 className="Employee__Name">Linus Kallin</h5>
          <span className="Employee__Description">Professionell gamblare</span>
        </figcaption>
      </figure>
    </li>
  )
}

const Aside = () => {
  const employees = [
    {linus: {
        name: "Linus Kallin",
        img: "linus.jpg",
        description: "Professionell gamblare"

    }}
  ];

  return (
    <aside className="Aside">

      <div className="Aside__SideImage"></div>

      <section className="Aside__Employees">

        <ul className="Aside__List">
          <Employee />
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
