import { message, Upload } from "antd";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
}

const DragAndDropFile = () => {
  return (
    <div className="mt-5">
      <Dragger {...props}>
        <p className="ant-upload-drag-icon"></p>
        <p className="ant-upload-text" style={{ color: "white" }}>
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint" style={{ color: "white" }}>
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}

export default DragAndDropFile