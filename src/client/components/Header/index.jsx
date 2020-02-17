import React, { useEffect, useState } from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { getCategories } from "../../services/categoryAPI";
import NavItem from './NavItem';
import DropdownItem from './DropdownItem';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories("root", { levels: 5 }).then(response => {
      setCategories(response);
      console.log(response);
    });
  }, []);

  // const showCategories = categories => {
  //   const newarr = categories.map(category => {
  //     if (category.c_showInMenu) {
  //       if (category.categories) {
  //         if (category.parent_category_id === "root") {
  //           return (
  //             <li
  //               key={category.name}
  //               className="value"
  //               data-filter-value={category.name}
  //             >
  //               <a href={"/" + category.id}>
  //                 <span className="category-name">{category.name}</span>
  //               </a>
  //               <ul className="refinement__values">
  //                 {showCategories(category.categories)}
  //               </ul>
  //             </li>
  //           );
  //         } else {
  //           return (
  //             <li
  //               key={category.name}
  //               className="value"
  //               data-filter-value={category.name}
  //             >
  //               <a href={"/" + category.parent_category_id + "/" + category.id}>
  //                 <span className="category-name">{category.name}</span>
  //               </a>
  //               <ul className="refinement__values">
  //                 {showCategories(category.categories)}
  //               </ul>
  //             </li>
  //           );
  //         }
  //       } else if (
  //         !category.categories &&
  //         category.parent_category_id === "root"
  //       ) {
  //         return (
  //           <li
  //             key={category.name}
  //             className="value"
  //             data-filter-value={category.name}
  //           >
  //             <a href={"/category/" + category.id}>
  //               <span className="category-name">{category.name}</span>
  //             </a>
  //           </li>
  //         );
  //       }

  //       return (
  //         <li
  //           key={category.name}
  //           className="value"
  //           data-filter-value={category.name}
  //           onClick={e => {}}
  //         >
  //           <a href={"/" + category.parent_category_id + "/" + category.id}>
  //             <span className="category-name">{category.name}</span>
  //           </a>
  //         </li>
  //       );
  //     }

  //     return null;
  //   });

  //   return newarr;
  // };

  const showCategories = (categories) => {
    const newarr = categories.map(category => {
      if (category.c_showInMenu) {
        if (category.parent_category_id === "root") {
          return category.categories ? (
            <NavItem
              linkTo={`/${category.id}`}
              catName={category.name}
            >
              {showCategories(category.categories)}
            </NavItem>
          ) : (
              <NavItem
                linkTo={`/${category.id}`}
                catName={category.name}
              />
            )
        } else {
          return category.categories ? (
            <DropdownItem
              linkTo={`/${category.parent_category_id}/${category.id}`}
              catName={category.name}
            >
              {showCategories(category.categories)}
            </DropdownItem>
          ) : (
              <DropdownItem
                linkTo={`/${category.parent_category_id}/${category.id}`}
                catName={category.name}
              />
            )
        }
      } else {
        return null;
      }
    });

    return newarr;
  }

  return categories.length > 0 ? (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{showCategories(categories)}</Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  ) : null;
};

export default Header;
