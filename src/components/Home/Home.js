import "./styles.css";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId
} from "react-google-places-autocomplete";

export default function App() {
  const [address, setAddress] = useState();
  const [addressObj, setAddressObj] = useState();

  const getAddressObject = (address_components) => {
    console.log(address_components);
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5"
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4"
      ],
      country: ["country"]
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: ""
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  useEffect(() => {
    const func = async () => {
      const geocodeObj =
        address &&
        address.value &&
        (await geocodeByPlaceId(address.value.place_id));
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      console.log("addressObject", addressObject);
      setAddressObj(addressObject);
    };
    func();
  }, [address]);

  return (
    <div className="App">
      <h1>Google Places - Address Autocomplete</h1>
      <GooglePlacesAutocomplete
        apiKey="hjhhggh99887jjkjnfhdsgjkkkj"
        selectProps={{
          isClearable: true,
          value: address,
          onChange: (val) => {
            setAddress(val);
          }
        }}
      />
      <pre style={{ textAlign: "left", background: "#f0f0f0", padding: 20 }}>
        {JSON.stringify(addressObj, 0, 2)}
      </pre>
    </div>
  );
}
