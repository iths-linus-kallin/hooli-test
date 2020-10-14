import React, {useEffect, useState} from 'react'
import "./Aside.scss";

const Employee = ({employee}) => (
  <li className="Employee">
    <figure className="Employee__Figure">
      <div className="Employee__ImageWrapper">
        <img src={`images/portraits/${employee.img}`} alt={employee.alt} className="Employee__Image" 
        style={{objectPosition: employee.focal.x + " " + employee.focal.y, width: employee.width}}
        />
      </div>
      <figcaption className="Employee__FigCaption">
        <h5 className="Employee__Name">{employee.name}</h5>
        <span className="Employee__Description">{employee.description}</span>
      </figcaption>
    </figure>
  </li>
);

const Aside = () => {
  const [randomImage, setRandomImage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      randomImage !== 17 
      ? setRandomImage(randomImage + 1)
      : setRandomImage(1)
    }, 3000)
  }, [randomImage])

  const employees = [
    {
        name: "Linus Kallin",
        img: "linus.jpg",
        description: "Professionell gamblare",
        id: 1,
        alt: "Bild på Linus",
        focal: {
          x: "50%",
          y: "50%"
        },
    },
    {
      name: "Jakob Gauffin",
      img: "jakob.jpg",
      description: "Professionell bagare",
      id: 2,
      alt: "Bild på Jakob",
      focal: {
        x: "-42px",
        y: "-7px"
      },
      width: "160%"

    },
    {
      name: "Jessica Schwabegger",
      img: "jessica.jpg",
      description: "Professionell kodare",
      id: 3,
      alt: "Bild på Jessica",
      focal: {
        x: "7px",
        y: "0px"
      },
      width: "107%"
    }
  ];

  return (
    <aside className="Aside">

      <div className="Aside__SideImage" style={{backgroundImage: `url("images/${randomImage}.jpg")`}}></div>

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
