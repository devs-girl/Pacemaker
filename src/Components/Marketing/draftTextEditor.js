import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

export default function DrafttextEditor() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <div className='w-[90%] md:w-[430px] ' >
            <Editor
                apiKey='z4nqq6i1ksm6gjn3ih5jbtdr6yvhaokawt85y6jyqtvie8hp'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'formatselect | ' +
                        'forecolor bold italic underline | alignleft aligncenter ' +
                        'alignright alignjustify | ' + 'fontfamily ',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }'
                }}
            />
        </div>
    );
}
