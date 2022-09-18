import { Form, Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import Button from "../../../components/Button";
import PrimaryLayout from "../../../layout/Primary";
import "./ProfilePicture.css";
import { FiSend } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

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
            <div className="form-subcontainer">
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
                Set Image
              </label>
              <input
                style={{ display: "none" }}
                id="image"
                onChange={handleUpload}
                type="file"
                accept="image/*"
              />
              {image && (
                <Button className="LightBlue">
                  <div className="upload-button">
                    Upload
                    <FiSend />
                  </div>
                </Button>
              )}
            </div>
          </Form>
        </Formik>
        {image && (
          <div className="close-button">
            {image.name}{" "}
            <div
              onClick={() => setImage(undefined)}
              style={{
                cursor: isHovering ? "pointer" : undefined,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <GrClose size={25} color={"#FF0000"} />
            </div>
          </div>
        )}
      </div>
    </PrimaryLayout>
  );
};

export default ProfilePicture;
