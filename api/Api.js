import axios from "axios";

  export async function getData(){
    let response = await axios.get(
        "https://5e926b7cbbff810016968e85.mockapi.io/test"
      );
    return response.data;
  };