import React from 'react';
//import Home1 from './Home1'; // Replace with the correct path to your Home1 component
//import Home2 from './Home2'; // Replace with the correct path to your Home2 component

const Header = () => {
  // const temp = true; // Set temp to true or false based on your logic
  const shouldRenderHeader = false; // Set this condition as needed

  if (!shouldRenderHeader) {
    return null; // Do not render anything
  }

  return <div className="header-container">Header</div>;
};

  // // Using if-else statement for conditional rendering
  // let componentToRender;
  // if (temp) {
  //   componentToRender = <Home2 />;
  // } else {
  //   componentToRender = <Home1 />;
  // }

  return (
    // <div className="header">
    //   {componentToRender}
    // </div>
    <></>
  );
}

export default Header;
