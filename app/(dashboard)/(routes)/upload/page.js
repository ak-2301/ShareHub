"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
function Upload() {
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    });
  };
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] m-5 text-center">
        Start <strong className="text-primary">Uploading</strong> files and{" "}
        <strong className="text-primary">Share</strong> it
      </h2>
      <UploadForm uploadBtnClick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
