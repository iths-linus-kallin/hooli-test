import React from 'react'
import "./Aside.scss";

const Aside = () => {
  return (
    <aside className="Aside">

      <div className="Aside__SideImage">bild</div>

      <section className="Aside__Employees">
        <ul className="Aside__List">
          <li className="Aside__Item">
            <figure className="Aside__Figure">
              <img src="" alt="" className="Aside__EmployeeImage"/>
              <figcaption className="Aside__FigCaption">
                <h5 className="Aside__EmployeeName">Jakob Gauffin</h5>
                <span className="Aside__EmployeeDescription">Professionell bagare</span>
              </figcaption>
            </figure>
          </li>
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
