import { CloudUploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const DragNDrop = ({ className }) => (
    <Dragger {...props} className={className}>
        <p className="">
            <CloudUploadOutlined style={{ fontSize: "24px" }} />
        </p>
        <p className="">Drag and Drop or <a href="#">Browse</a> to upload</p>
    </Dragger>
);
export default DragNDrop;