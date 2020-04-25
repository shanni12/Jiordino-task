import React from "react";
function Address({ address }) {
  return (
    <div>
      <p>Street:{address.street}</p>
      <p>City:{address.city}</p>
      <p>ZipCode:{address.zipcode}</p>
    </div>
  );
}
export default Address;
