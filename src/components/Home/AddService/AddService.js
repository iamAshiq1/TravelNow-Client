import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
      console.log(data);
  
      axios.post("https://safe-stream-68463.herokuapp.com/services", data)
      .then(res => { 
          if(res.data.insertedId) {
              alert('Added SuccessFully');
              reset();
          }
       })
    };
    return (
        <div className="my-5 text-center">
            <h4 className="pt-4"> Add a New Service</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-3 w-50 "
          {...register("img", { required: true })}
          placeholder="Image URL"/> <br />
        <input
          className="my-2 w-50"
          {...register("price")}
          placeholder="Price"
        />
        <br />
        <input
          className="my-3 w-50"
          {...register("time")}
          placeholder="Time"
        />
        <br />
        <input
          className="mt-3 w-50 "
          placeholder="Place"
          {...register("place")}
        />
        <br />
        <br />
        <input
          className="btn btn-outline-primary"
          value="Submit"
          type="submit"
        />
      </form>
        </div>
    );
};

export default AddService;