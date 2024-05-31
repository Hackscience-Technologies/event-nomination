import React, { useState } from 'react';
import { EVENT_NAME,WHATSAPP_URL } from '../config';
import { useGetCategoriesQuery, useNominationMutation } from '../services/categories';

import swal from 'sweetalert';

const NominationForm = () => {
  const { data, isLoading: categoriesLoading } = useGetCategoriesQuery();
  const [nominate, { isLoading: nominationLoading }] = useNominationMutation();
  const [loading, setLoading] = useState(false);

  if (categoriesLoading) {
    return "Loading...";
  }

  console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    const formData = new FormData(event.target);
  
    try {
      const response = await nominate(formData).unwrap();
      console.log(response);
  
      if (response.message === "Nomination submitted successfully") {
        swal({
          title: "Success",
          text: "Nomination Submitted Successfully. Kindly Click on the button below to join our whatsapp Group",
          icon: "success",
          button: "Join Us On Whatsapp",
        }).then(() => {
          window.location.href = WHATSAPP_URL;
        });
      } else {
        swal({
          title: "Error",
          text: "Failed to submit nomination",
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      console.error('Error nominating:', error);
      swal({
        title: "Error",
        text: error.data.message,
        icon: "error",
        button: "OK",
      });
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form id="pay-form" method="post" onSubmit={handleSubmit}>
      <b><h2>{EVENT_NAME} Nominations</h2></b>
      <p>Categories</p>
      <select className="inputbox" name="category_id" required>
        <option value="">Select Category</option>
        {data.data.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      
      <p>Name</p>
      <input type="text" className="inputbox" name="name" id="name" placeholder="Enter name" required />

      <p>Phone Number</p>
      <input type="tel" className="inputbox" name="phoneNumber" id="phone_number" placeholder="Enter Phone Number" required />
      
      <p>Image (10mb Max)</p>
      <input type="file" className="inputbox" name="image" id="image" alt="nominee_image" required />
      
      <p></p>
      <button type="submit" id="nominateButton" className="button" disabled={loading || nominationLoading}>
        {loading || nominationLoading ? 'Loading...' : 'Nominate'}
      </button>
    </form>
  );
};

export default NominationForm;
