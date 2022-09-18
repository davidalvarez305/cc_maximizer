import { Form, Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import Button from "../../../components/Button";
import PrimaryLayout from "../../../layout/Primary";
import "./ProfilePicture.css";

const ProfilePicture = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [image, setImage] = useState<File>();

  function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  }

  function handleSubmit() {
    console.log(image);
  }

  const styles = {
    buttonDarkLabel: {
      alignItems: "flex-start",
      backgroundColor: "#000000",
      borderRadius: "8px",
      display: "flex",
      height: "56px",
      justifyContent: "flex-end",
      minWidth: "125px",
      padding: "17px 43px",
    },
    label: {
      color: "rgba(255, 255, 255, 1)",
      fontWeight: 700,
      lineHeight: "21px",
      minHeight: "21px",
      minWidth: "38px",
    },
  };

  return (
    <PrimaryLayout screenName="Change Profile Picture">
      <div className="form-container">
        <Formik initialValues={{ image: "" }} onSubmit={handleSubmit}>
          <Form>
            <div>
              <label
                htmlFor="image"
                style={{
                  ...styles.buttonDarkLabel,
                  ...styles.label,
                  cursor: isHovering ? "pointer" : undefined,
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Upload Image
              </label>
              <input
                style={{ display: "none" }}
                id="image"
                onChange={handleUpload}
                type="file"
                accept="image/*"
              />
            </div>
            {image && <Button>Upload</Button>}
          </Form>
        </Formik>
        {image && <div>{image.name}</div>}
      </div>
    </PrimaryLayout>
  );
};

export default ProfilePicture;
