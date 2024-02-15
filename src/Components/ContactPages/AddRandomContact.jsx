import { getRandomUser } from "../../Utility/api";

const AddRandomContact = (props) => {
  const getRandomContact = async () => {
    const responseFromApi = await getRandomUser();
    console.log(responseFromApi);
    const newContact = {
      name:
        responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
      phone: responseFromApi.data.phone_number,
      email: responseFromApi.data.email,
    };
    props.handleAddRandomContact(newContact);
  };
  return (
    <div>
      <div>
        <button
          className="btn btn-warning form-control"
          onClick={() => getRandomContact()}
        >
          {" "}
          Add Random Contact
        </button>
      </div>
    </div>
  );
};

export default AddRandomContact;
